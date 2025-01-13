import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import GameSingle from "../pages/GameSingle.vue";
import AllSlots from "../pages/AllSlots.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/game/:id", component: GameSingle },
  { path: "/all-slots", component: AllSlots },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; // Экспорт по умолчанию
