import type { RouteParams, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { isAuthenticated } from '@/composition/auth'

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
      path: '/table-detail',
      name: 'tableDetail',
      meta: { requiresAuth: true },
      component: () => import('../views/Stores/DetailTableView.vue')
    },
    {
      path: '/thanh-toan',
      name: 'payTable',
      meta: { requiresAuth: true },
      component: () => import('../views/Stores/PayTableView.vue')
    },
    {
      path: '/danh-sach-dat-ban-truoc',
      name: 'listBookTable',
      meta: { requiresAuth: true },
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
      meta: { requiresAuth: true },
      component: () => import('../views/Stores/HistoryBookTable.vue')
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