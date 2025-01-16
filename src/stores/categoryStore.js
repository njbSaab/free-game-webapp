import { defineStore } from "pinia";
import { computed } from "vue";
import { carouselCategoryData } from "@/data/category_carousel.js"; // Категории

export const useCategoryStore = defineStore("categoryStore", {
  state: () => ({
    categories: carouselCategoryData.items, // Данные категорий
    currentCategory: "All", // Текущая выбранная категория
    games: [], // Все игры
  }),

  getters: {
    filteredGames: (state) => {
      if (state.currentCategory === "All") {
        return state.games;
      }
      const category = state.categories.find(
        (cat) => cat.name.toLowerCase() === state.currentCategory.toLowerCase(),
      );
      return category
        ? state.games.filter((game) => category.game.includes(game))
        : [];
    },
  },

  actions: {
    setCurrentCategory(categoryName) {
      this.currentCategory = categoryName; // Устанавливаем текущую категорию
    },
    setGames(gameList) {
      this.games = gameList; // Обновляем список игр
    },
  },
});
