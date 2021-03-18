# swagger2

swagger2接口文档插件的使用

1、pom.xml安装插件

```xml
<!-- swagger2 配置 -->
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>2.4.0</version>
        </dependency>
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger-ui</artifactId>
            <version>2.4.0</version>
        </dependency>
        <dependency>
            <groupId>com.github.xiaoymin</groupId>
            <artifactId>swagger-bootstrap-ui</artifactId>
            <version>1.6</version>
        </dependency>
```

2、创建配置文件Swagger2

```java
@Configuration
@EnableSwagger2
public class Swagger2 {

//    http://localhost:自定义的端口/swagger-ui.html     原路径
//    http://localhost:自定义的端口/doc.html     原路径

    /**
     * 配置swagger2核心配置 docket
     * @return
     */
    @Bean
    public Docket createRestApi() {
        /**
         * 指定api类型为swagger2
         */
        return new Docket(DocumentationType.SWAGGER_2)
                /**
                 * 用于定义api文档汇总信息
                 */
                    .apiInfo(apiInfo())
                    .select()
                    .apis(RequestHandlerSelectors
                            /**
                             * 指定controller包
                             */
                            .basePackage("com.zb.mmallzb.controller"))
                    /**
                     * 所有controller
                     */
                    .paths(PathSelectors.any())
                    .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                /**
                 * 文档页标题
                 */
                .title("java架构师接口api")
                /**
                 * 联系人信息
                 */
                .contact(new Contact("zhaobao1830", "", ""))
                /**
                 * 详细信息
                 */
                .description("java架构师api文档")
                /**
                 * 文档版本号
                 */
                .version("1.0.1")
                /**
                 * 网站地址
                 */
                .termsOfServiceUrl("")
                .build();
    }

}

```

3、controller里使用

例子：

```java
@Api(value = "用户", tags = {"用户相关接口"}, consumes = "application/json")
@Controller
@RequestMapping("user/")
public class UserController {

    @Autowired
    private IUserService iUserService;

    @ApiOperation(value = "注册", notes = "注册", httpMethod = "POST")
    @RequestMapping(value = "register.do", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponseJsonResult register(@RequestBody UserBO userBO) {
        String username = userBO.getUsername();
        String password = userBO.getPassword();
        String confirmPassword = userBO.getConfirmPassword();

        // 0、判断用户名和密码不为空
        if (StringUtils.isBlank(username) ||
                StringUtils.isBlank(password) ||
                StringUtils.isBlank(confirmPassword)
        ) {
            return ServerResponseJsonResult.errorMsg("用户名或密码不能为空");
        }
        // 1、查询用户名是否存在
        boolean isExist = iUserService.queryUsernameIsExist(username);
        if (isExist) {
            return ServerResponseJsonResult.errorMsg("用户名已存在");
        }
        // 2、密码长度不能少于6位
        if (password.length() < 6) {
            return ServerResponseJsonResult.errorMsg("密码长度不能少于6");
        }
        // 3、判断俩次密码是否一致
        if (!password.equals(confirmPassword)) {
            return ServerResponseJsonResult.errorMsg("两次密码输入不一致");
        }
        // 4、实现注册
        boolean isRegister = iUserService.register(userBO);
        System.out.println(isRegister);
        if (isRegister) {
            return ServerResponseJsonResult.ok("注册成功");
        } else {
            return ServerResponseJsonResult.ok("注册失败");
        }
    }
}
```

[参考文档](https://blog.csdn.net/xiaojin21cen/article/details/78654652)
