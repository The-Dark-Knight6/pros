import Vue from 'vue'
import Router from 'vue-router'
// import host from '@/components/host' //主页
// import poem from '@/components/poem' //诗词页面
// import some from '@/components/some' //关于页面
// import game from '@/components/game' //娱乐页面
// import text from '@/components/text' //文章页面
// import add from '@/components/add' //添加文章、诗词页面 仅限自己
// import details from '@/components/details'  //文章详细页面

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes : [
    {
      path : '/',
      component : resolve => require(['@/components/host'],resolve)
    },
    {
      path : '/poem',
      component : resolve => require(['@/components/poem'],resolve)
    },
    {
      path : '/some',
      component : resolve => require(['@/components/some'],resolve)
    },
    {
      path : '/game',
      component : resolve => require(['@/components/game'],resolve)
    },
    {
      path : '/text',
      component : resolve => require(['@/components/text'],resolve)
    },
    {
      path : '/add',
      component : resolve => require(['@/components/add'],resolve)
    },
    {
      path : '/details',
      component : resolve => require(['@/components/details'],resolve)
    }
  ]
})

// export default new Router({
//   mode : 'history',
//   routes: [
//     {
//       path : '/',
//       name : 'host',
//       component : host
//     },
//     {
//       path : '/poem',
//       name : 'poem',
//       component : poem
//     },
//     {
//       path : '/some',
//       name : 'some',
//       component : some
//     },
//     {
//       path : '/text',
//       name : 'text',
//       component : text
//     },
//     {
//       path : '/game',
//       name : 'game',
//       component : game
//     },
//     {
//       path : '/add',
//       name : 'add',
//       component : add
//     },
//     {
//       path : '/details',
//       name : 'details',
//       component : details
//     }
//   ]
// })
