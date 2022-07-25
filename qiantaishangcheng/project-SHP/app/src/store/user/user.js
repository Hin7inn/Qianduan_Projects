import { reqGetVerifyCode,reqUserRegister,reqUserLogin,reqUserInfo, reqLogout } from "@/api"
// 登录与注册模块
const state = {
    verifyCode:'',
    token:localStorage.getItem('TOKEN'),
    userInfo:{}
}
const mutations = {
    GETCODE(state,verifyCode){
        state.verifyCode = verifyCode
    },
    USERLOGIN(state,token){
        state.token = token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    CLEARUSERINFO(state){
        state.token = ''
        state.userInfo = {}
        localStorage.removeItem('TOKEN')
    }
}
const actions = {
    // 获取验证码
    async getCode({commit},number){
        // 该接口返回的是验证码,但是正常情况是后台把验证码发到用户手机上
        let result = await reqGetVerifyCode(number)
        if(result.code==200){
            commit('GETCODE',result.data);
            return 'sucess'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 用户注册
    async userRegister({commit},user){
        let result = await reqUserRegister(user)
        if(result.code==200){
            return 'sucess'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 登录(token)
    async userLogin({commit},data){
        let result = await reqUserLogin(data)
        // 服务器下发token,用户唯一标识符
        // 将来需要通过带token找服务器要信息
        if(result.code==200){
            commit('USERLOGIN',result.data.token)
            localStorage.setItem("TOKEN",result.data.token)
            return 'sucess'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 获取用户信息（token）
    async getUserInfo({commit}){
        let result = await reqUserInfo()
        if(result.code==200){
            commit('GETUSERINFO',result.data)
            return 'sucess'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 退出登录
    async userLogout({commit}){
        let result = await reqLogout()
        if(result.code==200){
            commit('CLEARUSERINFO')
            return 'sucess'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters = {}

export default {
    state, mutations, actions, getters
}