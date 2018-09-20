const ExpModuls = require('../models/Expressage')
const date = new Date()

class Exp {
  constructor() {

  }

  //添加快递
  async addExp(req, res, next) {
    //文本数据
    try {
      const body = req.body
      console.log(body)
      await ExpModuls.create(body)
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
  //获取快递列表
  async getExpList(req, res, next) {
    try {
      const expList = await ExpModuls.find()
      res.send({
        status: 'success',
        message: expList
      })
    } catch (error) {
      console.log(error)
      res.send({
        status: 'error',
        message: '获取数据失败，请稍后再试'
      })
    }
  }
  //根据id移除快递
  async delOneExp(req, res, next) {
    const id = req.query.id
    try {
      const exp = await ExpModuls.findOneAndDelete({
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

module.exports = new Exp()
