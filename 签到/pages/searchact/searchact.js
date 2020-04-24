Page({


  data: {
    items: [],
    aid: '',
  },
  searchact: function (e) {
    var that = this;
    var aid = e.detail.value.aid;
    wx.setStorageSync('aid', aid)
    wx.request({
      url: 'https://ancientcloud.club/wx/cact',

      data: {
        aid: aid,
        wid: wx.getStorageSync('wid'),
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          list: res.data,
        })
      }
    })
  },
  sign: function (event) {
    console.log(event)
    var aid = event.currentTarget.dataset.aid
    wx.navigateTo({
      url: '../sign/sign?aid=' + aid
    })

  },
  sweep: function () {
    var that = this;
    var show;
    wx.scanCode({
      //onlyFromCamera: true,// 允许从相机扫码
      success: (res) => {
        this.show = "结果:" + res.result + "二维码类型:" + res.scanType + "字符集:" + res.charSet + "路径:" + res.path;
        console.log(res)
        that.setData({
          show: this.show,
          src: res.path,

        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => {}
    })
  }
})