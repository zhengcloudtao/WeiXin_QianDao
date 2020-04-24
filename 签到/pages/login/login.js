Page({
  data: {
    isClick: false //未点击
  },

  login: function (e) {
    let that = this
    that.setData({
      isClick: true //已点击
    })
    wx.getUserInfo({
      lang: "zh_CN",
      success: response => {
        wx.login({
          success: res => {
            let data = {
              code: res.code,
              nickname: response.userInfo.nickName,
              avatar: response.userInfo.avatarUrl,
              country: response.userInfo.country ? response.userInfo.country : '',
              province: response.userInfo.province ? response.userInfo.province : '',
              city: response.userInfo.city ? response.userInfo.city : '',
              gender: response.userInfo.gender ? response.userInfo.gender : '',
              language: response.userInfo.language ? response.userInfo.language : '',
            }
            wx.request({
              url: 'https://ancientcloud.club/wx/login',
              method: 'GET',
              data: data,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              success: function (res) {
                console.log(res)
      
                wx.redirectTo({
                  url: '/pages/index/index',
                })

                that.setData({
                  nickname: res.data.nickname,
                  avatar: res.data.avatar,
                  wid: res.data.wid,
                })
                var wid = res.data.wid
                wx.setStorageSync('wid', wid)
                console.log(wid)
              },
              fail: function (e) {
                wx.showToast({
                  title: '服务器错误',
                  duration: 2000
                });
                that.setData({
                  isClick: false
                })
              },
            });
          }
        })
      },
      fail: function (e) {
        that.setData({
          isClick: false
        })
      },
    })

  }
})