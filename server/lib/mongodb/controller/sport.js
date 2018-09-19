const SportModuls = require('../models/Sport')
const date = new Date()

class Sport {
  constructor() {

  }

  //添加活动
  async addSport(req, res, next) {
    //文本数据
    const body = req.body
    try {
      await SportModuls.create(body)
      res.send({
        status: 'success',
        message: '添加成功'
      })
    } catch (err) {
      console.log(err)
      res.send({
        status: 'error',
        message: '输入数据格式有误，请刷新后重新输入'
      })
    }
  }
  //获取活动列表
  async getSportList(req, res, next) {
    try {
      const sportList = await SportModuls.find()
      res.send({
        status: 'success',
        message: sportList
      })
    } catch (error) {
      console.log(error)
      res.send({
        status: 'error',
        message: '获取数据失败，请稍后再试'
      })
    }
  }
  //根据id移除活动
  async delOneSport(req, res, next) {
    const id = req.query.id
    try {
      const fun = await SportModuls.findByIdAndRemove({
        _id: id
      })
      res.send({
        status: 'success',
        message: '移除成功'
      })
    } catch (error) {
      res.send({
        status: 'error',
        message: '系统繁忙，稍后再试'
      })
      console.log(error);
    }
  }
}

module.exports = new Sport()
