// miniprogram/pages/me/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '138xxxxxxxx',
    name: 'XXX',
    birthday: '2019-12-24'
  },

  handlePhoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  handleNameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  handleBirthdayChange: function (e) {
    this.setData({
      birthday: e.detail.value
    })
  },

  handleModify: function () {

  },

  logout: function () {
    wx.reLaunch({
      url: '/pages/login/index'
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