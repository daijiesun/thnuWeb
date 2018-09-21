const UserModuls = require('../models/User')
const _ = require('lodash')
const validator = require('../../../utils/validators')

function checkFormData(formData) {
  let result = null
  if (formData.email && !validator.isEmail(formData.email) || !formData.email) {
    result = '输入正确格式的邮箱地址'
  }
  if (formData.tel && !validator.isMobilePhone(formData.tel)) {
    result = '输出正确的电话号码'
  }
  if (formData.password && !validator.isPassword(formData.password) || !formData.password) {
    result = '输入6-50位的密码'
  }
  if (formData.userName && !validator.isUserName(formData.userName) || !formData.userName) {
    result = '输入3-20个字符的用户名'
  }
  return result
}

class User {
  constructor() {
    //构造方法
  }

  //用户注册
  async userRegister(req, res, next) {
    const body = req.body
    //先验证
    const err = checkFormData(body)
    if (err) {
      //存在错误，直接返回
      res.send({
        status: 'error',
        message: err
      })
    } else {
      const user = await UserModuls.find({
        // $or: [{
        //   "userName": body.userName
        // }, {
        //   "email": body.email
        // }]
        userName: body.userName
      })
      const email = await UserModuls.find({
        email: body.email
      })
      if (!_.isEmpty(user)) {
        res.send({
          status: 'error',
          message: '该用户名已经存在'
        })
      } else if (!_.isEmpty(email)) {
        res.send({
          status: 'error',
          message: '该邮箱已经存在'
        })
      } else {
        await UserModuls.create(body)
        res.send({
          status: 'success',
          message: '添加成功'
        })
      }

    }
  }
  //登录
  async userLogin(req, res, next) {
    const body = req.body
    const user = await UserModuls.findOne(body)
    if (!_.isEmpty(user)) {
      await UserModuls.updateOne({
        _id: user._id
      }, {
        $set: {
          login: false
        }
      })
      req.session.user = user
      res.send({
        status: 'success',
        message: '登录成功'
      })
    } else {
      res.send({
        status: 'error',
        message: '邮箱或密码错误'
      })
    }
  }
  //退出
  async userLogout(req, res, next) {
    try {
      await UserModuls.updateOne({
        _id: req.session.user._id
      }, {
        $set: {
          login: false
        }
      })
      req.session.user = null
      res.send({
        status: 'success',
        message: '退出成功'
      })
    } catch (error) {
      console.log(error)
      res.send({
        status: 'error',
        message: '系统繁忙，稍后再试'
      })
    }
  }
  //获取用户列表
  async getUserList(req, res, next) {
    const userList = await UserModuls.find()
    res.send({
      status: 'success',
      message: userList || '当前用户为0'
    })
  }
  //删除某个用户
  async deleteUser(req, res, next) {
    const userId = req.body.userId
    const user = await UserModuls.findById({
      _id: userId
    })
    if (!_.isEmpty(user)) {
      await UserModuls.findByIdAndDelete({
        _id: userId
      })
      res.send({
        status: 'success',
        message: '删除成功'
      })
    } else {
      res.send({
        status: 'error',
        message: '该用户不存在'
      })
    }

  }
  //修改用户密码
  async modifyPassword(req, res, next) {
    const body = req.body
    console.log(body)
    await UserModuls.findByIdAndUpdate({
      // _id: body.id
      _id:req.session.user._id
    }, {
      $set: {
        password: body.password
      }
    }, function (err, success) {
      if (err) {
        console.log("修改密码错误，数据库返回：" + err)
        res.send({
          status: 'error',
          message: '修改失败，稍后再试'
        })
      } else if (success) {
        res.send({
          status: 'success',
          message: '修改成功'
        })
      }
    })
  }
}

module.exports = new User()
