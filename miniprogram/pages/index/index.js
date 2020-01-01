import moment from 'moment'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    floorList: ['1楼', '2楼', '3楼', '4楼', '5楼'],
    floorIndex: 0,
    floorName: '1楼',
    recordDate: moment().format('YYYY-MM-DD'),
    waterReading: '',
    electricityReading: '',
    rentPrice: 800,
    managementPrice: 50,
    waterPrice: 7,
    electricityPrice: 1.5,

    btnLoading: false,
    btnDisabled: false
  },

  handleFloorChange: function (e) {
    const { value: index } = e.detail
    this.setData({
      floorIndex: index,
      floorName: this.data.floorList[index],
      rentPrice: index === 0 ? 800 : 850
    })
  },

  handleDateChange: function (e) {
    const { value } = e.detail
    console.log('handleDateChange', value)
    this.setData({
      recordDate: value
    })
  },

  handleWaterReadingInput: function (e) {
    const { value } = e.detail
    this.setData({
      waterReading: parseInt(value, 10)
    })
  },

  handleElectricityReadingInput: function (e) {
    const { value } = e.detail
    this.setData({
      electricityReading: parseInt(value, 10)
    })
  },

  handleRentPriceChange: function (e) {
    const { value } = e.detail
    this.setData({
      rentPrice: parseInt(value, 10)
    })
  },

  handleManagementPriceChange: function (e) {
    const { value } = e.detail
    this.setData({
      managementPrice: parseInt(value, 10)
    })
  },

  handleSubmit: function () {
    console.log('handleSubmit', this.data)
    this.setData({
      btnLoading: true
    })
    const { floorName, recordDate, waterReading, electricityReading, rentPrice,
      managementPrice, waterPrice, electricityPrice } = this.data

    wx.cloud.callFunction({
      name: 'recordApi',
      data: {
        action: 'add',
        payload: {
          floorName,
          recordDate,
          waterReading,
          electricityReading,
          rentPrice,
          managementPrice,
          waterPrice,
          electricityPrice
        }
      }
    }).then((res) => {
      wx.showToast({
        title: '提交成功！',
        mask: true
      })
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