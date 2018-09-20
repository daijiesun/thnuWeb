const NoticeModuls = require('../models/Notice')
const _ = require('lodash')

class Notice {
  constructor() {

  }
  //添加公告
  async addNotice(req, res, next) {
    const body = req.body
    if (!body.content) {
      res.send({
        status: 'error',
        message: '添加失败,内容不能为空'
      })
    } else {
      await NoticeModuls.create(body).then(results => {
        if (!_.isEmpty(results)) {
          res.send({
            status: 'success',
            message: '添加成功'
          })
        }
      }).catch(err => {
        console.log(err)
        res.send({
          status: 'error',
          message: '系统繁忙'
        })
      })
    }
  }
  //   获取公告
  async getNoticeList(req, res, next) {
    const list = await NoticeModuls.find()
    res.send({
      status: 'success',
      message: list
    })
  }
  //移除公告
  async delNotice(req, res, next) {
    const id = req.query.id
    await NoticeModuls.findOneAndDelete({
      _id: id
    }).then(results => {
      res.send({
        status: 'success',
        message: '移除成功'
      })
    }).catch(err => {
      res.send({
        status: 'error',
        message: '系统繁忙，稍后再试'
      })
      console.log(err)
    })
  }

}
module.exports = new Notice()
