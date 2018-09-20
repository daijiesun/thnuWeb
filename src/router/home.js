import Home from "@/components/Home.vue"
import Index from "@/components/Navigation.vue";
import HomeLove from "@/components/Love.vue";
import HomeNews from "@/components/News.vue";
import HomeLose from "@/components/Lose.vue";
import HomePartJob from "@/components/PartJob.vue";
import HomeSport from "@/components/Sport.vue";
import HomeGoods from "@/components/Goods.vue"
import HomeExpressage from "@/components/Expressage.vue"
import Info from "@/components/Info.vue"
import Register from "@/components/Register.vue"
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

export default [{
    path: "/",
    name: "Home",
    component: Home,
    redirect: '/index',
    children: [{
        //注册页
        path: "/register",
        name: "Register",
        component: Register
      },
      {
        path: "/index",
        name: "Index",
        component: Index,
      },
      {
        //告白页
        path: "love",
        name: "HomeLove",
        component: HomeLove
      },
      { //趣事页
        path: '/news',
        name: 'HomeNews',
        component: HomeNews
      },
      { //寻物页
        path: '/lose',
        name: 'HomeLose',
        component: HomeLose
      },
      { //兼职页
        path: '/partjob',
        name: 'PartJob',
        component: HomePartJob
      },
      { //活动页
        path: '/sport',
        name: 'HomeSport',
        component: HomeSport
      },
      { //闲置页
        path: '/goods',
        name: 'HomeGoods',
        component: HomeGoods
      },
      { //快递页
        path: '/expressage',
        name: 'HomeExpressage',
        component: HomeExpressage
      },
      { //快递信息页
        path: '/info/:id',
        name: 'Info',
        component: Info
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
      }
    ]
  },

]
