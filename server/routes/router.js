const express = require('express')
const router = express.Router()
const upload = require('../utils/multer')

//管理员模块
const Admin = require('../lib/mongodb/controller/adminUser')
//用户模块
const User = require('../lib/mongodb/controller/user')
//公告模块
const Notice = require('../lib/mongodb/controller/notice')
//趣事模块
const Fun = require('../lib/mongodb/controller/fun')
//表白墙模块
const Love = require('../lib/mongodb/controller/love')
//寻物
const Lose = require('../lib/mongodb/controller/lose')
//快递
const Exp = require('../lib/mongodb/controller/expressage')
//管理员登录信息
router.get('/admin/session', (req, res) => {
  res.send({
    status: "success",
    adminInfo: req.session.admin

  })
})

//管理员相关路由
router.post('/admin/register', Admin.adminRegister) //管理员注册
router.post('/admin/login', Admin.adminLogin) //管理员登录
router.get('/admin/logout', Admin.adminLogout) //管理员退出
router.post('/admin/addUser', User.userRegister) //管理员添加用户
router.get('/admin/userList', User.getUserList) //管理员获取用户列表
router.post('/admin/deleteUser', User.deleteUser) //管理员删除用户
router.post('/admin/modifyPassword', User.modifyPassword) //修改用户密码
router.post('/admin/addNotice', Notice.addNotice) //添加公告
router.get('/admin/getNotice', Notice.getNoticeList) //获取公告
router.post('/admin/delNotice', Notice.delNotice) //移除公告
router.get('/admin/getFunList', Fun.getFunList) //获取趣事列表
router.get('/admin/delOneFun', Fun.delOneFun) //根据id移除趣事
router.get('/admin/getLoveList', Love.getLoveList) //获取表白列表
router.get('/admin/delOneLove', Love.delOneLove) //根据id移除表白信息
router.get('/admin/getLoseList', Lose.getLoseList) //获取寻物列表
router.get('/admin/delOneLose', Lose.delOneLose) //根据id移除寻物信息
router.get('/admin/getExpList', Exp.getExpList) //获取快递单列表
router.get('/admin/delOneExp', Exp.delOneExp) //根据id移除快递单信息
//首页相关路由
router.get('/index/getNotice', Notice.getNoticeList) //首页获取公告


//用户登录信息获取
router.get('/user/session', (req, res) => {
  res.send({
    status: "success",
    userInfo: req.session.user
  })
})

//用户相关
router.post('/user/register', User.userRegister) //用户注册
router.post('/user/login', User.userLogin) //用户登录
//趣事
router.get('/user/getFunList', Fun.getFunList) //获取所有趣事（前端自行过滤）
router.post('/user/addFun', upload.array('files', 10), Fun.addFun) //添加趣事
router.get('/user/delOneFun', Fun.delOneFun) //根据id移除趣事
//表白墙
router.get('/user/getLoveList', Love.getLoveList) //获取所有表白（前端自行过滤）
router.post('/user/addLove', upload.array('files', 10), Love.addLove) //添加表白
router.get('/user/delOneLove', Love.delOneLove) //根据id移除表白
//寻物
router.get('/user/getLoseList', Lose.getLoseList) //获取所有寻物（前端自行过滤）
router.post('/user/addLose', upload.array('files', 10), Lose.addLose) //添加寻物
router.get('/user/delOneLose', Lose.delOneLose) //根据id移除寻物


module.exports = router
