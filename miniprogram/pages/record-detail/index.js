Page({

  /**
   * 页面的初始数据
   */
  data: {
    floorName: '未知',
    date: '未知',
    rentPrice: 0,
    managementPrice: 0,
    waterCost: 0,
    electricityCost: 0,
    waterReading: 0,
    electricityReading: 0,
    waterPrice: 7,
    electricityPrice: 1.5,
    lastWaterReading: 0,
    lastElectricityReading: 0,

    waterCost: 0,
    electricityCost: 0,
    total: 0
  },

  getDataFromUrl: function (options) {
    let { data, lastData } = options
    data = JSON.parse(data)
    lastData = JSON.parse(lastData)
    const { floorName, recordDate, rentPrice, managementPrice, waterPrice, waterReading, electricityPrice, electricityReading } = data
    const lastWaterReading = lastData ? lastData.waterReading : 0
    const lastElectricityReading = lastData ? lastData.electricityReading : 0
    const waterCost = waterPrice * (waterReading - lastWaterReading)
    const electricityCost = electricityPrice * (electricityReading - lastElectricityReading)
    const total = rentPrice + managementPrice + waterCost + electricityCost
    console.log(rentPrice, managementPrice, waterCost, electricityCost, total)
    this.setData({
      floorName,
      date: recordDate,
      rentPrice,
      managementPrice,
      waterPrice,
      electricityPrice,
      waterReading,
      electricityReading,
      lastWaterReading,
      lastElectricityReading,

      waterCost,
      electricityCost,
      total
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDataFromUrl(options)
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