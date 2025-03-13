import { defineStore } from "pinia";
import { carouselBuyBonus } from "@/data/carousels/buy_bonus_carousel.js";
import { carouselPopular } from "@/data/carousels/popular_carousel.js";
import { carouselNew } from "@/data/carousels/new_carousel.js";
import { carouselFrutisGames } from "@/data/carousels/frutis_carousel.js";
import { carouselRetro } from "@/data/carousels/retro_carousel.js";
import { carouselAsianGames } from "@/data/carousels/asian_carousel.js";
import { carouselDrumGamesFirst } from "@/data/carousels/drum_carousel-1.js";
import { carouselOceanGames } from "@/data/carousels/ocean_carousel.js";
import { carouselDrumGamesSecond } from "@/data/carousels/drum_carousel-2.js";
import { carouselMedievalGames } from "@/data/carousels/medieval_carousel.js";
import { carouselDiamondGames } from "@/data/carousels/diamond_carousel.js";
import { carouselAlienGames } from "@/data/carousels/alien_carousel.js";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    allGames: [
      ...carouselNew.items,
      ...carouselPopular.items,
      ...carouselBuyBonus.items,
      ...carouselFrutisGames.items,
      ...carouselRetro.items,
      ...carouselAsianGames.items,
      ...carouselDrumGamesFirst.items,
      ...carouselOceanGames.items,
      ...carouselDrumGamesSecond.items,
      ...carouselMedievalGames.items,
      ...carouselAlienGames.items,
      ...carouselDiamondGames.items,
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
