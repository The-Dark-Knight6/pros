// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible' //rem相对单位
import navs from '@/components/navs' //顶部导航栏
import foots from '@/components/foots' //底部
//import axios from 'axios' // http请求
import VueQuillEditor from 'vue-quill-editor' // 引入 vue-quill-editor富文本编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// import ElementUI from 'element-ui'; // 引入elementui
// import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.component('foots',foots)
Vue.component('navs',navs)
Vue.prototype.$http = axios
Vue.use(VueQuillEditor)
// Vue.use(ElementUI)
Vue.use(VueLazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
