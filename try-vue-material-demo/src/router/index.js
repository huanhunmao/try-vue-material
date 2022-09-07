import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Steppers from '../views/Steppers.vue'
import Select from '../views/Select.vue'
import Progress from '../views/Progress.vue'

Vue.use(VueRouter)

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
    path: '/steppers',
    name: 'Steppers',
    component: Steppers
  },
  {
    path: '/select',
    name: 'Select',
    component: Select
  },
  {
    path: '/progress',
    name: 'Progress',
    component: Progress
  }
]

const router = new VueRouter({
  routes
})

export default router
