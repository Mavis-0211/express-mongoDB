- **express**: web框架
- **express-session**: session中间件
- **connect-mongo**: 将session存储于mongodb，结合express-session使用
- **connect-flash**: 页面通知提示的中间件，基于session实现
- **ejs**: 模板
- **express-formidable**: 接收表单及文件的上传中间件
- **config-lite**: 读取配置文件
- **marked**: markdown解析
- **moment**: 时间格式化
- **mongolass**: mongodb驱动
- **objectid-to-timestamp**: 根据ObjectId生成时间戳
- **sha1**: sha1加密，用于密码加密
- **winston**: 日志
- **express-winston**: 基于winston的用于express的日志中间件

> 启动：
    - ```npm install```下载安装所需要的依赖
    - ```./mongod``` 启动mongodb数据库
    - 在项目根目录下输入 ```supervisor --harmony index``` 运行项目

学习文档：https://github.com/nswbmw/N-blog  
感谢该文档作者O(∩_∩)O~~