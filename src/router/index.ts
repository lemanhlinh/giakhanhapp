import type { RouteParams, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { isAuthorized } from '../store/user'

export type AppRouteNames =
  | 'home'
  | 'list-table'
  | 'table-detail'
  | 'thanh-toan'
  | 'danh-sach-dat-ban-truoc'
  | 'chi-tiet-them-moi-dat-ban'
  | 'login'
  | 'lich-su-dat-ban'

export const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      beforeEnter: () => !isAuthorized(),
    },
    {
      path: '/list-table/:id',
      name: 'listTable',
      component: () => import('../views/Stores/ListTableView.vue')
    },
    {
      path: '/table-detail',
      name: 'tableDetail',
      component: () => import('../views/Stores/DetailTableView.vue')
    },
    {
      path: '/thanh-toan',
      name: 'payTable',
      component: () => import('../views/Stores/PayTableView.vue')
    },
    {
      path: '/danh-sach-dat-ban-truoc',
      name: 'listBookTable',
      component: () => import('../views/Stores/ListBookTableView.vue')
    },
    {
      path: '/chi-tiet-them-moi-dat-ban',
      name: 'detailBook',
      component: () => import('../views/Stores/DetailBookTable.vue')
    },
    {
      path: '/lich-su-dat-ban',
      name: 'historyBook',
      component: () => import('../views/Stores/HistoryBookTable.vue')
    },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export function routerPush (name: AppRouteNames, params?: RouteParams): ReturnType<typeof router.push> {
  return params === undefined
    ? router.push({ name })
    : router.push({ name, params })
}