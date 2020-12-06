import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCompositionApi from '@vue/composition-api';
import Home from '../views/Home.vue'

//import VueMarkdown from 'vue-markdown'
Vue.use(VueCompositionApi);
Vue.use(VueRouter)
//Vue.use(VueMarkdown)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/zombieCells',
    name: 'zombieCells',
    component: () => import('../views/zombieCells.vue')
  },
  {
    path: '/WBMZ',
    name: '/WBMZ',
    component: () => import('../views/WBMZ.vue')
  },
  {
    path: '/HeartPump',
    name: 'HeartPump',
    component: () => import('../views/HeartPump.vue')
  },
  {
    path: '/WTFO',
    name: 'WTFO',
    component: () => import('../views/WTFO.vue')
  },
  {
    path: '/DollarTruck',
    name: 'DollarTruck',
    component: () => import('../views/DollarTruck.vue')
  },
  {
    path: '/whatsojacgyo',
    name: 'whatsojacgyo',
    component: () => import ('../views/whatsojacgyo.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import ('../views/team.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
