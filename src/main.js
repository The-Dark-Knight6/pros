// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible' //rem相对单位
import navs from '@/components/navs' //顶部导航栏
import foots from '@/components/foots' //底部
import axios from 'axios' // http请求

Vue.config.productionTip = false
Vue.component('foots',foots)
Vue.component('navs',navs)
Vue.prototype.$ajax= axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
