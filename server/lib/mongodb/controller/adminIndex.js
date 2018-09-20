//获取图标信息
const FunModuls = require('../models/Fun')
const GoodsModuls = require('../models/Goods')
const JobModuls = require('../models/Job')
const LoseModuls = require('../models/lose')
const LoveModuls = require('../models/Love')
const SportModuls = require('../models/Sport')
const ExpModuls = require('../models/Expressage')

class Index {
  constructor() {

  }
  async getIndexInfo(req, res, next) {
    const indexObj = {}

    const funList = await FunModuls.find()
    const goodsList = await GoodsModuls.find()
    const jobList = await JobModuls.find()
    const loseList = await LoseModuls.find()
    const loveList = await LoveModuls.find()
    const sportList = await SportModuls.find()
    const expList = await ExpModuls.find()
    indexObj.name = ['校园趣事', '二手商品', '寻物启事', '表白墙', '兼职', '活动', '快递'];
    indexObj.data = [funList.length, goodsList.length, loseList.length, loveList.length, jobList.length, sportList.length, expList.length]
    // indexObj.data = [1,2,3,4,5,6,7]
    res.send({
      status: 'success',
      message: indexObj
    })

  }
}

module.exports = new Index()
