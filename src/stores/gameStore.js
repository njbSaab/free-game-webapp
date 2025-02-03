import { defineStore } from "pinia";
import { carouselBuyBonus } from "@/data/carousels/buy_bonus_carousel.js";
import { carouselPopular } from "@/data/carousels/popular_carousel.js";
import { carouselNew } from "@/data/carousels/new_carousel.js";
import { carouselFrutisGames } from "@/data/carousels/frutis_carousel.js";
import { carouselRetro } from "@/data/carousels/retro_carousel.js";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    allGames: [
      ...carouselNew.items,
      ...carouselPopular.items,
      ...carouselBuyBonus.items,
      ...carouselFrutisGames.items,
      ...carouselRetro.items,
    ],
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
