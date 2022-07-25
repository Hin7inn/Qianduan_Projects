import Home from '@/pages/Home/home'
import Search from '@/pages/Search/search'
import Register from '@/pages/Register/register'
import Login from '@/pages/Login/login'
import Detail from '@/pages/Detail/index'
import AddCartSuccess from '@/pages/AddCartSuccess/index'
import ShortCart from '@/pages/ShopCart/index'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
export default [
    {
        path: "/home",
        component: Home,
        meta: { show: true }
    },
    {
        path: "/pay",
        component: Pay,
        meta: { show: true }
    },
    {
        path: "/trade",
        component: Trade,
        meta: { show: true }
    },
    {
        path: "/shopcart",
        component: ShortCart,
        meta: { show: true }
    },
    {   
        name:'addcartsuccess',
        path: "/addcartsuccess",
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path: "/detail/:skuId",
        component: Detail,
        meta: { show: true }
    },
    {
        name: "search",
        path: "/search/:keyword?",
        component: Search,
        meta: { show: true }
    },
    {
        path: "/register",
        component: Register,
        meta: { show: false }
    },
    {
        path: "/login",
        component: Login,
        meta: { show: false }
    },
    // 重定向,在项目跑起来的时候,访问/,立马定向到首页
    {
        path: "*",
        redirect: "/home",
        meta: { show: true }
    }

]