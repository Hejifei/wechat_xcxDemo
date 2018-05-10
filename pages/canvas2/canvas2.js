// pages/canvas2/canvas2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0,
    hidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const ctx = wx.createCanvasContext('myCanvas')
    ctx.setFillStyle('red')
    ctx.fillRect(10, 10, 150, 75)
    ctx.draw()

    const ctx3 = wx.createCanvasContext('myCanvas3')
    // Create linear gradient
    const grd3 = ctx3.createLinearGradient(0, 0, 200, 0)
    grd3.addColorStop(0, 'red')
    grd3.addColorStop(1, 'white')
    // Fill with gradient
    ctx3.setFillStyle(grd3)
    ctx3.fillRect(10, 10, 150, 80)
    ctx3.draw()

    const ctx4 = wx.createCanvasContext('myCanvas4')
    const grd4 = ctx4.createCircularGradient(75, 50, 50)
    grd4.addColorStop(0, 'red')
    grd4.addColorStop(1, 'white')
    ctx4.setFillStyle(grd4)
    ctx4.fillRect(10, 10, 150, 80)
    ctx4.draw()


    const ctx5 = wx.createCanvasContext('myCanvas5')
    const grd5 = ctx5.createLinearGradient(30, 10, 120, 10)
    grd5.addColorStop(0, 'red')
    grd5.addColorStop(0.16, 'orange')
    grd5.addColorStop(0.33, 'yellow')
    grd5.addColorStop(0.5, 'green')
    grd5.addColorStop(0.66, 'cyan')
    grd5.addColorStop(0.83, 'blue')
    grd5.addColorStop(1, 'purple')
    ctx5.setFillStyle(grd5)
    ctx5.fillRect(10, 10, 150, 80)
    ctx5.draw()

    const ctx6 = wx.createCanvasContext('myCanvas6')
    ctx6.beginPath()
    ctx6.moveTo(10, 10)
    ctx6.lineTo(150, 10)
    ctx6.stroke()

    ctx6.beginPath()
    ctx6.setLineWidth(5)
    ctx6.moveTo(10, 30)
    ctx6.lineTo(150, 30)
    ctx6.stroke()

    ctx6.beginPath()
    ctx6.setLineWidth(10)
    ctx6.moveTo(10, 50)
    ctx6.lineTo(150, 50)
    ctx6.stroke()

    ctx6.beginPath()
    ctx6.setLineWidth(15)
    ctx6.moveTo(10, 70)
    ctx6.lineTo(150, 70)
    ctx6.stroke()

    ctx6.draw()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  start: function (e) {
    this.setData({
      hidden: false,
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  move: function (e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  end: function (e) {
    this.setData({
      hidden: true
    })
  }
})