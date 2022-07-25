import { reqCartList,reqDeleteCartById,reqUpdateCheckedById} from '@/api'
const state = {
    cartList:[]
}
const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    }
}
const actions = {
    // 获取购物车列表数据
    async getCartList({ commit }) {
        let result = await reqCartList()
        if(result.code==200){
            commit('GETCARTLIST',result.data)
        }
    },
    // 删除购物车某一个chanp
    async deleteCartListById({commit}){
        let result = await reqDeleteCartById(skuId)
        if(result.code==200){
            return 'sucess'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 修改购物车某一个产品的选中状态
    async updateCheckedById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedById(skuId,isChecked)
        if(result.code==200){
            return 'sucess'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 删除全部勾选的产品
    deleteAllCheckedCart({dispatch,getters}){
        let PromiseAll=[]
        // context:小仓库
        // 获取购物车中全部的产品(是一个数组)
        getters.cartList.cartInfoList.forEach(item=>{
            let result =  item.isChecked==1 ? dispatch('deleteCartListById',):''
            // 将每一次添加的promise到数组中
            PromiseAll.push(result)
        })
        return Promise.all(PromiseAll)
    },
    // 修改全部产品的选中状态
    updateAllCartChecked({dispatch,state},isChecked){
        let promiseAll=[]
        state.cartList[0].cartInfoList.forEach(item=>{
            let promise = dispatch('updateCheckedById',{skuId:item.skuId,isChecked})
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
}
const getters = {
    cartList(){
        return state.cartList[0]||{}
    },

}

export default {
    state, mutations, actions, getters
}