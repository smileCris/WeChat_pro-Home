var app = getApp()
console.log(app.globalData)
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500
  },
  onLoad: function (options) {
    wx.request({
      url: 'https://easy-mock.com/mock/5acb57f9942d29514de2a2e5/demo/index',
      success: function (res) {
        this.setData({
          imgUrls: res.data.data.imgUrls,
          List: res.data.data.List
        })
      }.bind(this)
    })
  },
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'E滁州家居',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})  
