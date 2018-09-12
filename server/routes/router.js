const express = require('express')
const router = express.Router()

//管理员模块
const Admin = require('../lib/mongodb/controller/adminUser')
//用户模块
const User = require('../lib/mongodb/controller/user')

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

module.exports = router