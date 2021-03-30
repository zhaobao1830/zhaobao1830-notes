# 笔记

Java项目相关的随手笔记

1、手机号验证

```java
 String phoneRegex = "^1[3|4|5|7|8][0-9]\\d{4,8}$";
 Pattern p = Pattern.compile(phoneRegex);
 Matcher m = p.matcher(phoneNumber);
 boolean isMatch = m.matches();
```
