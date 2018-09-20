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
export default [{
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

  //*
  {
    path: '*',
    component: NotFound
  },
]
