import { createRouter, createWebHistory } from 'vue-router';
import GridPage from '@/components/Grid.vue';
import FormPage from '@/components/FormPage.vue';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/grid',
    name: 'GridPage',
    component: GridPage,
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/form',
    name: 'FormPage',
    component: FormPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
