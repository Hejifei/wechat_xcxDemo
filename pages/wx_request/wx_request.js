// pages/wx_request/wx_request.js
var util = require('../../utils/util.js')
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
    wx.getStorage({
      key: 'sid',
      success: function (res) {
        console.log(res.data)
      },fail:function(){
        wx.request({
          url: util.APIURL + '/api/session/create', //仅为示例，并非真实的接口地址
          method: 'POST',
          responseType: 'text',
          data: {
            client: 'webpc',
            version: '20180305',
            appType: '1'
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            console.log(res.data);
            wx.setStorage({
              key: "sid",
              data: res.data.data.sid
            })
          }
        })
      }
    })
    
  },
  onReady: function () {
  
  },
  fileupload:function(){
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: util.APIURL + '/api/avatar/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          data: {
            type: 'img',
            sid: 'e679qb68a7q11eoclin60qq6r6'
          },
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            //do something
            console.log(data)
          }
        })
      }
    })
  }
})