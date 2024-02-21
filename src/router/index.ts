import type { RouteParams, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { isAuthenticated } from '@/composition/auth'

export type AppRouteNames =
  | 'home'
  | 'listTable'
  | 'tableDetail'
  | 'payTable'
  | 'listBookTable'
  | 'bookTable'
  | 'login'
  | 'historyBook'

export const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/list-table/:id',
      name: 'listTable',
      meta: { requiresAuth: true },
      component: () => import('../views/Stores/ListTableView.vue')
    },
    {
      path: '/table-detail/:storeId/:floorId/:tableId',
      name: 'tableDetail',
      meta: { requiresAuth: true },
      component: () => import('../views/Stores/DetailTableView.vue')
    },
    {
      path: '/thanh-toan/:storeId/:floorId/:tableId',
      name: 'payTable',
      meta: { requiresAuth: true },
      component: () => import('../views/Stores/PayTableView.vue')
    },
    {
      path: '/danh-sach-dat-ban-truoc/:storeId/:floorId/:tableId',
      name: 'listBookTable',
      meta: { requiresAuth: true },
      component: () => import('../views/Stores/ListBookTableView.vue')
    },
    {
      path: '/lich-su-dat-ban/:storeId/:floorId/:tableId',
      name: 'historyBook',
      meta: { requiresAuth: true },
      component: () => import('../views/Stores/HistoryBookTable.vue')
    },
    {
      path: '/dat-ban-cho-khach/:storeId/:floorId/:tableId',
      name: 'bookTable',
      meta: { requiresAuth: true },
      component: () => import('../views/Stores/FormBookTable.vue')
    },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    // Redirect to the login page if not authenticated
    next('/login');
  } else {
    // Continue to the requested route
    next();
  }
});

export function routerPush (name: AppRouteNames, params?: RouteParams): ReturnType<typeof router.push> {
  return params === undefined
    ? router.push({ name })
    : router.push({ name, params })
}