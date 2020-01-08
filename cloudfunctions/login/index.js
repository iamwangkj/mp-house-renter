// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”
const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV // API 调用都保持和云函数当前所在环境一致
})

const db = cloud.database()

/**
 * event 参数包含小程序端调用传入的 data
 */
exports.main = async(event, context) => {
  const {
    username,
    password
  } = event
  const dbPromise = await db.collection('user')
    .where({
      username,
      password
    })
    .get()
  const {
    data
  } = dbPromise

  const loginFlag = data.length > 0
  console.log('loginFlag', loginFlag)
  const wxContext = cloud.getWXContext()
  return {
    env: wxContext.ENV,
    openid: wxContext.OPENID,
    code: loginFlag ? 200 : 401,
    msg: loginFlag ? 'login success.' : 'login failed'
  }
}