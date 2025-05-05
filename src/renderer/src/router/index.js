import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Management from '../components/Management.vue'
import Settings from '../components/Settings.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/management',
    component: Management
  },
  {
    path: '/settings',
    component: Settings
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
