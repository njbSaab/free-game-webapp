import { defineStore } from "pinia";
import { carouselCategoryData } from "@/data/category_carousel.js"; // Категории

export const useCategoryStore = defineStore("categoryStore", {
  state: () => ({
    categories: carouselCategoryData.items, // Данные категорий
    currentCategory: "All", // Текущая выбранная категория
    games: [], // Все игры
  }),

  getters: {
    filteredGames: (state) => {
      if (!state.currentCategory || state.currentCategory === "All") {
        return state.games;
      }
      const category = state.categories.find(
        (cat) => cat.name.toLowerCase() === state.currentCategory.toLowerCase(),
      );
      return category
        ? state.games.filter((game) => game.category === category.name) // Обновите условие фильтрации
        : [];
    },
    currentCategoryGames: (state) => {
      if (!state.currentCategory || state.currentCategory === "All") {
        return state.games;
      }
      const category = state.categories.find(
        (cat) => cat.name.toLowerCase() === state.currentCategory.toLowerCase(),
      );
      return category ? category.game || [] : [];
    },
  },

  actions: {
    setGames(gameList) {
      this.games = gameList; // Обновляем список игр
      console.log("Games set in Pinia store:", this.games);
    },
    setCurrentCategory(categoryName) {
      console.log("Setting current category to:", categoryName);
      this.currentCategory = categoryName;
    },
    loadCategories() {
      console.log(
        "Loading categories from carouselCategoryData:",
        carouselCategoryData.items,
      );
      const uniqueCategories = [];
      carouselCategoryData.items.forEach((item) => {
        if (
          !uniqueCategories.find(
            (cat) => cat.name.toLowerCase() === item.name.toLowerCase(),
          )
        ) {
          uniqueCategories.push(item);
        }
      });
      this.categories = uniqueCategories;
      console.log("Loaded categories:", this.categories);
    },
  },
});
