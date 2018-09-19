//二手商品
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const time = require('../../../utils/time')

const goodsSchema = new Schema({
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
  //商品描述
  content: {
    type: String,
    required: true
  },
  //图片
  photo: {
    type: Array,
    default: []
  },
  //联系方式
  tel: {
    type: String,
    required: true
  }

})
module.exports = mongoose.model('goods', goodsSchema)
