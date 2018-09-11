const mongoose = require('mongoose')
const Schema = mongoose.Schema
const date = function(){
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var time = year + '/' + month + '/' + day + ' ' + hours + ':' + minutes
  return time
}

const userSchema = new Schema({
  //用户名
  userName: {
    type: String,
    required: true
  },
  //密码
  password: {
    type: String,
    required: true
  },
  //创建的日期
  userDate: {
    type: String,
    default: date()
  },
  //是否登录
  login: {
    type: Boolean,
    default: false
  },
  //电话
  tel: String,
  //邮箱
  email: String,
  //头像
  avatr:{
    type: String,
    default: '/public/imges/avater.jpg'
  },
  notes:{
      type: String,
      default: '这个人很懒，啥也没留下'
  }
})

//导出Schema
//mongoose自动在当前连接的数据库中创建一个user集合（表）
module.exports = mongoose.model('user', userSchema)
