// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

const db = cloud.database()
const COLLECTION = 'record'

const wxContext = cloud.getWXContext()
const oppenid = wxContext.OPENID

// 云函数入口函数
exports.main = async (data, context) => {
  console.log('context', context)
  const { action, payload } = data
  switch (action) {
    case 'add': {
      return add(payload)
    }
    case 'get': {
      return get(payload)
    }
    case 'put': {
      return put(payload)
    }
    case 'remove': {
      return remove(payload)
    }
    default: {
      return
    }
  }
}

function add(payload) {
  return db.collection(COLLECTION).add({
    data: payload,
    success: function (res) {
      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
      console.log('res', res)
    }
  })
}

function get(payload) {
  return db.collection(COLLECTION)
    .where({
      userId: payload.userId
    })
    // .field({
    //   recordDate: true,
    //   waterReading: true,
    //   electricityReading: true
    // })
    .orderBy('recordDate', 'desc')
    // .skip(1)
    // .limit(10)
    .get()
}

function put() {

}

function remove() {

}