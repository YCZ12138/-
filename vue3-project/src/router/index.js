/*
 * @Description: 路由配置
 * @Author: rendc
 * @Date: 2022-07-03 09:20:51
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-06 10:29:19
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

export default router
