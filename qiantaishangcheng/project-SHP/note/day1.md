1.vue-cli脚手架初始化项目
node + webpack + 淘宝镜像
1
node_modules文件夹:项目依赖文件夹

public文件夹:一般放置一些静态资源(图片),需要注意,放在public文件夹中的静态资源,webpack进行打包的时候,会原封不动打包到dist文件夹中

src文件夹(程序员源代码文件夹):

    assets文件夹:一般也是放置静态资源(一般放置多个组件公用的静态资源),需要注意,放置在assets文件夹里面静静态资源,在webpack打包的时候,webpack会把静态资源大作一个模块,打包到JS文件里面

    components文件夹:一般放置的是非路由组件(全局组件)

    App.vue:唯一的根组件,Vue当中的组件(.vue)
    main.js:程序入口文件,也是整个程序当中最先执行的文件

babel.confgi.js:配置文件(babel相关)

package.json文件:项目的"身份证",记录项目叫做什么.项目当中有哪些依赖.项目怎么运行

package-lock.json:缓存性文件

README.md:说明性文件

2.项目的其他配置

2.1项目运行起来的时候,让浏览器自动打开
---package.json
      "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },

2.2eslint校验功能关闭
---在vue.config.js中写入lintOnSave:false

2.3src文件夹简写方法,配置别名
jsconfig.json配置别名@提示 【@代表的是src文件夹,这样将来文件过多时,找的时候方便】
{
    "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "exclude":["node_modules","dist"]
}

3.项目路由的分析(vue-Router)
前端所谓路由:KV键值对.
key: URL(地址栏中的路径)
value: 相应的路由组件
注意: 项目结构为上中下结构

路由组件:
Home首页路由组件 Search路由组件 login登录路由 register注册路由
非路由组件:
Header(在首页和搜素页)
Footer(在首页和搜素页,但在登录页没有)

4.完成非路由组件Header与Footer业务
开发项目时:
1.书写静态页面(HTML+CSS)
2.拆分组件
3.获取服务器的数据动态显示
4.完成相应的动态业务逻辑

注意1:创建组件的时候,组件结构 + 组件的样式 + 图片资源

注意2:项目采用less样式时,浏览器不识别less样式,需要通过less,less-loader(安装5版本的)进行处理less,把less样式变为css样式,浏览器才可以识别

注意3:如果想让组件识别less样式,需要在style标签的身上加上lang=less

4.1使用组件的步骤(非路由组件)
-创建或定义
-引入
-注册
-使用

5.路由组件的搭建(vue-router)
路由组件有4个:Home Search Login Register
-components文件夹:经常放置的非路由组件(共用全局组件)
-pages|views文件夹:经常放置路由组件

5.1配置路由
项目当中配置的路由一般放置在Router文件夹中

5.2总结
路由组件与非路由组件的区别?
1:路由组件一般放置在pages|views文件夹中,非路由组件一般放置components文件夹中
2:路由组件一般需要在router文件夹中进行注册(使用的即为组件的名字),非路由组件在使用的时候,一般都是以标签的形式
3.注册完路由,不管路由组件还是非路由组件身上都有$route和$router属性

$route:一般获取路由信息(路径,query,params等等)
$router:一般进行编程式导航进行路由跳转(push|replace)

5.3路由的跳转?
路由的跳转有两种形式:
声明式导航router-link,可以进行路由的跳转
编程式导航push|replace,可以进行路由跳转

编程式导航: 声明式导航能做的,它都能做 但编程式导航除了可以进行路由跳转,还可以处理一些其他业务逻辑

6.Footer组件显示与隐藏
显示或隐藏组件:v-if|v-show
Footer组件:在Home,Search显示 / 在登录和注册时隐藏

6.1可以根据组件身上的$route获取当前路由的信息,通过路由路径判断Footer显示与隐藏
6.2配置路由的时候,可以给路由添加路由元信息(meta),路由需要配置对象,它的key不能乱写

7.路由传参
7.1路由跳转有几种方式?比如:A->B
声明式导航:router-link(务必有to属性)
编程式导航:利用的是组件实例的$router.push|replace方法

7.2:路由传参,参数有几种写法?
params:属于路径当中的一部分,需要注意,在配置路由的时候,需要占位
query:不属于路径当中的一部分,类似于ajax中的queryString,/home?k=v&kv=,不需要占位

8.路由传参相关面试题
1:路由传递参数(对象写法)path是否可以结合params参数一起使用
答:路由跳转传参的时候,对象的写法可以是name,path形式,但是path这种写法不能与params参数结合使用

2:如何指定params参数可传可不传
答:如果路由要求传递params参数(即已占位),但是代码中没有传递,则URL会出现问题
在配置路由的时候,在params参数占位后面加上一个"?",可以实现可传可不传

3:params参数可以传递也可以不传递,但是如果传递是空串,如何解决?
答:和第二题一样,传递空串时会出现URL出错,可以使用undefined解决

4.路由组件能不能传递props数据?
答:可以,只能传递params参数,且有三种写法,在路由配置中设置
布尔值写法:`props:true`
对象写法:`props:{a=1,b=2}`
函数写法:`props:($route)=>{return {keyword:$route.params.keyword,k"$route.query.k}}`

