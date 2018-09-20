const LoseModuls = require('../models/lose')
const date = new Date()
const _ = require('lodash')
const fs = require('fs')
class Lose {
  constructor() {

  }

  //添加寻物
  async addLose(req, res, next) {
    //文本数据
    const body = req.body
    //文件数组
    const files = req.files
    //接收文件名的数组
    const images = []
    //对图片进行处理
    const isImage = 1;
    try {
      if (files) {
        for (var i = 0; i < files.length; i++) {
          if (!(files[i].mimetype == 'image/jpeg' || files[i].mimetype == 'image/jpg' || files[i].mimetype == 'image/png' || files[i].mimetype == 'image/gif')) {
            isImage = 0;
            break;
          }
        }
        if (!isImage) { //存在一张不符合就返回错误信息
          res.send({
            status: 'error',
            message: '图片格式错误'
          })
        } else { //格式全部正确,将文件路径保存到数组中，后面存入数据库
          files.forEach(item => {
            const fileName = 'public/upload/images_' + date.getFullYear() + '_' + (date.getMonth() + 1) + '/'
            images.push(fileName + item.filename)
          })
        }
      }
      //添加图片到传入数据库的对象中
      body.photo = images;
      await LoseModuls.create(body)
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
  //获取寻物列表
  async getLoseList(req, res, next) {
    try {
      const loseList = await LoseModuls.find()
      res.send({
        status: 'success',
        message: loseList
      })
    } catch (error) {
      console.log(error)
      res.send({
        status: 'error',
        message: '获取数据失败，请稍后再试'
      })
    }
  }
  //根据id移除寻物
  async delOneLose(req, res, next) {
    const id = req.query.id
    try {
      const lose = await LoseModuls.findByIdAndRemove({
        _id: id
      })
      if (!_.isEmpty(lose)) {
        if (lose.photo.length) {
          lose.photo.forEach(item => {
            fs.unlink(item, function (err) {
              if (err) {
                return console.log(err);
              }
              console.log("移除图片成功");
            })
          })
        }
        res.send({
          status: 'success',
          message: '移除成功'
        })
      } else {
        res.send({
          status: 'err',
          message: '数据不存在，请刷新再试'
        })
      }

    } catch (error) {
      res.send({
        status: 'error',
        message: '系统繁忙，稍后再试'
      })
      console.log(error);
    }
  }
}

module.exports = new Lose()
