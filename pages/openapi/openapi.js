// pages/openapi/openapi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  wxlogin:function(){
    wx.login({
      success: function (res) {
        console.log(res)
        // if (res.code) {
        //   //发起网络请求
        //   wx.request({
        //     url: 'https://test.com/onLogin',
        //     data: {
        //       code: res.code
        //     }
        //   })
        // } else {
        //   console.log('获取用户登录态失败！' + res.errMsg)
        // }
      }
    });
  },
  checkSession:function(){
    wx.checkSession({
      success: function () {
        //session 未过期，并且在本生命周期一直有效
        console.log('session 未过期，并且在本生命周期一直有效')
        
      },
      fail: function () {
        //登录态过期
        wx.login() //重新登录
      }
    })
  }
})