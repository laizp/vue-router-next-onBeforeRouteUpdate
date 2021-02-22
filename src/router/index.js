import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  routes: [
    {
      path: '/',
      component: () => import('../views/home.vue')
    },
    {
      path: '/page/:id',
      component: () => import('../views/page.vue')
    }
  ],
  history: createWebHistory()
});
