<template>
  <div class="home" v-auto-animate>
    <Banner />
    <!-- Спиннер отображается, пока идет загрузка -->
    <IsLoadingBalls v-if="isLoading" />

    <!-- Контент отображается, когда загрузка завершена -->
    <div v-else>
      <!-- Карусель категорий -->
      <CarouselMini
        v-if="categories && categories.length"
        :data="{ items: categories }"
        @categorySelected="filterByCategory"
      />

      <!-- Карусели новых и популярных игр -->
      <Carousel
        v-if="carouselNewRef && carouselNewRef.items.length"
        :data="carouselNewRef"
      />
      <Carousel
        v-if="carouselPopularRef && carouselPopularRef.items.length"
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
import Carousel from "../layouts/Carousel.vue";
import GameCard from "../components/ui/card/InfoGameCard.vue";
import Info from "../components/ui/Info.vue";
import IsLoadingBalls from "../components/ui/IsLoadingBalls.vue";
import CarouselMini from "../layouts/CarouselMini.vue";

import { carouselNew } from "../data/new_carousel.js";
import { carouselPopular } from "../data/popular_carousel.js";
import { tryFeeCard } from "../data/try_free_card.js";

const categoryStore = useCategoryStore(); // Используем хранилище категорий
const isLoading = ref(true); // Состояние загрузки
const carouselNewRef = ref(null); // Данные для новой карусели
const carouselPopularRef = ref(null); // Данные для популярной карусели
const tryFeeCardRef = ref(null); // Данные для бесплатных игр

// Доступ к данным категорий из хранилища
const categories = computed(() => categoryStore.categories);

// Обработка выбора категории
const filterByCategory = (categoryName) => {
  categoryStore.setCurrentCategory(categoryName); // Устанавливаем текущую категорию
  console.log("Selected category:", categoryName); // Отладка
};

// Загрузка данных при монтировании
onMounted(() => {
  isLoading.value = true;
  categoryStore.setGames([...carouselNew.items, ...carouselPopular.items]); // Инициализируем данные игр в хранилище категорий

  setTimeout(() => {
    carouselNewRef.value = carouselNew;
    carouselPopularRef.value = carouselPopular;
    tryFeeCardRef.value = tryFeeCard;
    isLoading.value = false; // Убираем спиннер
  }, 300); // Искусственная задержка
});
</script>

<style scoped>
/* Добавьте стили, если требуется */
</style>