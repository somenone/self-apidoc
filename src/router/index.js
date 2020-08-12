import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/projects',
    name: 'projects',
    component: () => import('@/views/projects/index.vue')
  },{
    path: '/:projectname',
    name: 'project',
    component: () => import( /* webpackChunkName: "about" */ '@/views/Home')
  },
  {
    path: '/:projectname/:apiname',
    name: 'api',
    component: () => import( /* webpackChunkName: "about" */ '@/views/Home')
  },
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router