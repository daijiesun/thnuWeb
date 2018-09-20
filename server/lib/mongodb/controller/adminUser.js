const AdminModels = require('../models/AdminUser')
const _ = require('lodash')

class Admin {
  constructor() {
    //构造方法
  }

  //管理员注册
  async adminRegister(req, res, next) {
    //获取注册信息
    const body = req.body
    // console.log("the new admin:" + body.adminName)
    try {
      const admin = await AdminModels.find({
        adminName: body.adminName
      })
      if (!_.isEmpty(admin)) {
        res.send({
          status: 'error',
          message: '该管理员已经存在'
        })
      } else {
        await AdminModels.create(body)
        res.send({
          status: 'success',
          message: '注册成功'
        })
      }
    } catch (err) {
      //   console.log(err)
      res.send({
        status: 'error',
        message: err
      })
    }
  }

  // 管理员登录
  async adminLogin(req, res, next) {
    const body = req.body
    const admin = await AdminModels.findOne(body)
    if (!_.isEmpty(admin)) {
      await AdminModels.updateOne({
        _id: admin._id
      }, {
        $set: {
          login: true
        }
      })
      req.session.admin = admin,
        res.send({
          status: 'success',
          message: '登录成功'
        })
    } else {
      res.send({
        status: 'error',
        message: '账号或密码错误'
      })
    }
  }

  //管理员退出
 async adminLogout(req, res, next) {
    await AdminModels.updateOne({
      _id: req.session.admin._id
    }, {
      $set: {
        login: false
      }
    })
    req.session.admin = null
    res.send({
      status: 'success',
      message: '退出成功'
    })
  }
}

module.exports = new Admin()
