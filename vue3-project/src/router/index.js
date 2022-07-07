/*
 * @Description: 路由配置
 * @Author: rendc
 * @Date: 2022-07-03 09:20:51
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-07 09:34:57
 */
import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/type',
    name: 'type',
    component: () => import('../views/TypeView.vue')
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: () => import('../views/ShoppingView.vue')
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: () => import('../views/ShoppingCartView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 导航守卫
router.afterEach(() => {
  // console.log('🤡 CC - router.afterEach - to', to);
  // 解决路由跳转后页面不在顶部的问题
  window.scrollTo(0, 0);
})

export default router
