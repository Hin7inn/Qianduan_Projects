// 当前模块:对所有api接口进行统一管理
import requests from './request';
import mockRequests from './mockAjax';
// 三级联动接口
// /api/product/getBaseCategoryList GET请求 无参数

// 发请求:axios发送请求返回结果为axios对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

// 获取banner(首页轮播图)
export const reqGetBannerList = () => mockRequests.get('/banner')

// 获取floor数据
export const reqGetFloorList = () => mockRequests.get('/floor')

// 获取搜索模块数据 地址:/api/list 请求方式:post 参数:
/**
 * 
{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
 * 
 */
// 当前接口传递的参数至少为一个空对象 
export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params})

// 获取产品详情信息的接口 URL:/api/item/{ skuId } 请求方式:get
export const reqGetGoodsInfo = (skuId) => requests({url:`/item/${ skuId }`,method:'get'})

// 将产品添加||修改到购物车当中 /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCar = (skuId,skuNum) => requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'POST'})

// 获取购物车列表数据接口 /api/cart/cartList
export const reqCartList = ()=>requests({url:'/cart/cartList',method:'get'})

// 删除购物车产品接口
export const reqDeleteCartById = (skuId) => requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

// 修改商品的选中状态
export const reqUpdateCheckedById = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

// 获取验证码
export const reqGetVerifyCode = (number)=>requests({url:`/user/passport/sendCode/${number}`,method:'get'})

// 注册用户
export const reqUserRegister = (data)=>requests({url:`/user/passport/register`,data,method:'post'})

// 登录
export const reqUserLogin = (data)=>requests({url:`/user/passport/login`,data,method:'post'})

// 获取用户信息(带token)
export const reqUserInfo = ()=>requests({url:`/user/passport/auth/getUserInfo`,method:'get'})

// 退出登录
export const reqLogout = ()=>requests({url:`/user/passport/logout`,method:'get'})

// 获取用户地址信息
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

// 获取商品清单
export const reqOrderInfo = ()=>requests({url:'/order/auth/trade',method:'get'})

// 提交订单
export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

// 获取支付信息
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})
