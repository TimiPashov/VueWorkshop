import HomePage from '@/views/Home-Page.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/ProfilePage.vue')
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/Catalog-page.vue')
    }
  ]
})

export default router
