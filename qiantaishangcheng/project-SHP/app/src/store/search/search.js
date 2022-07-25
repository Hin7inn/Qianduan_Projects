import {reqGetSearchInfo} from '@/api'
// search模块的小仓库
const actions = {
    // 获取search模块数据
    async getSearchList({commit},params={}){ //默认参数 没有就为空对象
        // params形参:是当用户派发action时第二个参数传递过来的 至少是一个空对象
        let result = await reqGetSearchInfo(params)
        if(result.code==200){
            commit('GETSEARCHLIST',result.data)
        }
    }
}
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
const state = {
    searchList:{}
}
// 简化仓库当中的数据
// 可以把将来在组件当中需要的数据进行简化,方便以后获取数据时使用
const getters = {
    goodsList(state){
        // 假如没有网络 应该返回undefined 至少返回一个数组
        return state.searchList.goodsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList
    },
    attrsList(state){
        return state.searchList.attrsList
    }
}
    /**
     * state:仓库存储数据的地方
     * mutation:修改state的唯一手段
     * action:处理action,可以书写自己的业务逻辑,也可以处理异步
     * getters:理解为计算属性,用于简化仓库数据,让组件获取仓库的数据更加方便
     */
export default {
    state, mutations, actions, getters
}