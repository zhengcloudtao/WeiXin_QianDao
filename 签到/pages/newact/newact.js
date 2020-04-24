Page({
  data: {
    location: '地点',
    latitude: "28.588",
    longitude: "118.950",
    error: "",
  },
  onShow: function () {
    //初始获取定位权限
    wx.authorize({
      scope: 'scope.userLocation',
      success: (res) => {

      },
    })
  },

  //获取位置
  getLocation(e) {
    var that = this
    wx.getSetting({
      success(res) {
        //这里判断是否有地位权限
        if (!res.authSetting['scope.userLocation']) {
          wx.showModal({
            title: '提示',
            content: '请求获取位置权限',
            success: function (res) {
              if (res.confirm == false) {
                return false;
              }
              wx.openSetting({
                success(res) {
                  //如果再次拒绝则返回页面并提示
                  if (!res.authSetting['scope.userLocation']) {
                    wx.showToast({
                      title: '此功能需获取位置信息，请重新设置',
                      duration: 3000,
                      icon: 'none'
                    })
                  } else {
                    //允许授权，调用地图
                    that.chooseMap()
                  }
                }
              })
            }
          })
        } else {
          //如果有定位权限，调用地图

        }

      }

    })
    wx.chooseLocation({
      success: function (res) {
        console.log(res.address)
        console.log(res.latitude)
        console.log(res.longitude)
        console.log(res.name)
        var location = res.address
        var latitude = res.latitude
        var longitude = res.longitude
        that.setData({
          location: location,
          latitude: latitude,
          longitude: longitude


        })
      }
    })
  },
  newact: function (e) {
    var that = this;

    var act = e.detail.value.act;
    var aname = e.detail.value.aname;
    var tel = e.detail.value.tel;
    var content = e.detail.value.content;
    //let location = app.getLocation.location;
    //let latitude = app.getLocation.latitude;
    //let longitude = app.getLocation.longitude;
    var wid = wx.getStorageSync('wid')
    console.log(wid)
    if (act.length > 0 && act.length > 0 && tel.length > 0 && content.length > 0) {

      wx.request({
        url: 'https://ancientcloud.club/wx/nact',
        method: 'GET',
        data: {
          act: act,
          aname: aname,
          tel: tel,
          content: content,
          latitude: that.data.latitude,
          longitude: that.data.longitude,
          location: that.data.location,
          wid: wx.getStorageSync('wid'),
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          console.log(res.data)
          that.setData({

            actid: res.data.actid,
          })
          wx.showModal({
            title: '提示',
            content: res.data.actid,
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