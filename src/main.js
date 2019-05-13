// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible' //rem相对单位
import foots from '@/components/foots' //底部的注释
import moment from 'moment' //使用时间处理插件


Vue.config.productionTip = false
Vue.component('foots',foots)
Vue.prototype.$moment = moment

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
