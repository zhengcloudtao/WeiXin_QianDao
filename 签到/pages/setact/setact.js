Page({
  data: {
    aid: '',
    xs: '',
  },

 
  onLoad: function (options) {
    this.setData({
      aid: options.aid,
      wid: wx.getStorageSync('wid'),

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
      url: 'https://ancientcloud.club/wx/sdact',

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
  excel: function (e) {
    this.setData({
      xs: '123456789'
    })
    var that = this;

    var wid = wx.getStorageSync('wid')
    var aid = wx.getStorageSync('aid')

    wx.downloadFile({
      url: 'https://ancientcloud.club/wx/excel/' + aid + wid, //仅为示例，并非真实的资源
      success(res) {
        console.log(res)
        wx.showModal({
          title: '提示',
          content: '(暂时只支持安卓系统点击下载)ios自行通过下载地址下载',
        })
        const filePath = res.tempFilePath
        wx.openDocument({
          fileType: "xlsx",
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')

          }
        })

        if (res.statusCode === 200) {
          wx.playVoice({
            filePath: res.tempFilePath
          })
        }
      }
    })


  }

})