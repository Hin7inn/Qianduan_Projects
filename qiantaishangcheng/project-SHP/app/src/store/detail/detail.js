import {reqGetGoodsInfo,reqAddOrUpdateShopCar} from '@/api';
// 封装游客身份模块uuid--->生成一个唯一随机字符串
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodInfo:{},
    // 游客的临时身份
    uuid_token:getUUID()
}
const actions = {
    // 获取产品信息的action
    async getGoodInfo({commit},skuId){
        let result = await reqGetGoodsInfo(skuId)
        if(result.code == 200){
            commit('GETGOODINFO',result.data)
        }
    },
    // 将产品添加到购物车中
    async addOrUpdateShopCar({commit},{skuId,skuNum}){
        // 加入购物车返回的解构
        /**
         * 服务器写入数据成功,并没有返回其他的数据,只是返回code=200,代表这次操作成功
         * 因为服务器没有返回其余数据,因此咱们不需要三连环存储数据
         */
        let result = await reqAddOrUpdateShopCar(skuId,skuNum)
        if(result.code == 200){
            // 服务器加入购物车成功
            return 'sucess'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo
    }
}
const getters = {
    // 路径导航简化数据
    categoryView(state){
        // 不能直接这样返回 state.goodInfo初试状态是一个空对象 所以加上||{}
        return state.goodInfo.categoryView||{}
    },
    // 简化产品信息的数据
    skuInfo(state){
        return state.goodInfo.skuInfo||{}
    },
    // 产品售卖属性的简化
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[]
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