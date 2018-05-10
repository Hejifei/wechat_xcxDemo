// pages/viewapi/viewapi.js
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
  toastshow:function(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  loadshow:function(){
    wx.showLoading({
      title: 'loading',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  modalshow:function(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  actionsheetshow:function(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  NavigationBarTitle:function(){
    wx.setNavigationBarTitle({
      title: '当前页面'
    })
  },
  showNavigationBarloading:function(){
    wx.showNavigationBarLoading()
  },
  hideNavigationBarloading: function () {
    wx.hideNavigationBarLoading()
  }
})