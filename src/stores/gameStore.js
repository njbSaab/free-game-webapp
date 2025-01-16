import { defineStore } from "pinia";
import { carouselNew } from "@/data/new_carousel.js";
import { carouselPopular } from "@/data/popular_carousel.js";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    currentGame: null,
    allGames: [...carouselNew.items, ...carouselPopular.items], // Объединяем оба списка
  }),
  actions: {
    setCurrentGame(game) {
      this.currentGame = game; // Устанавливаем текущую игру
      console.log("Set current game:", this.currentGame);
      console.log("Current game ID:", this.currentGame.id);
      console.log("All games:", this.allGames); // Выводим список всех игр
    },
  },
});
