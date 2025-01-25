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
        v-if="carouselLiveRef && carouselLiveRef.items && carouselLiveRef.items.length"
        :data="carouselLiveRef"
      />
      <GameCarousel
        v-if="
          carouselOctoberRef &&
          carouselOctoberRef.items &&
          carouselOctoberRef.items.length
        "
        :data="carouselOctoberRef"
      />
      <GameCarousel
        v-if="carouselRetroRef && carouselRoltRef.items && carouselRoltRef.items.length"
        :data="carouselRetroRef"
      />
      <GameCarousel
        v-if="carouselRoltRef && carouselRoltRef.items && carouselRoltRef.items.length"
        :data="carouselRoltRef"
      />
      <GameCarousel
        v-if="
          carouselWealthRef && carouselWealthRef.items && carouselWealthRef.items.length
        "
        :data="carouselWealthRef"
      />

      <!-- Карточка бесплатных игр -->
      <GameCard v-if="tryCardSecondRef" :cardData="tryCardSecondRef" />

      <GameCarousel
        v-if="
          carouselBlackJackRef &&
          carouselBlackJackRef.items &&
          carouselBlackJackRef.items.length
        "
        :data="carouselBlackJackRef"
      />
      <GameCarousel
        v-if="
          carouselFrutisGamesRef &&
          carouselFrutisGamesRef.items &&
          carouselFrutisGamesRef.items.length
        "
        :data="carouselFrutisGamesRef"
      />
      <GameCarousel
        v-if="
          carouselVideoGamesRef &&
          carouselVideoGamesRef.items &&
          carouselVideoGamesRef.items.length
        "
        :data="carouselVideoGamesRef"
      />
      <GameCarousel
        v-if="carouselBingoRef && carouselBingoRef.items && carouselBingoRef.items.length"
        :data="carouselBingoRef"
      />

      <!-- Карточка бесплатных игр -->
      <GameCard v-if="tryFeeCardRef" :cardData="tryFeeCardRef" />

      <GameCarousel
        v-if="
          carouselFoodGamesRef &&
          carouselFoodGamesRef.items &&
          carouselFoodGamesRef.items.length
        "
        :data="carouselFoodGamesRef"
      />
      <GameCarousel
        v-if="
          carouselAsianGamesRef &&
          carouselAsianGamesRef.items &&
          carouselAsianGamesRef.items.length
        "
        :data="carouselAsianGamesRef"
      />
      <GameCarousel
        v-if="
          carouselDrumGamesFirstRef &&
          carouselDrumGamesFirstRef.items &&
          carouselDrumGamesFirstRef.items.length
        "
        :data="carouselDrumGamesFirstRef"
      />
      <GameCarousel
        v-if="
          carouselDrumGamesSecondRef &&
          carouselDrumGamesSecondRef.items &&
          carouselDrumGamesSecondRef.items.length
        "
        :data="carouselDrumGamesSecondRef"
      />
      <GameCarousel
        v-if="
          carouselEgyptGamesRef &&
          carouselEgyptGamesRef.items &&
          carouselEgyptGamesRef.items.length
        "
        :data="carouselEgyptGamesRef"
      />

      <!-- Карточка бесплатных игр -->
      <GameCard v-if="tryFeeCardRef" :cardData="tryFeeCardRef" />

      <GameCarousel
        v-if="
          carouselOceanGamesRef &&
          carouselOceanGamesRef.items &&
          carouselOceanGamesRef.items.length
        "
        :data="carouselOceanGamesRef"
      />

      <GameCarousel
        v-if="
          carouselAlienGamesRef &&
          carouselAlienGamesRef.items &&
          carouselAlienGamesRef.items.length
        "
        :data="carouselAlienGamesRef"
      />

      <GameCarousel
        v-if="
          carouselMedievalGamesRef &&
          carouselMedievalGamesRef.items &&
          carouselMedievalGamesRef.items.length
        "
        :data="carouselMedievalGamesRef"
      />

      <GameCarousel
        v-if="
          carouselArcadaGamesRef &&
          carouselArcadaGamesRef.items &&
          carouselArcadaGamesRef.items.length
        "
        :data="carouselArcadaGamesRef"
      />

      <GameCarousel
        v-if="
          carouselLovesGamesRef &&
          carouselLovesGamesRef.items &&
          carouselLovesGamesRef.items.length
        "
        :data="carouselLovesGamesRef"
      />

      <GameCarousel
        v-if="
          carouselAztecGamesRef &&
          carouselAztecGamesRef.items &&
          carouselAztecGamesRef.items.length
        "
        :data="carouselAztecGamesRef"
      />

      <GameCarousel
        v-if="
          carouselTechGamesRef &&
          carouselTechGamesRef.items &&
          carouselTechGamesRef.items.length
        "
        :data="carouselTechGamesRef"
      />

      <GameCarousel
        v-if="
          carouselDiamondGamesRef &&
          carouselDiamondGamesRef.items &&
          carouselDiamondGamesRef.items.length
        "
        :data="carouselDiamondGamesRef"
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
import { carouselLive } from "../data/carousels/live_carousel.js";
import { carouselOctober } from "../data/carousels/october_carousel.js";
import { carouselRetro } from "../data/carousels/retro_carousel.js";
import { carouselRolt } from "../data/carousels/rolt_carousel.js";
import { carouselWealth } from "../data/carousels/wealth_carousel.js";
import { carouselBlackJack } from "../data/carousels/black_jack_carousel";
import { carouselFrutisGames } from "../data/carousels/frutis_carousel.js";
import { carouselVideoGames } from "../data/carousels/video_pocker_carousel.js";
import { carouselBingo } from "../data/carousels/bingo_carousel.js";
import { carouselFoodGames } from "../data/carousels/foods_carousel.js";
import { carouselAsianGames } from "../data/carousels/asian_carousel.js";
import { carouselDrumGamesFirst } from "../data/carousels/drum_carousel-1.js";
import { carouselDrumGamesSecond } from "../data/carousels/drum_carousel-2.js";
import { carouselEgyptGames } from "../data/carousels/egypt_carousel.js";
import { carouselOceanGames } from "../data/carousels/ocean_carousel.js";
import { carouselAlienGames } from "../data/carousels/alien_carousel.js";
import { carouselMedievalGames } from "../data/carousels/medieval_carousel.js";
import { carouselArcadaGames } from "../data/carousels/arcada_carousel.js";
import { carouselLovesGames } from "../data/carousels/loves_carousel.js";
import { carouselAztecGames } from "../data/carousels/aztec_carousel.js";
import { carouselTechGames } from "../data/carousels/tech_carousel.js";
import { carouselDiamondGames } from "../data/carousels/diamond_carousel.js";

const router = useRouter();
const categoryStore = useCategoryStore();
const isLoading = ref(true);

const tryFeeCardRef = ref(null);
const tryCardFirstRef = ref(null);
const tryCardSecondRef = ref(null);

const carouselNewRef = ref(null);
const carouselPopularRef = ref(null);
const carouselBuyBonusRef = ref(null);
const carouselLiveRef = ref(null);
const carouselOctoberRef = ref(null);
const carouselRetroRef = ref(null);
const carouselRoltRef = ref(null);
const carouselWealthRef = ref(null);
const carouselBlackJackRef = ref(null);
const carouselFrutisGamesRef = ref(null);
const carouselVideoGamesRef = ref(null);
const carouselBingoRef = ref(null);
const carouselFoodGamesRef = ref(null);
const carouselAsianGamesRef = ref(null);
const carouselDrumGamesFirstRef = ref(null);
const carouselDrumGamesSecondRef = ref(null);
const carouselEgyptGamesRef = ref(null);
const carouselOceanGamesRef = ref(null);
const carouselAlienGamesRef = ref(null);
const carouselMedievalGamesRef = ref(null);
const carouselArcadaGamesRef = ref(null);
const carouselLovesGamesRef = ref(null);
const carouselAztecGamesRef = ref(null);
const carouselTechGamesRef = ref(null);
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
    const games = [...carouselNew.items, ...carouselPopular.items];
    console.log("Combined game list:", games);
    categoryStore.setGames(games);

    setTimeout(() => {
      tryFeeCardRef.value = tryFeeCard || null;
      tryCardFirstRef.value = tryCardFirst || null;
      tryCardSecondRef.value = tryCardSecond || null;

      carouselNewRef.value = carouselNew || { items: [] };
      carouselPopularRef.value = carouselPopular || { items: [] };
      carouselBuyBonusRef.value = carouselBuyBonus || { items: [] };
      carouselLiveRef.value = carouselLive || { items: [] };
      carouselOctoberRef.value = carouselOctober || { items: [] };
      carouselRetroRef.value = carouselRetro || { items: [] };
      carouselRoltRef.value = carouselRolt || { items: [] };
      carouselWealthRef.value = carouselWealth || { items: [] };
      carouselBlackJackRef.value = carouselBlackJack || { items: [] };
      carouselFrutisGamesRef.value = carouselFrutisGames || { items: [] };
      carouselVideoGamesRef.value = carouselVideoGames || { items: [] };
      carouselBingoRef.value = carouselBingo || { items: [] };
      carouselFoodGamesRef.value = carouselFoodGames || { items: [] };
      carouselAsianGamesRef.value = carouselAsianGames || { items: [] };
      carouselDrumGamesFirstRef.value = carouselDrumGamesFirst || { items: [] };
      carouselDrumGamesSecondRef.value = carouselDrumGamesSecond || { items: [] };
      carouselEgyptGamesRef.value = carouselEgyptGames || { items: [] };
      carouselOceanGamesRef.value = carouselOceanGames || { items: [] };
      carouselAlienGamesRef.value = carouselAlienGames || { items: [] };
      carouselMedievalGamesRef.value = carouselMedievalGames || { items: [] };
      carouselArcadaGamesRef.value = carouselArcadaGames || { items: [] };
      carouselLovesGamesRef.value = carouselLovesGames || { items: [] };
      carouselAztecGamesRef.value = carouselAztecGames || { items: [] };
      carouselTechGamesRef.value = carouselTechGames || { items: [] };
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
