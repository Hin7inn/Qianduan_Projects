import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 注册全局三级联动组件
import TypeNav from '@/components/TypeNav/typenav'
import Carousel from '@/components/Carousel/carousel'
import Pagination from '@/components/Pagination/pagination'
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
// 引入饿了么UI组件
import { Button,MessageBox } from 'element-ui'
Vue.component(Button.name,Button)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

// 引入仓库
import store from '@/store';
// 引入MockServe.js---mock数据
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css'
import '../public/fa/css/all.css'
// 统一接口api文件夹里面全部请求函数
import * as API from '@/api'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 注册路由(简写)
  router,
  // 注册仓库:组件实例的身上会多出一个$store属性
  store,
}).$mount('#app')
