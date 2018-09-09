const express = require('express')
const router = express.Router()

//管理员模块
const Admin = require('../lib/mongodb/controller/adminUser')


router.get('/',(req,res) => {
    res.send({
        status:"success"
    })
})
router.get('/admin/session',(req,res)=>{
    res.send({
        status: "success",
        adminInfo: req.session.admin

    })
})
//管理员相关路由
router.post('/admin/register',Admin.adminRegist)    //管理员注册
router.post('/admin/login',Admin.adminLogin)    //管理员登录
router.get('/admin/logout',Admin.adminLogout)    //管理员退出


module.exports = router