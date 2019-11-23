import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../views/Main"
import task from "../views/Task"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/page/:tid',
    name: 'taskPage',
    component: task,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
