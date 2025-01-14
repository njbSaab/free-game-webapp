<template>
  <div class="home tw-overflow-x-hidden">
    <Banner />
    <CarouselMini
      v-if="carouselCategoryDataRef && carouselCategoryDataRef.items.length"
      :data="carouselCategoryDataRef"
    />
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
</template>

<script setup>
import { ref } from "vue";
import Banner from "../layouts/Banner.vue";
import CarouselMini from "../layouts/CarouselMini.vue";
import Carousel from "../layouts/Carousel.vue";
import GameCard from "../components/ui/card/InfoGameCard.vue";
import Info from "../components/ui/Info.vue";

import { carouselNew } from "../data/new_carousel.js";
import { carouselCategoryData } from "../data/category_carousel.js";
import { carouselPopular } from "../data/popular_carousel.js";
import { tryFeeCard } from "../data/try_free_card.js";

const carouselNewRef = ref(carouselNew);
const carouselCategoryDataRef = ref(carouselCategoryData);
const carouselPopularRef = ref(carouselPopular);
const tryFeeCardRef = ref(tryFeeCard);
</script>
<style scoped>
/* Добавьте стили, если требуется */
</style>
