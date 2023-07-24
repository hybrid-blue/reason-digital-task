import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WhatWeDo from '../views/WhatWeDo.vue'
import TheDigitalDivide from '../views/TheDigitalDivide.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/what-we-do',
      name: 'what-wo-do',
      component: WhatWeDo
    },
    {
      path: '/the-digital-divide',
      name: 'the-digital-divide',
      component: TheDigitalDivide
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

export default router
