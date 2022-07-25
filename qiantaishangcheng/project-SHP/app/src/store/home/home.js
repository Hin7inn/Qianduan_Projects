import {reqCategoryList,reqGetBannerList,reqGetFloorList} from '@/api/index';
// home模块的小仓库
const actions = {
    // 通过api里面的接口函数调用,向服务器发请求,获取服务器数据
    async categoryList({commit}){
        let result = await reqCategoryList()
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
        }
    },
    // 获取首页轮播图的数据
    async getBannerList({commit}){
        let result = await reqGetBannerList()
        if(result.code==200){
            commit("GETBANNERLIST",result.data)
        }
    },
    // 获取floor数据
    async getFloorList({commit}){
        let result = await reqGetFloorList()
        if(result.code==200){
            commit('GETFLOORLIST',result.data)
        }
    }
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }

}
const state = {
    // state中数据默认初始值不能乱写 根据服务器返回接口进行初始化
    categoryList:[],
    // 轮播图数据
    bannerList:[],
    // floor数据
    floorList:[]
}
const getters = {}
    /**
     * state:仓库存储数据的地方
     * mutation:修改state的唯一手段
     * action:处理action,可以书写自己的业务逻辑,也可以处理异步
     * getters:理解为计算属性,用于简化仓库数据,让组件获取仓库的数据更加方便
     */
export default {
    state, mutations, actions, getters
}