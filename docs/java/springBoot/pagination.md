# 分页

[文档地址](https://www.cnblogs.com/zhaobao1830/p/12876950.html)

分页需要用到的俩个参数：pageNum(页码)、pageSize（每页的条数）

有时候前端（移动端）传递的是start(从多少条记录开始)、count（获取的数量，也就是条数）

后端方法需要的是：pageNum和pageSize

一、将start、count转换为pageNum和pageSize

1、定义PageCounter类

```
@Setter
@Builder
public class PageCounter {
//    当前页码
    private Integer pageNum;
//    每页的条数
    private Integer pageSize;
}
```

2、将 start、count转换为pageNum、pageSie

```
public class CommonUtil {
//    将 start、count转换为pageNum、pageSie
    public static PageCounter converToPageParameter(Integer start, Integer count){
    // 这是从第0页开始
        int pageNum = start/count;
        PageCounter pageCounter = PageCounter.builder()
                .pageNum(pageNum)
                .pageSize(count)
                .build();
        return pageCounter;
    }
}
```

二、分页的实现方法

mybatis 里的pager 分页

1、pom.xml安装pagehelper 

```
<dependency>
   <groupId>com.github.pagehelper</groupId>
   <artifactId>pagehelper</artifactId>
   <version>4.1.0</version>
</dependency>
```

2、例子

```
/**
 * @Author: zhaobao1830
 * @Date: 2021/3/17 9:15
 * 返回分页数据
 */
public class PagedGridResult {
    /**
     * 当前页数
     */
    private Integer pageNum;
    /**
     * 每页条数
     */
    private Integer pageSize;
    /**
     *  总页数
     */
    private Integer pages;
    /**
     * 总条数
     */
    private long total;
    /**
     * 每行显示的内容
     */
    private List<?> rows;

    public int getPageNum() {
        return pageNum;
    }

    public void setPageNum(int pageNum) {
        this.pageNum = pageNum;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
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
}

serviece

@Override
public PagedGridResult queryAll(int pageNum, int pageSize) {
    // 传入pageNum, pageSize参数
    PageHelper.startPage(pageNum, pageSize);
    // 获取userList
    List<User> userList = userMapper.queryAll();
    // 对userList进行处理，获取对应的volist
    List<UserVO> userVoList = assembleUserVoList(userList);
    return setterPagedGrid(pageNum, pageSize, userVoList);
}

public List<UserVO> assembleUserVoList(List<User> userList) {
    List<UserVO> userVoList = Lists.newArrayList();
    for (User user : userList) {
        UserVO userVO = assembleUserVo(user);
        userVoList.add(userVO);
    }
    return userVoList;
}

public UserVO assembleUserVo(User user) {
    UserVO userVo = new UserVO();
    userVo.setId(user.getId());
    userVo.setUsername(user.getUsername());
    userVo.setRole(user.getRole());
    userVo.setPhone(user.getPhone());
    userVo.setEmail(user.getEmail());
    return userVo;
}

/**
 * 封装分页方法
 * @param pageNum 当前页数
 * @param pageSize 每页条数
 * @param list 列表
 * @return {
 *     pageNum: 1
 *     pageSize: 6
 *     pages: 1
 *     rows: [{id: 1, username: "admin"}]
 *     total: 6
 * }
 */
public PagedGridResult setterPagedGrid(Integer pageNum, Integer pageSize, List<?> list) {
    PageInfo<?> pageList = new PageInfo<>(list);
    PagedGridResult grid = new PagedGridResult();
    grid.setPageNum(pageNum);
    grid.setPageSize(pageSize);
    grid.setPages(pageList.getPages());
    grid.setTotal(pageList.getTotal());
    grid.setRows(list);
    return grid;
}
```

jpa里使用PageRequest

简单版：

```
@Override
    public Page<Spu> getLatestPagingSpu(Integer pageNum, Integer pageSize) {
        Pageable page = PageRequest.of(pageNum, pageSize, Sort.by("createTime").descending());
        return spuRepository.findAll(page);
    }
```

PageRequest.of（）将对应的参数传递进去

完整版：

1、、pom.xml安装dozermapper  用来对java bean进行拷贝

用到的场景：从数据库查询回来的数据，前端不全用的上，需要进行二次封装（Vo），自己一个个属性赋值太浪费时间。这时可以使用dozermapper  

```
<dependency>
      <groupId>com.github.dozermapper</groupId>
      <artifactId>dozer-core</artifactId>
      <version>6.5.0</version>
</dependency>
```

2、封装分页实体类

```
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

```
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

```
@Override
    public Page<Spu> getLatestPagingSpu(Integer pageNum, Integer pageSize) {
        Pageable page = PageRequest.of(pageNum, pageSize, Sort.by("createTime").descending());
        return spuRepository.findAll(page);
    }
```

使用PageRequest生成Pageable

5、controller

```
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
