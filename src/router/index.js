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
  {
    path: "/drops",
    name: "drops",
    component: () => import("@/views/drops.vue"),
  },
  {
    path: "/stats",
    name: "stats",
    component: () => import("@/views/stats.vue"),
  },
  {
    path: "/about",
    about: "about",
    component: () => import("@/views/about.vue"),
  },
  {
    path: "/community",
    about: "community",
    component: () => import("@/views/community.vue"),
  },
  {
    path: "/creator-studio",
    about: "creator-studio",
    component: () => import("@/views/creator-studio.vue"),
  },
  {
    path: "/edit-profile",
    about: "edit-profile",
    component: () => import("@/views/edit-profile.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
