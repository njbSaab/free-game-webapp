<template>
  <div class="home" v-auto-animate>
    <Banner />
    <!-- Спиннер отображается, пока идет загрузка -->
    <IsLoadingBalls v-if="isLoading" />

    <!-- Контент отображается, когда загрузка завершена -->
    <div v-else>
      <Carousel
        v-if="carouselNewRef && carouselNewRef.items.length"
        :data="carouselNewRef"
      />
      <Carousel
        v-if="carouselPopularRef && carouselPopularRef.items.length"
        :data="carouselPopularRef"
      />
      <GameCard v-if="tryFeeCardRef" :cardData="tryFeeCardRef" />
      <Info />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Banner from "../layouts/Banner.vue";
import Carousel from "../layouts/Carousel.vue";
import GameCard from "../components/ui/card/InfoGameCard.vue";
import Info from "../components/ui/Info.vue";
import IsLoadingBalls from "../components/ui/IsLoadingBalls.vue";

import { carouselNew } from "../data/new_carousel.js";
import { carouselPopular } from "../data/popular_carousel.js";
import { tryFeeCard } from "../data/try_free_card.js";

// Загрузка данных с микропаузой
const carouselNewRef = ref(null);
const carouselPopularRef = ref(null);
const tryFeeCardRef = ref(null);
const isLoading = ref(true);

onMounted(() => {
  // Искусственная задержка для отображения спиннера
  setTimeout(() => {
    carouselNewRef.value = carouselNew;
    carouselPopularRef.value = carouselPopular;
    tryFeeCardRef.value = tryFeeCard;
    isLoading.value = false; // Убираем спиннер
  }, 500); // 500 мс задержки
});
</script>

<style scoped>
/* Добавьте стили, если требуется */
</style>