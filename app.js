App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.request({
            url: 'https://easy-mock.com/mock/5acb57f9942d29514de2a2e5/demo/list',
            data: {
              code: res.code,
            }
          }, console.log('登录' + res.code))
        } else {
          console.log('登录失败' + res.errMsg)
        }
      }
    });
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              // 用户已经同意小程序使用定位功能，后续调用 wx.chooseLocation 接口不会弹窗询问
              wx.chooseLocation()
            }
          })
        }
      }
    });
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
      }
    });
    wx.checkSession({
      success: function () {
        console.log('session_key 未过期')//session_key 未过期，并且在本生命周期一直有效
      },
      fail: function () {
        console.log('session_key 已经失效')// session_key 已经失效，需要重新执行登录流程
        wx.login() //重新登录
  }
})
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  }
})
