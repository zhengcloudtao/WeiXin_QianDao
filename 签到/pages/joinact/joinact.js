Page({

  
  data: {
    wid: "",
    items: [],
    aid: "aid",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
   
  },
  viewItem: function (event) {
    console.log(event)
    var aid = event.currentTarget.dataset.aid
    wx.navigateTo({
      url: '../joinsetact/joinsetact?aid=' + aid
    })

  },

 
  onShow: function (options) {
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
  }
})