import { createRouter, createWebHistory } from 'vue-router'
import TaskIndex from '../views/TaskIndex.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TaskIndex',
      component: TaskIndex,
    },
  ]
})

export default router
