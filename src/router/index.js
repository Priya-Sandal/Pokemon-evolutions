import { createRouter, createWebHistory } from 'vue-router'
import  HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about/:slug',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */'../views/About.vue')
  }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
