Page({

  data: {
    wid: '',
  },


  onLoad: function (options) {
    var aid = options.aid
  },

  sign: function (e) {
    var that = this;
    var name = e.detail.value.name;
    var content = e.detail.value.content;
    var aid = e.detail.value.aid;
    var wid = e.detail.value.wid;
    if (name.length > 0 && content.length > 0) {
      wx.request({
        url: 'https://ancientcloud.club/wx/csact',

        data: {
          name: name,
          content: content,
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
          wx.showModal({
            title: '提示',
            content: res.data.errors,
          })

        }
      })

    } else {
      this.setData({
        error: "请填完整"
      })
    }
  }

})