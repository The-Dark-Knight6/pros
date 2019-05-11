import Vue from 'vue'
import Router from 'vue-router'
import host from '@/components/host'
import poem from '@/components/poem'
import some from '@/components/some'
import text from '@/components/text'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path : '/',
      redirect : 'host'
    },
    {
      path : '/host',
      name : 'host',
      component : host
    },
    {
      path : '/poem',
      name : 'poem',
      component : poem
    },
    {
      path : '/some',
      name : 'some',
      component : some
    },
    {
      path : '/text',
      name : 'text',
      component : text
    },
  ]
})
