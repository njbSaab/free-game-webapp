import { defineStore } from "pinia";
import { carouselNew } from "@/data/new_carousel.js";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    currentGame: null,
    allGames: carouselNew.items || [], // Список всех игр
  }),
  actions: {
    setCurrentGame(game) {
      this.currentGame = game; // Устанавливаем текущую игру
      console.log("Set current game:", this.currentGame);
      console.log("Current game ID:", this.currentGame.id);
      console.log("All games:", this.allGames); // Используем this для доступа к allGames
    },
  },
});
