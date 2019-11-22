import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/1',
    name: 'legalize',
    component: Home
  },
  {
    path: '/2',
    name: 'feet-freedom',
    component: Home
  },
  {
    path: '/3',
    name: 'podemos',
    component: Home
  },
  {
    path: '/4',
    name: 'kamia-anoxi',
    component: Home
  },
  {
    path: '/5',
    name: 'pano-podia',
    component: Home
  },
  {
    path: '/6',
    name: 'podi-boreis',
    component: Home
  },
  {
    path: '/7',
    name: 'i pasaran',
    component: Home
  },
  {
    path: '/8',
    name: 'i agapi akro',
    component: Home
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
  base: process.env.BASE_URL,
})

export default router
