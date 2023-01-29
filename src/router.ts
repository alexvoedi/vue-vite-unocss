import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = []

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
