//校园活动
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const time = require('../../../utils/time')

const sportSchema = new Schema({
  //发布人
  userName: {
    type: String,
    required: true
  },
  //活动标题
  title:{
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
})
module.exports = mongoose.model('sport', sportSchema)
