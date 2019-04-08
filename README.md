# gshop-client

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

--src
    --api                   //与后台交互模块文件夹
    --common                //通用资源文件夹，如fonts/img
    --components            //非路由组件文件夹
    --filters               //自定义过滤器模块文件夹
    --mock                  //模拟数据接口文件夹
    --views                 //路由组件文件夹
    --router                //路由器文件夹
    --store                 //vuex相关模块文件夹


#### 初始化环境
    1.添加CSS默认样式 + 添加公用class
    2.设置移动端 viewport
        1.解决点击响应延时0.3s问题
    3.配置vue-router