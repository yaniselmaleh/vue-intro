import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FetchGet from '../components/FetchGet.vue'
import AxiosGet from '../components/AxiosGet.vue'
import FetchVfor from '../components/FetchVfor.vue'
import Vfor from '../components/Vfor.vue'
import Vif from '../components/Vif.vue'
import Vshow from '../components/Vshow.vue'
import Slot from '../components/Slot.vue'

import '../components/lib/bootstrap.js';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: 'Home'}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {title: 'About'}
  },
  {
    path: '/fetchget',
    name: 'FetchGet',
    component: FetchGet,
    meta: {title: 'FetchGet'}
  },
  {
    path: '/axiosget',
    name: 'AxiosGet',
    component: AxiosGet,
    meta: {title: 'AxiosGet'}
  },
  {
    path: '/vfor',
    name: 'Vfor',
    component: Vfor,
    meta: {title: 'Vfor'}
  },
  {
    path: '/fetchvfor',
    name: 'FetchVfor',
    component: FetchVfor,
    meta: {title: 'FetchVfor'}
  },
  {
    path: '/vif',
    name: 'Vif',
    component: Vif,
    meta: {title: 'Vif'}
  },
  {
    path: '/vshow',
    name: 'Vshow',
    component: Vshow,
    meta: {title: 'Vshow'}
  },
  {
    path: '/slot',
    name: 'Slot',
    component: Slot,
    meta: {title: 'Slot'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router