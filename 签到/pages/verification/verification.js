Page({
  data: {
    show: "",
    code:"",
    wid:"",
    aid:"",
  },

  onLoad: function () {
    console.log('onLoad')
  },
  click: function () {
    var that = this;
    var show;
    wx.scanCode({
      //onlyFromCamera: true,// 允许从相机扫码
      success: (res) => {
        this.show = "结果:" + res.result + "二维码类型:" + res.scanType + "字符集:" + res.charSet + "路径:" + res.path;
        console.log(res)
        console.log(res.path.substring(33, 37))
        console.log(res.path.substring(29, 33))
        that.setData({
          show: this.show,
          src: res.path
        })
        var code = res.path.substring(33, 37)
        wx.setStorageSync('code', code)
        var aid = res.path.substring(29, 33)
        wx.setStorageSync('aid', aid)
       
        wx.request({
          url: 'https://ancientcloud.club/wx/dcode',

          data: {
            code: wx.getStorageSync('code'),
            wid: wx.getStorageSync('wid'),
            aid: wx.getStorageSync('aid'),
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
        },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => {
      }
    })
  }
})