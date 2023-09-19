import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/home/index'),
    hidden: true
  },
  {
    path: '/home',
    component: () => import('@/views/home/index'),
    hidden: true
  },{
    path: '/license',
    component: () => import('@/views/license/index'),
    hidden: true
  }, {
    path: '/pay',
    component: () => import('@/views/pay/index'),
    hidden: true,
    meta:{
      keepalive:true,
      title:'康药多收银平台'
    }
  },
  {
    path: '/link',
    component: () => import('@/views/link/index'),
    hidden: true,
    meta:{
      keepalive:true,
      title:'康药多'
    }
  },
];


const createRouter = () => new Router({
  mode: 'hash', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
