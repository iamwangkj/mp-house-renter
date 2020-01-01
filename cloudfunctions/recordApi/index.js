// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const collection = 'records'

// 云函数入口函数
exports.main = async (data, context) => {
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
  return db.collection(collection).add({
    data: payload
  })
}

function get(payload) {
  return db.collection(collection)
    // .where({
    //   price: _.gt(10)
    // })
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