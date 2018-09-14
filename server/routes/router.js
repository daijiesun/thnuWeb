const express = require('express')
const router = express.Router()

//管理员模块
const Admin = require('../lib/mongodb/controller/adminUser')
//用户模块
const User = require('../lib/mongodb/controller/user')
//公告模块
const Notice = require('../lib/mongodb/controller/notice')

//管理员登录信息
router.get('/admin/session',(req,res)=>{
    res.send({
        status: "success",
        adminInfo: req.session.admin

    })
})
//管理员相关路由
router.post('/admin/register',Admin.adminRegister)    //管理员注册
router.post('/admin/login',Admin.adminLogin)    //管理员登录
router.get('/admin/logout',Admin.adminLogout)    //管理员退出
router.post('/admin/addUser',User.userRegister)  //管理员添加用户
router.get('/admin/userList',User.getUserList)  //管理员获取用户列表
router.post('/admin/deleteUser',User.deleteUser)  //管理员删除用户
router.post('/admin/modifyPassword',User.modifyPassword)    //修改用户密码
router.post('/admin/addNotice',Notice.addNotice) //添加公告
router.get('/admin/getNotice',Notice.getNoticeList) //获取公告
router.post('/admin/delNotice',Notice.delNotice) //移除公告


//首页相关路由
router.get('/index/getNotice',Notice.getNoticeList) //首页获取公告


//用户相关
router.post('/user/register',User.userRegister)  //用户注册
module.exports = router