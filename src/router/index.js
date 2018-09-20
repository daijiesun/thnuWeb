import Vue from 'vue'
import VueRouter from 'vue-router' //路由
import admin from "./admin" //导入路由文件
import home from "./home" //g前端页面路由
Vue.use(VueRouter)
//合并两个路由
let routes = new Set([...home, ...admin]);
export default new VueRouter({
  routes,
  // mode: 'history'
})
// module.exports = router
