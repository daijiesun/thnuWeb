//兼职
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const time = require('../../../utils/time')

const jobSchema = new Schema({
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
})
module.exports = mongoose.model('job', jobSchema)
