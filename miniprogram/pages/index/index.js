import moment from 'moment'
const appInstance = getApp()
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
    rentPrice: 900,
    managementPrice: 50,
    waterPrice: 7,
    electricityPrice: 1.3,

    btnLoading: false,
    btnDisabled: false
  },

  handleFloorChange: function (e) {
    const {
      value: index
    } = e.detail
    let rentPrice = 1000
    switch(parseInt(index, 10)){
      case 0: rentPrice = 900;break;
      case 1: rentPrice = 1000;break;
      case 2: rentPrice = 1000;break;
      case 3: rentPrice = 1000;break;
      case 4: rentPrice = 950;break;
    }
    this.setData({
      floorIndex: index,
      floorName: this.data.floorList[index],
      rentPrice
    })
  },

  handleDateChange: function (e) {
    const {
      value
    } = e.detail
    console.log('handleDateChange', value)
    this.setData({
      recordDate: value
    })
  },

  handleWaterReadingInput: function (e) {
    const {
      value
    } = e.detail
    this.setData({
      waterReading: parseInt(value, 10)
    })
  },

  handleElectricityReadingInput: function (e) {
    const {
      value
    } = e.detail
    this.setData({
      electricityReading: parseInt(value, 10)
    })
  },

  handleRentPriceChange: function (e) {
    const {
      value
    } = e.detail
    this.setData({
      rentPrice: parseInt(value, 10)
    })
  },

  handleManagementPriceChange: function (e) {
    const {
      value
    } = e.detail
    this.setData({
      managementPrice: parseInt(value, 10)
    })
  },

  handleSubmit: function () {
    const {
      floorName,
      recordDate,
      waterReading,
      electricityReading,
      rentPrice,
      managementPrice,
      waterPrice,
      electricityPrice
    } = this.data
    if (!waterReading) {
      wx.showToast({
        title: '请输入水表读数',
        icon: 'none'
      })
      return
    } else if (!electricityReading) {
      wx.showToast({
        title: '请输入电表读数',
        icon: 'none'
      })
      return
    }
    this.setData({
      btnLoading: true
    })
    const payload = {
      userId: appInstance.globalData.userId,
      floorName,
      recordDate,
      waterReading,
      electricityReading,
      rentPrice,
      managementPrice,
      waterPrice,
      electricityPrice
    }
    console.log('提交的数据', payload)
    wx.cloud.callFunction({
      name: 'recordApi',
      data: {
        action: 'add',
        payload
      },
      success() {
        wx.showToast({
          title: '提交成功！',
          mask: true
        })
      },
      complete: () => {
        this.setData({
          btnLoading: false,
          waterReading: '',
          electricityReading: ''
        })
      }
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