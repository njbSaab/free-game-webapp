<template>
  <div class="home container" v-auto-animate>
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
      <GameCard v-if="tryCardFirstRef" :cardData="tryCardFirstRef" />
      <GameCarousel
        v-if="
          carouselBuyBonusRef &&
          carouselBuyBonusRef.items &&
          carouselBuyBonusRef.items.length
        "
        :data="carouselBuyBonusRef"
      />
      <GameCarousel
        v-if="
          carouselFrutisGamesRef &&
          carouselFrutisGamesRef.items &&
          carouselFrutisGamesRef.items.length
        "
        :data="carouselFrutisGamesRef"
      />
      <GameCard v-if="tryFeeCardRef" :cardData="tryFeeCardRef" />

      <GameCarousel
        v-if="carouselRetroRef && carouselRetroRef.items && carouselRetroRef.items.length"
        :data="carouselRetroRef"
      />
      <!-- asian games -->
      <GameCarousel
        v-if="
        carouselAsianGamesRef && carouselAsianGamesRef.items && carouselAsianGamesRef.items.length
        "
        :data="carouselAsianGamesRef"
      />
      <GameCard v-if="tryCardFirstRef" :cardData="tryCardFirstRef" />
      <!-- asian games -->

      <GameCarousel
        v-if="
        carouselDrumGamesFirstRef && carouselDrumGamesFirstRef.items && carouselDrumGamesFirstRef.items.length
        "
        :data="carouselDrumGamesFirstRef"
      />
      <GameCarousel
        v-if="
        carouselEgyptGamesRef && carouselEgyptGamesRef.items && carouselEgyptGamesRef.items.length
        "
        :data="carouselEgyptGamesRef"
      />
      <GameCarousel
        v-if="
        carouselOceanGamesRef && carouselOceanGamesRef.items && carouselOceanGamesRef.items.length
        "
        :data="carouselOceanGamesRef"
      />
      <GameCarousel
        v-if="
        carouselDrumGamesSecondRef && carouselDrumGamesSecondRef.items && carouselDrumGamesSecondRef.items.length
        "
        :data="carouselDrumGamesSecondRef"
      />
      <GameCarousel
        v-if="
        carouselMedievalGamesRef && carouselMedievalGamesRef.items && carouselMedievalGamesRef.items.length
        "
        :data="carouselMedievalGamesRef"
      />

      <GameCard v-if="tryCardSecondRef" :cardData="tryCardSecondRef" />

      <GameCarousel
        v-if="
        carouselAlienGamesRef && carouselAlienGamesRef.items && carouselAlienGamesRef.items.length
        "
        :data="carouselAlienGamesRef"
      />
      <GameCarousel
        v-if="
        carouselDiamondGamesRef && carouselDiamondGamesRef.items && carouselDiamondGamesRef.items.length
        "
        :data="carouselDiamondGamesRef"
      />
      <GameCard v-if="tryCardSecondRef" :cardData="tryCardSecondRef" />
      <Info />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useCategoryStore } from "@/stores/categoryStore"; // Хранилище категорий
import { useRouter } from "vue-router";

import Banner from "../layouts/Banner.vue";
import GameCard from "../components/ui/card/InfoGameCard.vue";
import Info from "../components/ui/Info.vue";
import IsLoadingBalls from "../components/ui/IsLoadingBalls.vue";

import { tryFeeCard } from "../data/card/try_free_card.js";
import { tryCardFirst } from "../data/card/try_card_item-1";
import { tryCardSecond } from "../data/card/try_card_item-2";

import GameCarousel from "../layouts/GameCarousel.vue";
import CategoryCarousel from "../layouts/CategoryCarousel.vue";

import { carouselNew } from "../data/carousels/new_carousel.js";
import { carouselBuyBonus } from "../data/carousels/buy_bonus_carousel.js";
import { carouselPopular } from "../data/carousels/popular_carousel.js";
import { carouselFrutisGames } from "../data/carousels/frutis_carousel.js";
import { carouselRetro } from "../data/carousels/retro_carousel.js";
import { carouselAsianGames } from "../data/carousels/asian_carousel.js";
import { carouselDrumGamesFirst } from "../data/carousels/drum_carousel-1.js";
import { carouselEgyptGames } from "../data/carousels/egypt_carousel.js"; 
import { carouselOceanGames } from "../data/carousels/ocean_carousel.js"; 
import { carouselDrumGamesSecond } from "../data/carousels/drum_carousel-2.js";
import { carouselMedievalGames } from "../data/carousels/medieval_carousel.js"; 
import { carouselAlienGames } from "../data/carousels/alien_carousel.js";
import { carouselDiamondGames } from "../data/carousels/diamond_carousel.js"; 

const router = useRouter();
const categoryStore = useCategoryStore();
const isLoading = ref(true);

//card ref value
const tryFeeCardRef = ref(null);
const tryCardFirstRef = ref(null);
const tryCardSecondRef = ref(null);

// carousel ref value
const carouselNewRef = ref(null);
const carouselPopularRef = ref(null);
const carouselBuyBonusRef = ref(null);
const carouselFrutisGamesRef = ref(null);
const carouselRetroRef = ref(null);
const carouselAsianGamesRef = ref(null);
const carouselDrumGamesFirstRef = ref(null);
const carouselEgyptGamesRef = ref(null);
const carouselOceanGamesRef = ref(null);
const carouselDrumGamesSecondRef = ref(null);
const carouselMedievalGamesRef = ref(null);
const carouselAlienGamesRef = ref(null);
const carouselDiamondGamesRef = ref(null);

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
    const games = [
      ...carouselNew.items,
      ...carouselPopular.items,
      ...carouselBuyBonus.items,
      ...carouselFrutisGames.items,
      ...carouselRetro.items,
      ...carouselAsianGames.items,
      ...carouselDrumGamesFirst.items,
      ...carouselEgyptGames.items,
      ...carouselOceanGames.items,
      ...carouselDrumGamesSecond.items,
      ...carouselMedievalGames.items,
      ...carouselAlienGames.items,
      ...carouselDiamondGames.items,
    ];

    console.log("Combined game list:", games);
    categoryStore.setGames(games);

    setTimeout(() => {
      tryFeeCardRef.value = tryFeeCard || null;
      tryCardFirstRef.value = tryCardFirst || null;
      tryCardSecondRef.value = tryCardSecond || null;

      carouselNewRef.value = carouselNew || { items: [] };
      carouselPopularRef.value = carouselPopular || { items: [] };
      carouselBuyBonusRef.value = carouselBuyBonus || { items: [] };
      carouselFrutisGamesRef.value = carouselFrutisGames || { items: [] };
      carouselRetroRef.value = carouselRetro || { items: [] };
      carouselAsianGamesRef.value = carouselAsianGames || { items: [] };
      carouselDrumGamesFirstRef.value = carouselDrumGamesFirst || { items: [] };
      carouselEgyptGamesRef.value = carouselEgyptGames || { items: [] };
      carouselOceanGamesRef.value = carouselOceanGames || { items: [] };
      carouselDrumGamesSecondRef.value = carouselDrumGamesSecond || { items: [] };
      carouselMedievalGamesRef.value = carouselMedievalGames || { items: [] };
      carouselAlienGamesRef.value = carouselAlienGames || { items: [] };
      carouselDiamondGamesRef.value = carouselDiamondGames || { items: [] };

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
