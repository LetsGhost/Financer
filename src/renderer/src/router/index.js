import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Management from '../components/Management.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/management',
    component: Management
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
