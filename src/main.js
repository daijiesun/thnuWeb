// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import $ from 'jquery'
import axios from 'axios'
//加密
import crypto from '../tools/crypto'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//提示框
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'
import vDialogs from 'v-dialogs'
import vPage from 'v-page'
import vGallery from 'v-gallery'
Vue.use(vGallery)
Vue.use(vPage)
Vue.use(vDialogs)
import store from './store'
Vue.prototype.axios = axios
Vue.prototype.crypto = crypto
Vue.config.productionTip = false
Vue.use(Toast);
/* eslint-disable no-new */
Vue.filter('timeFormat', value => {
  // return value +'time'
})
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: {
    App
  },
  template: '<App/>'
})
