Page({
  data: {},
  login: function () {
    // value为获取的本地缓存
    var value = wx.getStorageSync('wid')
    if (!value) {
      var that = this
      wx.navigateTo({
        url: '/pages/login/login',       //跳转去登录界面
      })
    } else {
      wx.navigateTo({
        url: '/pages/index/index',
      })
    }
  }
})