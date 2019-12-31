Page({
  /**
   * 页面的初始数据
   */
  data: {
    floorList: ['1楼', '2楼', '3楼', '4楼', '5楼'],
    floorIndex: 0,
    currentDate: '2019-12-31',
    btnLoading: false,
    btnDisabled: false
  },

  handleFloorChange: () => {
    console.log('handleFloorChange')
  },

  handleDateChange: () => {
    console.log('handleDateChange')
  },

  handleSubmit: function () {
    console.log('handleSubmit', this)
    this.setData({
      btnLoading: true,
      // btnDisabled: true
    })
    wx.cloud.callFunction({
      name: 'recordApi',
      data: {
        action: 'add',
        date: '20200101'
      }
    }).then((res) => {
      console.log('登记成功=', res)
    }).finally(() => {
      this.setData({
        btnLoading: false,
        // btnDisabled: false
      })
    })
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