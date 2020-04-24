
Page({
  data: {
    wid: "",
    items: [],
    aid: "aid",
  },
  onLoad: function () {
    var that = this

    wx.request({
      url: 'https://ancientcloud.club/wx/jact',

      data: {
        wid: wx.getStorageSync('wid'),
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          list: res.data,
        })
      }
    })

  },
  display: function (event) {
    console.log(event)
    var aid = event.currentTarget.dataset.aid
    wx.navigateTo({
      url: '../code/code?aid=' + aid
    })

  }

  
})