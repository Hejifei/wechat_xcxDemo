// pages/Storage/Storage.js
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
    // 存储在本地缓存
    wx.setStorage({
      key: "key",
      data: "value"
    });
    wx.setStorageSync('key', 'value')

    // 获取storage
    wx.getStorage({
      key: 'key',
      success: function (res) {
        console.log(res.data)
      }
    });
    var value = wx.getStorageSync('key');

    // 异步获取当前storage的相关信息
    wx.getStorageInfo({
      success: function (res) {
        console.log(res.keys)
        console.log(res.currentSize)
        console.log(res.limitSize)
      }
    });
    // 同步获取当前storage的相关信息
    var res = wx.getStorageInfoSync()

    // 从本地缓存中异步移除指定 key 。
    wx.removeStorage({
      key: 'key',
      success: function (res) {
        console.log(res.data)
      }
    });
    wx.removeStorageSync('key');

    // 清理本地数据缓存。
    wx.clearStorage()

    // 同步清理本地数据缓存
    wx.clearStorageSync()

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