import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Admin from '@/admin/components/Admin.vue'
import Test from '@/admin/components/test.vue'
import UserManage from '@/admin/components/UserManage.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [{
        path: 'userManage',
        name: 'UserManage',
        component: UserManage
      }, ]
    },

    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
