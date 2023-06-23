import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: "/explore",
    name: "explore",
    component: () => import("@/views/explore.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
