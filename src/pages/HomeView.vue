<template>
  <div class="home" v-auto-animate>
    <Banner />
    <!-- Спиннер отображается, пока идет загрузка -->
    <IsLoadingBalls v-if="isLoading" />

    <!-- Контент отображается, когда загрузка завершена -->
    <div v-else>
      <!-- Карусель категорий -->
      <CategoryCarousel
        v-if="categories && categories.length"
        :data="{ items: categories }"
        @categorySelected="filterByCategory"
      />
      <GameCarousel
        v-if="carouselNewRef && carouselNewRef.items && carouselNewRef.items.length"
        :data="carouselNewRef"
      />
      <GameCarousel
        v-if="
          carouselPopularRef &&
          carouselPopularRef.items &&
          carouselPopularRef.items.length
        "
        :data="carouselPopularRef"
      />
      <!-- Карточка бесплатных игр -->
      <GameCard v-if="tryFeeCardRef" :cardData="tryFeeCardRef" />
      <Info />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useCategoryStore } from "@/stores/categoryStore"; // Хранилище категорий
import Banner from "../layouts/Banner.vue";
import GameCard from "../components/ui/card/InfoGameCard.vue";
import Info from "../components/ui/Info.vue";
import IsLoadingBalls from "../components/ui/IsLoadingBalls.vue";
import { useRouter } from "vue-router";
import GameCarousel from "../layouts/GameCarousel.vue";
import CategoryCarousel from "../layouts/CategoryCarousel.vue";

import { carouselNew } from "../data/new_carousel.js";
import { carouselPopular } from "../data/popular_carousel.js";
import { tryFeeCard } from "../data/try_free_card.js";

const router = useRouter();
const categoryStore = useCategoryStore(); // Используем хранилище категорий
const isLoading = ref(true); // Состояние загрузки
const carouselNewRef = ref(null); // Данные для новой карусели
const carouselPopularRef = ref(null); // Данные для популярной карусели
const tryFeeCardRef = ref(null); // Данные для бесплатных игр

// Доступ к данным категорий из хранилища
const categories = computed(() => categoryStore.categories);

// Обработка выбора категории
const filterByCategory = (categoryName) => {
  console.log("Filtering by category:", categoryName);
  categoryStore.setCurrentCategory(categoryName); // Устанавливаем текущую категорию
  router.push({ name: "AllGames", query: { category: categoryName.toLowerCase() } }); // Переход
};

// Загрузка данных при монтировании
onMounted(() => {
  try {
    console.log("Loading games into category store...");
    const games = [...carouselNew.items, ...carouselPopular.items];
    console.log("Combined game list:", games);
    categoryStore.setGames(games);

    setTimeout(() => {
      carouselNewRef.value = carouselNew || { items: [] };
      carouselPopularRef.value = carouselPopular || { items: [] };
      tryFeeCardRef.value = tryFeeCard || null;
      console.log("Categories loaded:", categories.value);
      isLoading.value = false;
    }, 200);
  } catch (error) {
    console.error("Error loading data:", error);
    isLoading.value = false;
  }
});
</script>

<style scoped>
/* Добавьте стили, если требуется */
</style>
