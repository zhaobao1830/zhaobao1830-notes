# swagger2

项目地址：[foodie-dev/deve](https://github.com/zhaobao1830/foodie-dev)

swagger2接口文档插件的使用

## springBoot 2.6以下

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

## springBoot 2.7

1、pom.xml安装插件

```xml
        <!-- swagger2 配置 -->
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>2.9.2</version>
            <!--Swagger异常：AbstractSerializableParameter : Illegal DefaultValue null for parameter type integer
                由于实体类使用@ApiModelProperty时，example属性没有赋值导致的，会进行非空判断
                解决： 排除swagger-annotations和swagger-models，上传1.5.21版本
            -->
            <exclusions>
                <exclusion>
                    <groupId>io.swagger</groupId>
                    <artifactId>swagger-annotations</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>io.swagger</groupId>
                    <artifactId>swagger-models</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <dependency>
            <groupId>io.swagger</groupId>
            <artifactId>swagger-annotations</artifactId>
            <version>1.5.21</version>
        </dependency>
        <dependency>
            <groupId>io.swagger</groupId>
            <artifactId>swagger-models</artifactId>
            <version>1.5.21</version>
        </dependency>

<!--        俩种显示样式-->
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger-ui</artifactId>
            <version>2.9.2</version>
        </dependency>
        
        <!-- https://mvnrepository.com/artifact/com.github.xiaoymin/swagger-bootstrap-ui -->
        <dependency>
            <groupId>com.github.xiaoymin</groupId>
            <artifactId>swagger-bootstrap-ui</artifactId>
            <version>1.9.6</version>
        </dependency>
```

::: tip 备注
当springBoot为2.7.18版本时，swagger2用的是2.9.2版本，因为2.10版本有问题

为了解决2.9.2版本的报错：AbstractSerializableParameter : Illegal DefaultValue null for parameter type integer

排除swagger-annotations和swagger-models，上传1.5.21版本

参考文档：[springboot整合swagger报错——AbstractSerializableParameter : Illegal DefaultValue null for parameter type](https://blog.csdn.net/qq_42937522/article/details/106208849)
:::

2、application.yml里配置

```yml
spring:
  mvc:
    pathmatch:
      matching-strategy: ant_path_matcher
```

::: tip 备注
这是为了解决org.springframework.context.ApplicationContextException: Failed to start bean 'documentationPluginsBootstrapper'; nested exception is java.lang.NullPointerException的问题
:::

3、创建配置文件Swagger2和controller里使用和上面的一样
