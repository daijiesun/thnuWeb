const mongoose = require('mongoose')
const Schema = mongoose.Schema
const time = require('../../../utils/time')

const userSchema = new Schema({
  //用户名
  userName: {
    type: String,
    required: true
  },
  //真实姓名
  name: {
    type: String
  },
  //密码
  password: {
    type: String,
    required: true
  },
  //创建的日期
  userDate: {
    type: String,
    default: time()
  },
  //是否登录
  login: {
    type: Boolean,
    default: false
  },
  //收信箱
  message:{
    type:Object,
    required: false
  },
  //电话
  tel: String,
  //邮箱
  email: String,
  //头像
  avatar: {
    type: String,
    default: '/public/upload/images/avater.jpg'
  }, 
  //备注
  notes: {
    type: String,
    default: '这个人很懒，啥也没留下'
  }
})

//导出Schema
//mongoose自动在当前连接的数据库中创建一个user集合（表）
module.exports = mongoose.model('user', userSchema)
