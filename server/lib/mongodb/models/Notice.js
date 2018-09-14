//公告
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const time = require('../../../utils/time')
const noticeSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: time()
  }
})
module.exports = mongoose.model('notice', noticeSchema)
