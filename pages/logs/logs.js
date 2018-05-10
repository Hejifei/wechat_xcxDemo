//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    array: [1, 2, 3, 4, 5, 1, 2, 3, 4]
  },
  onLoad: function () {
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(function (log) {
    //     return util.formatTime(new Date(log))
    //   })
    // })
  }
})
