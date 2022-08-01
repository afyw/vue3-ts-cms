import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import localCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menus'
import store from '@/store'
import { firstMenu } from '@/utils/map-menus'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue'),
    // 根据userMenus决定
    children: []
  },
  {
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }

    // userMenus => routes
    const userMenus = (store.state as any).login.userMenus
    const routes = mapMenusToRoutes(userMenus)

    // 将routes -> router.main.children
    routes.forEach((route) => {
      router.addRoute('main', route)
    })
  }

  // console.log(router.getRoutes())
  // console.log(to)
  if (to.path === '/main') {
    return firstMenu.url
  }
})
export default router
