// pages/system/system.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    SystemInfo:'',
    networkType:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    // 获取系统信息。
    wx.getSystemInfo({
      success: function (res) {
        self.setData({
          SystemInfo: JSON.stringify(res)
        })
      }
    })

    // 获取系统信息同步接口
    // var res = wx.getSystemInfoSync()


    // 获取网络类型。
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        var networkType = res.networkType
        self.setData({
          networkType: JSON.stringify(networkType)
        })
      }
    });

    // 监听网络状态变化。
    wx.onNetworkStatusChange(function (res) {
      console.log(res.isConnected)
      console.log(res.networkType)
    })

    

    // 获取屏幕亮度。
    wx.getScreenBrightness({
      success:function(res){

      }
    });

  },

  vibratelong:function(e){
    wx.vibrateLong({
      success: function (res) {

      }
    });
  },
  vibrateshort:function(e){
    wx.vibrateShort({
      success: function (res) {

      }
    });
  },
  phonecall:function(e){
    wx.makePhoneCall({
      phoneNumber: '10000' //仅为示例，并非真实的电话号码
    })
  },
  scancode:function(e){
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })

    // 只允许从相机扫码
    // wx.scanCode({
    //   onlyFromCamera: true,
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
  },
  setclipboarddata:function(e){
    wx.setClipboardData({
      data: 'data',
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  getclipboarddata: function (e) {
    wx.getClipboardData({
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  setscreenbrightness:function(e){
    // 设置屏幕亮度
    // 屏幕亮度值，范围 0~1，0 最暗，1 最亮
    wx.setScreenBrightness(1)
  },
  setscreenon:function(e){
    // 保持屏幕常亮
    wx.setKeepScreenOn({
      keepScreenOn: true
    })
  },
  usercapturescreen:function(e){
    wx.onUserCaptureScreen(function (res) {
      console.log('用户截屏了')
    })
  },
  startwifi:function(e){
    wx.startWifi({
      success: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  stopwifi:function(e){
    wx.stopWifi({
      success: function (res) {
        console.log(res.errMsg)
      }
    })
  }
})