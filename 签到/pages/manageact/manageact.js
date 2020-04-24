Page({
  data: {
    wid: "",
    items: [],
    aid: "aid",
  },


  set: function (event) {
    console.log(event)
    var aid = event.currentTarget.dataset.aid
    wx.navigateTo({
      url: '../setact/setact?aid=' + aid
    })

  },
  code: function (event) {
    console.log(event)
    var aid = event.currentTarget.dataset.aid
    wx.navigateTo({
      url: '../actcode/actcode?aid=' + aid
    })

  },

  onShow: function (options) {
    var that = this

    wx.request({
      url: 'https://ancientcloud.club/wx/sact',

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


  }
})