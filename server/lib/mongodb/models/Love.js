//表白墙
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const time = require('../../../utils/time')

const loveSchema = new Schema({
  //发布人
  userName: {
    type: String,
    required: true
  },
  //发布时间
  date: {
    type: String,
    default: time()
  },
  //内容
  content: {
    type: String,
    required: true
  },
  //图片
  photo: {
    type: Array,
    default: []
  },
  //评论
  comment: {
    type: String,
    default: []
  }

})
module.exports = mongoose.model('love', loveSchema)
