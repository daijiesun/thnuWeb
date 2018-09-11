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
    console.log(body);
    const err = checkFormData(body)
    if (err) {
      //存在错误，直接返回
      res.send({
        status: 'error',
        message: err
      })
    } else {
      const user = await UserModuls.find({
        $or: [{
          "userName": body.userName
        }, {
          "email": body.email
        }]
      })
      if (!_.isEmpty(user)) {
        res.send({
          status: 'error',
          message: '该用户名或邮箱已经存在'
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
}

module.exports = new User()
