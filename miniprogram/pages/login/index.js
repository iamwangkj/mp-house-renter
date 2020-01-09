// miniprogram/pages/login/index.js
const appInstance = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '13662662795',
    password: '11',
    btnLoading: false
  },

  handleUsernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },

  handlePasswordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  handleLogin: function () {
    console.log('handleLogin', this.data)
    this.setData({
      btnLoading: true
    })
    const {
      username,
      password
    } = this.data
    wx.cloud.callFunction({
      name: 'login',
      data: {
        username,
        password
      }
    }).then(({ result }) => {
      const { code } = result
      if (code === 200) {
        appInstance.globalData.userId = username
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
      else {
        wx.showToast({
          title: '账号或密码错误，请重试',
          icon: 'none'
        })
      }
    }).finally(() => {
      this.setData({
        btnLoading: false
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