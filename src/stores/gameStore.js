import { defineStore } from "pinia";
import { carouselNew } from "@/data/new_carousel.js";
import { carouselPopular } from "@/data/popular_carousel.js";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    allGames: [...carouselNew.items, ...carouselPopular.items],
    currentGame: null,
  }),
  actions: {
    setCurrentGame(game) {
      this.currentGame = game;
      console.log("Set current game:", this.currentGame);
      console.log("Current game ID:", this.currentGame.id);
      console.log("All games:", this.allGames); // Выводим список всех игр
    },
  },
});
