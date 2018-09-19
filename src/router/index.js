import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
//about admin
import Admin from '@/admin/components/Admin.vue'
import AdminIndex from '@/admin/components/AdminIndex.vue'
import Test from '@/admin/components/test.vue'
import UserManage from '@/admin/components/UserManage.vue'
import Notice from '@/admin/components/Notice.vue'
import Expressage from '@/admin/components/Expressage.vue'
import Lose from '@/admin/components/Lose.vue'
import Job from '@/admin/components/Job.vue'
import Goods from '@/admin/components/Goods.vue'
import Sport from '@/admin/components/Sport.vue'
import Fun from '@/admin/components/Fun.vue'
import Love from '@/admin/components/Love.vue'
import AddUser from '@/admin/components/AddUser.vue'
import ModifyUser from '@/admin/components/ModifyUser.vue'
import NotFound from '@/components/NotFound.vue'
//about user
import PersonalCenter from '@/components/user/PersonalCenter.vue'
import PersonalInformation from '@/components/user/PersonalInformation.vue'
import PersonalMessage from '@/components/user/PersonalMessage.vue'
import MyGoods from '@/components/user/MyGoods.vue'
import MySport from '@/components/user/MySport.vue'
import MyExp from '@/components/user/MyExp.vue'
import MyLove from '@/components/user/MyLove.vue'
import MyFun from '@/components/user/MyFun.vue'
import MyLose from '@/components/user/MyLose.vue'
import MyJob from '@/components/user/MyJob.vue'
import MyPwd from '@/components/user/MyPwd.vue'
//about user add
import AddExpressage from '@/components/add/AddExpressage.vue'
import AddFun from '@/components/add/AddFun.vue'
import AddGoods from '@/components/add/AddGoods.vue'
import AddJob from '@/components/add/AddJob.vue'
import AddLose from '@/components/add/AddLose.vue'
import AddLove from '@/components/add/AddLove.vue'
import AddSport from '@/components/add/AddSport.vue'




Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [

    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [{
          path: 'adminIdex',
          name: 'AdminIndex',
          component: AdminIndex
        },
        { //用户管理
          path: 'userManage',
          name: 'UserManage',
          component: UserManage
        },
        { //添加用户
          path: 'addUser',
          name: 'AddUser',
          component: AddUser
        },
        { //修改用户
          path: 'modifyUser/:id',
          name: 'ModifyUser',
          component: ModifyUser,
        },
        { //公告管理
          path: 'notice',
          name: 'Notice',
          component: Notice
        },
        { //快递服务
          path: 'service/expressage',
          name: 'Expressage',
          component: Expressage
        },
        { //寻物启事
          path: 'service/lose',
          name: Lose,
          component: Lose
        },
        { //兼职模块
          path: 'service/job',
          name: Job,
          component: Job
        },
        { //活动模块
          path: 'service/sport',
          name: Sport,
          component: Sport
        },
        { //二手
          path: 'service/goods',
          name: Goods,
          component: Goods
        },
        { //趣事
          path: 'gossip/fun',
          name: Fun,
          component: Fun
        },
        { //表白墙
          path: 'gossip/love',
          name: Love,
          component: Love
        }
      ]
    },
    { //个人中心
      path: '/personalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter,
      children: [
        //个人资料
        {
          path: 'personalInformation',
          name: 'PersonalInformation',
          component: PersonalInformation

        },
        //个人消息
        {
          path: 'personalMessage',
          name: 'PersonalMessage',
          component: PersonalMessage
        },
        //发布闲置商品
        {
          path: 'addGoods',
          name: 'AddGoods',
          component: AddGoods
        },
        //发布寻物启事
        {
          path: 'addLose',
          name: 'AddLose',
          component: AddLose
        },
        //发布兼职
        {
          path: 'addJob',
          name: 'AddJob',
          component: AddJob
        },
        //发布校园活动
        {
          path: 'addSport',
          name: 'AddSport',
          component: AddSport
        },
        //发布快递
        {
          path: 'addExpressage',
          name: 'AddExpressage',
          component: AddExpressage
        },
        //发布表白
        {
          path: 'addLove',
          name: 'AddLove',
          component: AddLove
        },
        //发布趣事
        {
          path: 'addFun',
          name: 'AddFun',
          component: AddFun
        },
        //个人商品
        {
          path: 'myGoods',
          name: 'MyGoods',
          component: MyGoods
        },
        //我的活动
        {
          path: 'mySport',
          name: 'MySport',
          component: MySport
        },
        //快递
        {
          path: 'myExp',
          name: 'MyExp',
          component: MyExp
        },
        //表白墙
        {
          path: 'myLove',
          name: 'MyLove',
          component: MyLove
        },
        //趣事
        {
          path: 'myFun',
          name: 'MyFun',
          component: MyFun
        },
        //表白墙
        {
          path: 'myLose',
          name: 'MyLose',
          component: MyLose
        },
        {
          path: 'myJob',
          name: 'MyJob',
          component: MyJob
        },
        //修改密码
        {
          path: 'myPwd',
          name: 'MyPwd',
          component: MyPwd
        },
      ]


    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '*',
      component: NotFound
    },
  ]
})
