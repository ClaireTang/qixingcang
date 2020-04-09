
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/index/custom","pages/index/search","pages/classify/classify","pages/classify/index","pages/cart/index/index","pages/member/index/index","pages/member/coupon/index","pages/member/balance/index","pages/member/balance/recharge","pages/member/balance/withdraw_cash","pages/member/balance/details","pages/member/balance/cashlist","pages/member/balance/bankcard","pages/member/balance/add_bankcard","pages/member/collection/index","pages/member/history/index","pages/member/address/list","pages/member/address/index","pages/member/setting/index","pages/member/setting/user_info/index","pages/member/setting/user_info/password","pages/member/integral/index","pages/member/invite/index","pages/member/invite/list","pages/member/invoice/index","pages/member/take_delivery/index","pages/member/take_delivery/list","pages/goods/index/index","pages/goods/index/group","pages/goods/place-order/index","pages/goods/place-order/invoice","pages/goods/place-order/storelist","pages/goods/payment/index","pages/goods/payment/auth","pages/goods/payment/result","pages/member/order/orderlist","pages/member/order/orderdetail","pages/member/order/invitation_group","pages/member/after_sale/index","pages/member/after_sale/list","pages/member/after_sale/detail","pages/member/order/evaluate","pages/member/order/express_delivery","pages/article/index","pages/article/list","pages/login/choose/index","pages/login/login/index","pages/login/login/index1","pages/login/forget/forget","pages/share","pages/author","pages/login/register/index","pages/classify/pintuan_list","pages/goods/index/pintuan","pages/form/detail/form","pages/member/distribution/index","pages/member/distribution/apply","pages/member/distribution/apply_state","pages/member/distribution/user","pages/member/distribution/agreement","pages/member/distribution/order","pages/member/distribution/popularize","pages/member/distribution/my_store","pages/member/distribution/store_setting","pages/activity/index","pages/share/jump","pages/store_map/index","pages/member/customer_service/index","pages/member/setting/subscription/index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"新模板","navigationBarBackgroundColor":"#fff","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#999","selectedColor":"#333","backgroundColor":"#fff","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/image/index_gray.png","selectedIconPath":"static/image/index_black.png"},{"pagePath":"pages/classify/classify","text":"分类","iconPath":"static/image/classify_gray.png","selectedIconPath":"static/image/classify_black.png"},{"pagePath":"pages/cart/index/index","text":"购物车","iconPath":"static/image/cart_gray.png","selectedIconPath":"static/image/cart_black.png"},{"pagePath":"pages/member/index/index","text":"我的","iconPath":"static/image/user_gray.png","selectedIconPath":"static/image/user_black.png"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Jshop","compilerVersion":"2.6.9","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":true}},{"path":"/pages/index/custom","meta":{},"window":{"navigationBarTitleText":"页面","enablePullDownRefresh":true}},{"path":"/pages/index/search","meta":{},"window":{"navigationBarTitleText":"搜索"}},{"path":"/pages/classify/classify","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分类"}},{"path":"/pages/classify/index","meta":{},"window":{"navigationBarTitleText":"商品列表"}},{"path":"/pages/cart/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车"}},{"path":"/pages/member/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心"}},{"path":"/pages/member/coupon/index","meta":{},"window":{"navigationBarTitleText":"我的优惠券"}},{"path":"/pages/member/balance/index","meta":{},"window":{"navigationBarTitleText":"我的余额"}},{"path":"/pages/member/balance/recharge","meta":{},"window":{"navigationBarTitleText":"充值"}},{"path":"/pages/member/balance/withdraw_cash","meta":{},"window":{"navigationBarTitleText":"提现"}},{"path":"/pages/member/balance/details","meta":{},"window":{"navigationBarTitleText":"余额明细"}},{"path":"/pages/member/balance/cashlist","meta":{},"window":{"navigationBarTitleText":"提现记录"}},{"path":"/pages/member/balance/bankcard","meta":{},"window":{"navigationBarTitleText":"我的银行卡"}},{"path":"/pages/member/balance/add_bankcard","meta":{},"window":{"navigationBarTitleText":"添加银行卡"}},{"path":"/pages/member/collection/index","meta":{},"window":{"navigationBarTitleText":"我的收藏"}},{"path":"/pages/member/history/index","meta":{},"window":{"navigationBarTitleText":"我的足迹"}},{"path":"/pages/member/address/list","meta":{},"window":{"navigationBarTitleText":"地址管理"}},{"path":"/pages/member/address/index","meta":{},"window":{"navigationBarTitleText":"修改地址"}},{"path":"/pages/member/setting/index","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/member/setting/user_info/index","meta":{},"window":{"navigationBarTitleText":"个人信息"}},{"path":"/pages/member/setting/user_info/password","meta":{},"window":{"navigationBarTitleText":"修改密码"}},{"path":"/pages/member/integral/index","meta":{},"window":{"navigationBarTitleText":"我的积分"}},{"path":"/pages/member/invite/index","meta":{},"window":{"navigationBarTitleText":"邀请好友"}},{"path":"/pages/member/invite/list","meta":{},"window":{"navigationBarTitleText":"邀请列表"}},{"path":"/pages/member/invoice/index","meta":{},"window":{"navigationBarTitleText":"我的发票"}},{"path":"/pages/member/take_delivery/index","meta":{},"window":{"navigationBarTitleText":"提货单核销"}},{"path":"/pages/member/take_delivery/list","meta":{},"window":{"navigationBarTitleText":"提货单列表"}},{"path":"/pages/goods/index/index","meta":{},"window":{"navigationBarTitleText":"商品详情","navigationStyle":"custom"}},{"path":"/pages/goods/index/group","meta":{},"window":{"navigationBarTitleText":"促销详情","navigationStyle":"custom"}},{"path":"/pages/goods/place-order/index","meta":{},"window":{"navigationBarTitleText":"提交订单"}},{"path":"/pages/goods/place-order/invoice","meta":{},"window":{"navigationBarTitleText":"发票"}},{"path":"/pages/goods/place-order/storelist","meta":{},"window":{"navigationBarTitleText":"门店列表"}},{"path":"/pages/goods/payment/index","meta":{},"window":{"navigationBarTitleText":"支付"}},{"path":"/pages/goods/payment/auth","meta":{},"window":{"navigationBarTitleText":"等待支付"}},{"path":"/pages/goods/payment/result","meta":{},"window":{"navigationBarTitleText":"支付结果"}},{"path":"/pages/member/order/orderlist","meta":{},"window":{"navigationBarTitleText":"订单列表"}},{"path":"/pages/member/order/orderdetail","meta":{},"window":{"navigationBarTitleText":"订单详情"}},{"path":"/pages/member/order/invitation_group","meta":{},"window":{"navigationBarTitleText":"邀请拼单"}},{"path":"/pages/member/after_sale/index","meta":{},"window":{"navigationBarTitleText":"申请售后"}},{"path":"/pages/member/after_sale/list","meta":{},"window":{"navigationBarTitleText":"售后列表"}},{"path":"/pages/member/after_sale/detail","meta":{},"window":{"navigationBarTitleText":"售后详情"}},{"path":"/pages/member/order/evaluate","meta":{},"window":{"navigationBarTitleText":"订单评价"}},{"path":"/pages/member/order/express_delivery","meta":{},"window":{"navigationBarTitleText":"物流信息"}},{"path":"/pages/article/index","meta":{},"window":{"navigationBarTitleText":"文章详情"}},{"path":"/pages/article/list","meta":{},"window":{"navigationBarTitleText":"文章列表"}},{"path":"/pages/login/choose/index","meta":{},"window":{"navigationBarTitleText":"授权登录"}},{"path":"/pages/login/login/index","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/login/login/index1","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/login/forget/forget","meta":{},"window":{"navigationBarTitleText":"忘记密码"}},{"path":"/pages/share","meta":{},"window":{"navigationBarTitleText":"分享"}},{"path":"/pages/author","meta":{},"window":{"navigationBarTitleText":"获取授权中"}},{"path":"/pages/login/register/index","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/classify/pintuan_list","meta":{},"window":{"navigationBarTitleText":"拼团列表"}},{"path":"/pages/goods/index/pintuan","meta":{},"window":{"navigationBarTitleText":"拼团详情","navigationStyle":"custom"}},{"path":"/pages/form/detail/form","meta":{},"window":{"navigationBarTitleText":"万能表单"}},{"path":"/pages/member/distribution/index","meta":{},"window":{"navigationBarTitleText":"分销中心"}},{"path":"/pages/member/distribution/apply","meta":{},"window":{"navigationBarTitleText":"申请成为分销"}},{"path":"/pages/member/distribution/apply_state","meta":{},"window":{"navigationBarTitleText":"审核状态"}},{"path":"/pages/member/distribution/user","meta":{},"window":{"navigationBarTitleText":"分销中心"}},{"path":"/pages/member/distribution/agreement","meta":{},"window":{"navigationBarTitleText":"分销协议"}},{"path":"/pages/member/distribution/order","meta":{},"window":{"navigationBarTitleText":"推广订单"}},{"path":"/pages/member/distribution/popularize","meta":{},"window":{"navigationBarTitleText":"我要推广"}},{"path":"/pages/member/distribution/my_store","meta":{},"window":{"navigationBarTitleText":"我的店铺"}},{"path":"/pages/member/distribution/store_setting","meta":{},"window":{"navigationBarTitleText":"店铺设置"}},{"path":"/pages/activity/index","meta":{},"window":{"navigationBarTitleText":"转盘抽奖"}},{"path":"/pages/share/jump","meta":{},"window":{"navigationBarTitleText":"加载中..."}},{"path":"/pages/store_map/index","meta":{},"window":{"navigationBarTitleText":"门店列表"}},{"path":"/pages/member/customer_service/index","meta":{},"window":{"navigationBarTitleText":"在线咨询"}},{"path":"/pages/member/setting/subscription/index","meta":{},"window":{"navigationBarTitleText":"消息订阅"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0,global:void 0}}}});
