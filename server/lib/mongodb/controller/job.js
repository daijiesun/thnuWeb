const JobModuls = require('../models/Job')
const date = new Date()

class Job {
  constructor() {

  }

  //添加兼职
  async addJob(req, res, next) {
    const body = req.body
    try {
      await JobModuls.create(body)
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
  //获取兼职列表
  async getJobList(req, res, next) {
    try {
      const jobList = await JobModuls.find()
      res.send({
        status: 'success',
        message: jobList
      })
    } catch (error) {
      console.log(error)
      res.send({
        status: 'error',
        message: '获取数据失败，请稍后再试'
      })
    }
  }
  //根据id移除兼职
  async delOneJob(req, res, next) {
    const id = req.query.id
    try {
      const fun = await JobModuls.findByIdAndRemove({
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

module.exports = new Job()
