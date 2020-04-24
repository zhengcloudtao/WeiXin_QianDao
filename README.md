# weixin_qiandao
微信
https://blog.csdn.net/weixin_41096569/article/details/104377486


@[TOC](目录)
## 一、功能描述
1.简单登录
2.新建签到
3.管理签到
4.地点签到                   
5.扫码核销签到
6.扫码参加活动
7.下载签到名单.xlsx

## 二、需要

1.微信开发者工具


## 三、页面结构

**组织者:**
新建签到
核销二维码凭证
管理签到
**参加者:**
报名签到活动
二维码凭证
我报名过的活动
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200424084817178.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTA5NjU2OQ==,size_16,color_FFFFFF,t_70#pic_center)

## 四、需要的
### 1.微信小程序组件
#### (1)基础内容
[text](https://developers.weixin.qq.com/miniprogram/dev/component/text.html)

#### (2)表单组件
[button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
[form](https://developers.weixin.qq.com/miniprogram/dev/component/form.html)
[input](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)


### 2.微信小程序API
#### (1)路由
[wx.navigateTo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html)
[wx.redirectTo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.redirectTo.html)
[wx.navigateBack(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html)

#### (2)开放接口->用户信息
[wx.getUserInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html)
#### (3)数据缓存
[wx.setStorage(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html)
[wx.setStorageSync(string key, any data)](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html)
#### (4)媒体->图片
[wx.getImageInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html)
#### (5)位置
[wx.chooseLocation(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html)
[wx.getLocation(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html)
#### (6)网络->下载
[wx.downloadFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html)
#### (7)文件
[wx.openDocument(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.openDocument.html)
#### (8)基础->定时器
[setTimeout(function callback, number delay, any rest)](https://developers.weixin.qq.com/miniprogram/dev/api/base/timer/setTimeout.html)
#### (9)设备->扫码
[wx.scanCode(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html)
#### (10)界面->交互
[wx.showToast(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html)
#### (11)开放接口->授权
[wx.authorize(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html)
#### (12)开放接口->设置
[wx.getSetting(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html)
[wx.openSetting(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html)
#### (13)网络->发起请求
[wx.request(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)

## 五、实例下载

微信小程序：
## 六、跳转
[微信小程序-实例-签到功能-01-签到页面跳转](https://blog.csdn.net/weixin_41096569/article/details/105718363)

[微信小程序-实例-签到功能-02-简单登录](https://blog.csdn.net/weixin_41096569/article/details/105718676)

[微信小程序-实例-签到功能-03-签到主界面](https://blog.csdn.net/weixin_41096569/article/details/105719166)

[微信小程序-实例-签到功能-04-新建签到](https://blog.csdn.net/weixin_41096569/article/details/105719577)

[微信小程序-实例-签到功能-05-管理签到-主界面](https://blog.csdn.net/weixin_41096569/article/details/105719984)

[微信小程序-实例-签到功能-06-管理活动-设置活动](https://blog.csdn.net/weixin_41096569/article/details/105720221)

[微信小程序-实例-签到功能-07-管理活动-活动二维码](https://blog.csdn.net/weixin_41096569/article/details/105722600)

[微信小程序-实例-签到功能-08-报名签到活动-主界面](https://blog.csdn.net/weixin_41096569/article/details/105722627)

[微信小程序-实例-签到功能-09-报名签到活动-报名](https://blog.csdn.net/weixin_41096569/article/details/105722650)

[微信小程序-实例-签到功能-10-我报名过的活动-主界面](https://blog.csdn.net/weixin_41096569/article/details/105722672)

[微信小程序-实例-签到功能-11-我报名过的活动-查看详情](https://blog.csdn.net/weixin_41096569/article/details/105722711)

[微信小程序-实例-签到功能-12-二维码凭证-主界面](https://blog.csdn.net/weixin_41096569/article/details/105722795)

[微信小程序-实例-签到功能-13-二维码凭证-二维码](https://blog.csdn.net/weixin_41096569/article/details/105722856)

[微信小程序-实例-签到功能-14-核销二维码凭证](https://blog.csdn.net/weixin_41096569/article/details/105722912)

