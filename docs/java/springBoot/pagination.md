# 分页

[文档地址](https://www.cnblogs.com/zhaobao1830/p/12876950.html)

分页需要用到的俩个参数：pageNum(页码)、pageSize（每页的条数）

有时候前端（移动端）传递的是start(从多少条记录开始)、count（获取的数量，也就是条数）

后端方法需要的是：pageNum和pageSize

## 参数转换

将start、count转换为pageNum和pageSize

项目地址：[https://github.com/zhaobao1830/misszb](https://github.com/zhaobao1830/misszb)

1、定义PageCounter类

```java
@Setter
@Builder
public class PageCounter {
//    当前页码
    private Integer pageNum;
//    每页的条数
    private Integer pageSize;
}
```

::: tip 备注
类上加了@Builder注解，就可以使用PageCounter.builder().build()这种方式实例化对象
:::

2、将 start、count转换为pageNum、pageSie

```java
public class CommonUtil {
//    将 start、count转换为pageNum、pageSie
    public static PageCounter converToPageParameter(Integer start, Integer count){
        // 这是从第0页开始
        int pageNum = start/count;
        
        // 使用builder构建PageCounter对象
        PageCounter pageCounter = PageCounter.builder()
                .pageNum(pageNum)
                .pageSize(count)
                .build();
        return pageCounter;
    }
}
```

::: tip 备注
PC端分页时候传递的是pageNum（当前页码）和pageSie（每页查询的条数），可以直接使用

移动端很多时候传递的是start（起始位置）和count（每次查询的条数）就可以使用上面的方法进行转换
:::

::: tip 备注
JAP里，使用PageRequest.of()生成分页需要的参数，给JPA的查询方法使用，这个方法里传入的参数是pageNum和pageSie
:::

## 实现

### mybatis

项目：[foodie-dev/deve](https://github.com/zhaobao1830/foodie-dev)

1、pom.xml安装pagehelper 

```xml
<!--pagehelper -->
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper-spring-boot-starter</artifactId>
    <version>1.4.7</version>
</dependency>
```

2、例子

PagedGridResult.java

封装返回的分页数据

```java
package com.zb.utils;

import java.util.List;

/**
 *
 * @Description: 用来返回分页Grid的数据格式
 */
public class PagedGridResult {
	
	private int page;			// 当前页数
	private int total;			// 总页数	
	private long records;		// 总记录数
	private List<?> rows;		// 每行显示的内容

	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public long getRecords() {
		return records;
	}
	public void setRecords(long records) {
		this.records = records;
	}
	public List<?> getRows() {
		return rows;
	}
	public void setRows(List<?> rows) {
		this.rows = rows;
	}
}

```

ItemsController.java

```java
    @ApiOperation(value = "查询商品评价", notes = "查询商品评价", httpMethod = "GET")
    @RequestMapping(value = "/comments", method = RequestMethod.GET)
    public IMOOCJSONResult comments(
            @ApiParam(name = "itemId", value = "商品id", required = true)
            @RequestParam String itemId,
            @ApiParam(name = "level", value = "评价等级", required = false)
            @RequestParam Integer level,
            @ApiParam(name = "page", value = "查询下一页的第几页", required = false)
            @RequestParam Integer page,
            @ApiParam(name = "pageSize", value = "分页的每一页显示的条数", required = false)
            @RequestParam Integer pageSize
    ){
        if (StringUtils.isBlank(itemId)) {
            return IMOOCJSONResult.errorMsg(null);
        }

        if (page == null) {
            page = 1;
        }

        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }

        PagedGridResult grid = itemService.queryPagedComments(itemId,
                                                                level,
                                                                page,
                                                                pageSize);

        return IMOOCJSONResult.ok(grid);
    }
```

ItemServiceImpl.java

```java
    @Transactional(propagation = Propagation.SUPPORTS)
    @Override
    public PagedGridResult queryPagedComments(String itemId,
                                              Integer level,
                                              Integer page,
                                              Integer pageSize) {

        Map<String, Object> map = new HashMap<>();
        map.put("itemId", itemId);
        map.put("level", level);

        /*
          page: 第几页
          pageSize: 每页显示条数
         */
        PageHelper.startPage(page, pageSize);

        List<ItemCommentVO> list = itemsMapperCustom.queryItemComments(map);

        for (ItemCommentVO vo : list) {
            vo.setNickname(DesensitizationUtil.commonDisplay(vo.getNickname()));
        }

        return setterPagedGrid(list, page);
    }
    
    // 封装分页方法
    private PagedGridResult setterPagedGrid(List<?> list, Integer page) {
        PageInfo<?> pageList = new PageInfo<>(list);
        PagedGridResult grid = new PagedGridResult();
        grid.setPage(page);
        grid.setRows(list);
        grid.setTotal(pageList.getPages());
        grid.setRecords(pageList.getTotal());
        return grid;
    }
```

### mybatis-plus

项目：[foodie-dev](https://github.com/zhaobao1830/foodie-dev)

mybatis-plus内置分页查询，也可以使用PageHelper

1、CommonConfiguration.java

对MybatisPlus进行分页配置，只有加上这个配置，IPage才能使用

```java
    /**
     * 新的分页插件,一缓和二缓遵循mybatis的规则
     * 只有加上这个，查询后IPage里的total才能有值，不然就是0
     */
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));
        return interceptor;
    }
```

2、PagedGridResult 定义返回分页Grid的数据格式

```java
package com.zb.utils;

import java.util.List;

/**
 *
 * @Description: 用来返回分页Grid的数据格式
 */
public class PagedGridResult<T> {
	
	private long current;	// 当前页
	private long pages;		// 总页数
	private long total;		// 总记录数
	private List<?> rows;	// 每页查询的结果集

	public long getCurrent() {
		return current;
	}

	public void setCurrent(long current) {
		this.current = current;
	}

	public long getPages() {
		return pages;
	}

	public void setPages(long pages) {
		this.pages = pages;
	}

	public long getTotal() {
		return total;
	}

	public void setTotal(long total) {
		this.total = total;
	}

	public List<?> getRows() {
		return rows;
	}

	public void setRows(List<?> rows) {
		this.rows = rows;
	}

	public PagedGridResult() {
	}

	public PagedGridResult(long current, long pages, long total, List<?> rows) {
		this.current = current;
		this.pages = pages;
		this.total = total;
		this.rows = rows;
	}
}

```

3、PageUtil 定义分页工具类

```java
package com.zb.utils;

import com.baomidou.mybatisplus.core.metadata.IPage;

import java.util.List;

/**
 * @Author zhaobao1830
 * @Date 2024-02-19 09:45
 * @Description: 分页工具类
 */
public class PageUtil {
    private PageUtil() {
        throw new IllegalStateException("Utility class");
    }

    public static <T> PagedGridResult<T> build(IPage<T> iPage) {
        return new PagedGridResult<>(iPage.getCurrent(), iPage.getPages(), iPage.getTotal(), iPage.getRecords());
    }

    public static <K, T> PagedGridResult<K> build(IPage<T> iPage, List<K> records) {
        return new PagedGridResult<>(iPage.getCurrent(), iPage.getPages(), iPage.getTotal(), iPage.getRecords());
    }
}

```

4、ItemsController.java

```java
@ApiOperation(value = "查询商品评价", notes = "查询商品评价", httpMethod = "GET")
    @RequestMapping(value = "/comments", method = RequestMethod.GET)
    public IMOOCJSONResult comments(
            @ApiParam(name = "itemId", value = "商品id", required = true)
            @RequestParam String itemId,
            @ApiParam(name = "level", value = "评价等级")
            @RequestParam Integer level,
            @ApiParam(name = "page", value = "查询下一页的第几页", required = true)
            @RequestParam(defaultValue = "1") Integer page,
            @ApiParam(name = "pageSize", value = "分页的每一页显示的条数", required = true)
            @RequestParam(defaultValue = "10") Integer pageSize
    ){
        if (StringUtils.isBlank(itemId)) {
            return IMOOCJSONResult.errorMsg(null);
        }
        
        PagedGridResult<ItemCommentVO> grid = itemService.queryPagedComments(itemId,
                                                                level,
                                                                page,
                                                                pageSize);

        return IMOOCJSONResult.ok(grid);
    }
```

::: tip 备注
分页使用mybatis-plus内置的IPage的时候，page和pageSize参数必须传，不然会报如下错误：

Required request parameter 'page' for method parameter type Integer is present but converted to null

原因是IPage是基于拦截器的，如果参数里没有这俩个参数，或者值是Null，就会报错

后端的解决办法是：设置defaultValue
:::

::: tip 备注
如果分页使用的是PageHelper，请求的时候可以不传这俩个参数，

后端的解决办法是：

1、设置defaultValue

2、在方法里可以通过判断为Null，再次赋值

```java
 if (page == null) {
     page = 1;
 }
```
:::

5、ItemsServiceImpl

```java
@Transactional(propagation = Propagation.SUPPORTS)
    @Override
    public PagedGridResult<ItemCommentVO> queryPagedComments(String itemId,
                                    Integer level,
                                    Integer page,
                                    Integer pageSize) {

        // 创建page对象
        Page<ItemsComments> page1 = new Page<>(page, pageSize);
        // 查询数据的sql和不分页的一样，只需要传入page对象就行，sql里不用分页的参数
        IPage<ItemCommentVO> iPage= itemsMapperCustom.queryItemComments(page1, itemId, level);
        // 对查询出的分页对象里的列表数据进行二次处理
        List<ItemCommentVO> list = iPage.getRecords();
        for (ItemCommentVO vo : list) {
            // 对Nickname字段进行脱敏
            vo.setNickname(DesensitizationUtil.commonDisplay(vo.getNickname()));
        }
        // 对分页数据进行加工处理
        return PageUtil.build(iPage);
    }
```

6、ItemsMapperCustom

```java
IPage<ItemCommentVO> queryItemComments(Page<ItemsComments> page, String itemId, Integer level);
```

7、ItemsMapperCustom.xml

```xml
<select id="queryItemComments" resultType="com.zb.pojo.vo.ItemCommentVO">
        SELECT
        ic.comment_level as commentLevel,
        ic.content as content,
        ic.sepc_name as specName,
        ic.created_time as createdTime,
        u.face as userFace,
        u.nickname as nickname
        FROM
        items_comments ic
        LEFT JOIN
        users u
        ON
        ic.user_id = u.id
        WHERE
        ic.item_id = #{itemId}
        <if test=" level != null and level != '' ">
            AND ic.comment_level = #{level}
        </if>
    </select>
```

### JAP

**简单版：**

```java
@Override
    public Page<Spu> getLatestPagingSpu(Integer pageNum, Integer pageSize) {
        Pageable page = PageRequest.of(pageNum, pageSize, Sort.by("createTime").descending());
        return spuRepository.findAll(page);
    }
```

PageRequest.of（）将对应的参数传递进去

::: tip 备注
这种返回的数据结构是插件自带的，不符合前端的需求，所以我们需要对分页返回的信息进行二次封装
:::

**完整版：**

项目地址：[https://github.com/zhaobao1830/misszb](https://github.com/zhaobao1830/misszb)

1、pom.xml安装dozermapper  用来对java bean进行拷贝

用到的场景：从数据库查询回来的数据，前端不全用的上，需要进行二次封装（Vo），自己一个个属性赋值太浪费时间。这时可以使用dozermapper  

```xml
<dependency>
      <groupId>com.github.dozermapper</groupId>
      <artifactId>dozer-core</artifactId>
      <version>6.5.0</version>
</dependency>
```

2、封装分页实体类

```java
//封装分页实体类
@Getter
@Setter
@NoArgsConstructor
public class Paging<T> {
    // 总条数
    private Long total;
    // 当前返回的条数
    private Integer count;
    // 当前页吗
    private Integer page;
    // 总页数
    private Integer totalPage;
    // 结果 不确定数组里元素的类型，所以使用泛型
    private List<T> items;

    public Paging(Page<T> pageT) {
        this.initPageParameters(pageT);
        this.items = pageT.getContent();
    }
    // 静态方法，子类可以调用
    void initPageParameters(Page<T> pageT) {
        this.total = pageT.getTotalElements();
        this.count = pageT.getSize();
        this.page = pageT.getNumber();
        this.totalPage = pageT.getTotalPages();
    }
}
```

3、对分页进行再次封装，添加DozerBeanMapper功能

```java
// 对分页进行再次封装，添加DozerBeanMapper功能
// 如果不需要进行vo赋值，直接用Paging就行
// 需要俩个泛型 T是源文件的类型  K是目标文件的类型
public class PagingDozer<T, K> extends Paging{
    @SuppressWarnings("unchecked")
    public PagingDozer(Page<T> pageT, Class<K> classk) {
        this.initPageParameters(pageT);

        // 使用DozerBeanMapper拷贝属性
        Mapper mapper = DozerBeanMapperBuilder.buildDefault();
        List<T> tList = pageT.getContent();
        List<K> voList = new ArrayList<>();
        // 将查询出的数据循环赋值到vo中
        tList.forEach(t -> {
            // t是源文件，classk是目标文件的class
            K vo = mapper.map(t, classk);
            voList.add(vo);
        });
        this.setItems(voList);
    }
}
```

4、service

```java
@Override
    public Page<Spu> getLatestPagingSpu(Integer pageNum, Integer pageSize) {
        Pageable page = PageRequest.of(pageNum, pageSize, Sort.by("createTime").descending());
        return spuRepository.findAll(page);
    }
```

使用PageRequest生成Pageable

5、controller

```java
@RequestMapping(value = "/latest", method = RequestMethod.GET)
    public PagingDozer<Spu, SpuSimplifyVO> getLatestSpuList(@RequestParam(defaultValue = "0") Integer start,
                                                            @RequestParam(defaultValue = "10") Integer count
    ) {
        PageCounter pageCounter = CommonUtil.converToPageParameter(start, count);
        // 从数据库查询出的数据
        Page<Spu> page = spuService.getLatestPagingSpu(pageCounter.getPageNum(), pageCounter.getPageSize());
        return new PagingDozer<>(page, SpuSimplifyVO.class);
    }
```

## PageHelper和 IPage

这俩个都用于分页

### 使用方法

PageHelper：PageHelper.startPage(page, pageSize)，后面是mapper方法

IPage：创建IPage对象，将这个对象传入到mapper方法里

### 原理

#### PageHelper

将传入的页码和条数赋值给了Page对象，保存到了一个本地线程ThreadLocal中，进入Mybatis的拦截器中。

调用方法的时候，在拦截器中获取本地线程中保存的分页的参数。将这些分页参数和原本的sql以及内部定义好的sql进行拼接完成sql的分页处理。

中间会进行判断该sql 的类型是查询还是修改操作。

如果是查询才会进入分页的逻辑并判断封装好的Page对象是否是null，null则不分页，否则分页。

#### IPage

基于拦截器，但是这个拦截的是方法以及方法中的参数，也会判断是否是查询操作。

如果是查询操作，才会进入分页的处理逻辑。 

进入分页逻辑处理后，拦截器会通过反射获取该方法的参数进行判断是否存在IPage对象的实现类。

如果不存在则不进行分页，存在则将该参数赋值给IPage对象。

然后进行拼接sql的处理完成分页操作。

但是使用IPage需要注入一个bean拦截器交给spring进行管理。如下。否则不会进行拦截。

::: tip 备注
使用IPage需要注入一个bean拦截器交给spring进行管理

代码如下：

```java
@Bean
public MybatisPlusInterceptor mybatisPlusInterceptor() {
    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
    interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));
    return interceptor;
}    
```

:::
