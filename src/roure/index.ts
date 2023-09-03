import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/user',
      component: () => import('../views/user/index.vue')
    },
    {
      path: '/main',
      component: () => import('../views/main/main.vue')
    },
    {
      path: '/error',
      component: () => import('../views/error/error.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/notFound/notFount.vue')
    }
  ]
})

export default router
