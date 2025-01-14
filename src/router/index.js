import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import SingleGame from "@/pages/SingleGame.vue";
import AllGames from "@/pages/AllGames.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/game/:id", name: "SingleGame", component: SingleGame },
  { path: "/all-games", component: AllGames },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
