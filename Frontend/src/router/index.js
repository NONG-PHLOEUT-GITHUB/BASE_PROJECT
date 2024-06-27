import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'FristLoginForm',
    component: () => import('@/views/auth/Login.vue')
  },
  {
    path: '/layout',
    component: () => import('@/views/layout/Layout.vue'),
    // To ensure that when navigating to child routes,
    // Stay within the parent route, you can set up your routes to be nested properly.
    children: [
      {
        path: '/admin-dashboard',
        name: 'Admin Dashboard',
        component: () => import('@/views/admin/AdminHome.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/list-post',
        name: 'List all posts',
        component: () => import('@/views/posts/ListPost.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/list-user',
        name: 'List all users',
        component: () => import('@/views/users/UserManagement.vue'),
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
