import Vue from 'vue';
import Vuex from 'vuex'
// 引入仓库
import home from './home/home'
import search from './search/search'
import detail from './detail/detail'
import shopcart from './shopcart/shopcart'
import user from './user/user'
import trade from './trade/trade'
// 需要使用一次插件
Vue.use(Vuex)

// 对外暴露store类的一个实例
export default new Vuex.Store({
    // 注册小仓库
    modules:{
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }
})