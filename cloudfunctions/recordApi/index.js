// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

function add(data) {
  const { date } = data
  return db.collection('records').add({
    data: {
      // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
      date,
      // 为待办事项添加一个地理位置（113°E，23°N）
      // location: new db.Geo.Point(113, 23),
      // done: false
    }
  })
}

function get() {

}

function put() {

}

function remove() {

}

// 云函数入口函数
exports.main = async (data, context) => {
  console.log('云函数入口函数data=', data)
  const { action } = data
  switch (action) {
    case 'add': {
      return add(data)
    }
    case 'get': {
      return get(data)
    }
    case 'put': {
      return put(data)
    }
    case 'remove': {
      return remove(data)
    }
    default: {
      return
    }
  }
}