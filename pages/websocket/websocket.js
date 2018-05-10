// pages/websocket/websocket.js
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
    // 创建一个 WebSocket 连接。
    // wx.connectSocket({
    //   url: 'wss://example.qq.com',
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   protocols: ['protocol1'],
    //   method: "GET"
    // })

    // 监听WebSocket连接打开事件。
    // wx.onSocketOpen(function (res) {
    //   // console.log('WebSocket连接已打开！')
    //   // 通过 WebSocket 连接发送数据
    //   wx.sendSocketMessage({
    //     data: msg
    //   })
    // })

    // 监听WebSocket接受到服务器的消息事件。
    // wx.onSocketMessage(function (res) {
    //   console.log('收到服务器内容：' + res.data)
    // })

    // 监听WebSocket关闭。
    // wx.onSocketClose(function (res) {
    //   console.log('WebSocket 已关闭！')
    // })
    // 监听WebSocket错误。
    // wx.onSocketError(function (res) {
    //   console.log('WebSocket连接打开失败，请检查！')
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})