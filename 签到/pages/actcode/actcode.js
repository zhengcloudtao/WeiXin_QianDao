
Page({
 data: {
  },
  onLoad: function (options) {
    let that = this
    var aid = options.aid;
    wx.setStorageSync('aid', aid)
    var wid = wx.getStorageSync('wid');
    wx.request({
      url: 'https://ancientcloud.club/wx/token',

      data: {

      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {

      }
    }),
      wx.request({
        url: 'https://ancientcloud.club/wx/acode',
        method: 'GET',
        data: {
          aid: aid,
          wid: wx.getStorageSync('wid'),
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          console.log(res.data)


        }
      })

  },
  display: function (event) {
    let that = this
    var aid = wx.getStorageSync('aid');
    setTimeout(function () {
    wx.getImageInfo({
      src: 'https://ancientcloud.club/Uploads/act/' + aid + '.png',
      success(res) {
        that.setData({
          src: res.path,
        })
      }
    })
    }, 1000) //延迟时间 


  }


})