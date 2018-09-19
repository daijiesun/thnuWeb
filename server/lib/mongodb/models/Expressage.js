//校园快递发布
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const time = require('../../../utils/time')

const expSchema = new Schema({
  //发布人用户名
  userName: {
    type: String,
    required: true
  },
  //真实姓名
  name: {
    type: String,
    required: true
  },
  //快递单号
  order: {
    type: String,
    required: true
  },
  //发布时间
  date: {
    type: String,
    default: time()
  },
  //联系方式
  tel: {
    type: String,
    required: true
  },
  //报酬
  money: {
    type: String,
    required: true
  },
  //快递类型
  type: {
    type: String,
    required: true
  },
  //取件地址
  getLocation: {
    type: String,
    required: true
  },
  //收件地址
  putLocation: {
    type: String,
    required: true
  },
  //要求送达的时间
  time: {
    type: String,
    required: false,
    default: '任何时候'
  }
})
module.exports = mongoose.model('exp', expSchema)
