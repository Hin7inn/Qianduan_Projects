// 引入路由及组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
import store from '@/store'
// 使用插件
Vue.use(VueRouter)

// 备份push|replace方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// 重写push|replace
// 第一个参数：跳转地址(传递哪些参数),第二个参数:成功回调,第三个参数:失败回调
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        // call&apll区别
        // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
        // 不同点：call与apply传递参数：call传递参数用逗号隔开，apply使用数组
        originPush.call(this.location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }

}
// 配置路由
let router = new VueRouter({
    // 配置
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 滚动条在最上方
        return { y: 0 }
    }
})
// 全局守卫：前置守卫：判断跳转前
router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if (token) {
        // 用户已登录
        if (to.path == '/login') {
            next('/home')
        } else {
            // 登录了但不是去login
            if (name) {
                next()
            } else {
                try {
                    // 没有用户信息，派发action让仓库用户信息跳转
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    // token失效获取不到用户信息，重新登陆
                    // 清除token
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
    } else {
        // 未登录暂时没有处理完毕
        next()
    }
})
export default router