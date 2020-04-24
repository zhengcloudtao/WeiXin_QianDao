Page({
  data: {
    aid: '',
    wid:"",
  },
  onLoad: function (options) {
    this.setData({
      aid: options.aid

    })
    var aid = options.aid
    wx.setStorageSync('aid', aid)
    console.log(aid)
  },
  deleteact: function (e) {
    var that = this;
    var wid = wx.getStorageSync('wid')
    var aid = wx.getStorageSync('aid')
    wx.request({
      url: 'https://ancientcloud.club/wx/jdact',

      data: {
        aid: wx.getStorageSync('aid'),
        wid: wx.getStorageSync('wid'),
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          errors: res.data,
        })
        wx.navigateBack({
          delta: 1  // 返回上一级页面。
        })
      }
    })
    
  },
  sign: function (e) {
    var that = this;
    var wid = wx.getStorageSync('wid')
    var aid = wx.getStorageSync('aid')
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        console.log(res)
        that.setData({
          latitude: res.latitude,
          longitude:res.longitude    
        })
        var latitude = res.latitude
        wx.setStorageSync('latitude', latitude)
        var longitude = res.longitude
        wx.setStorageSync('longitude', longitude)
        }
    }),
      setTimeout(function () {
      wx.request({
        url: 'https://ancientcloud.club/wx/ddqd',

        data: {
          wid: wx.getStorageSync('wid'),
          aid: wx.getStorageSync('aid'),
          latitude: wx.getStorageSync('latitude'),
          longitude: wx.getStorageSync('longitude'),
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            errors: res.data,
          })
          wx.showModal({
            title: '提示',
            content: res.data.errors,
          })
        }
        })
      }, 1300) //延迟时间 
     }
})