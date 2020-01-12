const appInstance = getApp()
Page({
  data: {
    listData: [],
    floorList: ['1楼', '2楼', '3楼', '4楼', '5楼'],
    floorIndex: 0,
    floorRecordList: []
  },

  goToRecordDetail: function (e) {
    const { itemData, itemIndex } = e.currentTarget.dataset
    const { floorRecordList } = this.data
    const lastData = itemIndex === floorRecordList.length - 1 ? null : floorRecordList[itemIndex + 1]
    wx.navigateTo({
      url: `/pages/record-detail/index?data=${JSON.stringify(itemData)}&lastData=${JSON.stringify(lastData)}`
    })
  },

  handleFloorChange: function (e) {
    const { value: index } = e.detail
    const { listData, floorList } = this.data
    this.setData({
      floorIndex: index,
      floorRecordList: this.filterDataByFloorName(listData, floorList[index])
    })
  },

  filterDataByFloorName: function (allList, floorName) {
    return allList.filter(item => item.floorName === floorName)
  },

  getData: function () {
    wx.cloud.callFunction({
      name: 'recordApi',
      data: {
        action: 'get',
        payload: {
          userId: appInstance.globalData.userId
        }
      },
      success: ({ result }) => {
        console.log('获取全部记录数据', result)
        const { data } = result
        const { floorList, floorIndex } = this.data
        this.setData({
          listData: data,
          floorRecordList: this.filterDataByFloorName(data, floorList[floorIndex])
        })
      },
      fail: console.error
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
    this.getData()
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