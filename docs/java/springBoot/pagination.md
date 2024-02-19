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

项目：[misscmszb](https://github.com/zhaobao1830/misscmszb)

mybatis-plus内置分页查询，也可以使用pagehelper

1、CommonConfiguration.java

对MybatisPlus进行分页配置，只有加上这个配置，IPage的total才能有值

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
2、LogController.java

```java
package com.zb.misscmszb.controller.cms;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.zb.misscmszb.core.annotation.GroupRequired;
import com.zb.misscmszb.core.annotation.PermissionMeta;
import com.zb.misscmszb.core.annotation.PermissionModule;
import com.zb.misscmszb.core.util.PageUtil;
import com.zb.misscmszb.dto.log.QueryLogDTO;
import com.zb.misscmszb.dto.query.BasePageDTO;
import com.zb.misscmszb.model.LogDO;
import com.zb.misscmszb.service.LogService;
import com.zb.misscmszb.vo.PageResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 日志控制器
 */
@RestController
@RequestMapping("/cms/log")
@PermissionModule(value = "日志")
@Validated
public class LogController {

    @Autowired
    private LogService logService;

    @GetMapping("/search")
    @GroupRequired
    @PermissionMeta(value = "搜索日志")
    public PageResponseVO<LogDO> searchLogs(QueryLogDTO dto) {
        IPage<LogDO> iPage = logService.searchLogPage(
                dto.getPage(), dto.getCount(),
                dto.getName(), dto.getKeyword(),
                dto.getStart(), dto.getEnd()
        );
        return PageUtil.build(iPage);
    }
}

```
3、LogServiceImpl.java

```java
package com.zb.misscmszb.service.impl;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.zb.misscmszb.core.mybatis.LinPage;
import com.zb.misscmszb.mapper.LogMapper;
import com.zb.misscmszb.model.LogDO;
import com.zb.misscmszb.service.LogService;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * 日志服务实现类
 */
@Service
public class LogServiceImpl extends ServiceImpl<LogMapper, LogDO> implements LogService {

    @Override
    public IPage<LogDO> searchLogPage(Integer page, Integer count, String name, String keyword, Date start, Date end) {
        LinPage<LogDO> pager = new LinPage<>(page, count);
        if (keyword != null) {
            return this.baseMapper.searchLogsByUsernameAndKeywordAndRange(pager, name, "%" + keyword + "%", start, end);
        } else {
            return this.baseMapper.findLogsByUsernameAndRange(pager, name, start, end);
        }
    }
}

```

4、PageResponseVO.java 定义分页返回的数据格式

```java
package com.zb.misscmszb.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * 分页数据统一视图对象
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PageResponseVO<T> {

    private Integer total;

    private List<T> items;

    private Integer page;

    private Integer count;

}

```

5、PageUtil.java 定义分页工具类，对mapper查询到的数据进行处理，转换成上面定义的PageResponseVO对象格式

```java
package com.zb.misscmszb.core.util;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.zb.misscmszb.vo.PageResponseVO;

import java.util.List;

/**
 * 分页工具类
 */
public class PageUtil {

    private PageUtil() {
        throw new IllegalStateException("Utility class");
    }

    public static <T> PageResponseVO<T> build(IPage<T> iPage) {
        return new PageResponseVO<>(Math.toIntExact(iPage.getTotal()), iPage.getRecords(),
                Math.toIntExact(iPage.getCurrent()), Math.toIntExact(iPage.getSize()));
    }

    public static <K, T> PageResponseVO<K> build(IPage<T> iPage, List<K> records) {
        return new PageResponseVO<>(Math.toIntExact(iPage.getTotal()), records,
                Math.toIntExact(iPage.getCurrent()),
                Math.toIntExact(iPage.getSize()));
    }

}

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
