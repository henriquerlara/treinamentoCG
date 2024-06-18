import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";
import GridPage from "../components/Grid.vue";

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/grid", name: "GridPage", component: GridPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
