import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Content from "../views/Content.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/content", name: "content", component: Content },
  { path: "/:pathMatch(.*)*", redirect: "/" }, // fallback to home
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
