<template>
  <div class="home tw-overflow-x-hidden">
    <Banner />
    <CarouselMini :data="carouselCategoryDataRef" />
    <Carousel :data="carouselNewRef" />
    <Carousel :data="carouselPopularRef" />
    <GameCard :cardData="tryFeeCardRef" />
    <Info />

    <!-- Telegram Debug Information -->
    <div v-if="telegramData.errors.length" class="text-red-500 mt-4">
      <h2>Errors:</h2>
      <ul>
        <li v-for="(error, index) in telegramData.errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>
    <div v-if="telegramData.logs.length" class="text-blue-500 mt-4">
      <h2>Logs:</h2>
      <ul>
        <li v-for="(log, index) in telegramData.logs" :key="index">
          {{ log }}
        </li>
      </ul>
    </div>
    <!-- <div v-if="telegramData.user" class="mt-4">
      <h3>User Information:</h3>
      <p>Name: {{ telegramData.user.first_name }}</p>
      <p>Username: {{ telegramData.user.username }}</p>
    </div> -->
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import Banner from "../layouts/Banner.vue";
import CarouselMini from "../layouts/CarouselMini.vue";
import Carousel from "../layouts/Carousel.vue";
import GameCard from "../components/ui/GameCard.vue";
import Info from "../components/ui/Info.vue";

import { carouselNew } from "../data/new_carousel.js";
import { carouselCategoryData } from "../data/category_carousel.js";
import { carouselPopular } from "../data/popular_carousel.js";
import { tryFeeCard } from "../data/try_free_card.js";

export default {
  name: "Home",
  components: {
    Banner,
    CarouselMini,
    Carousel,
    GameCard,
    Info,
  },
  setup() {
    // Данные каруселей
    const carouselNewRef = ref(carouselNew);
    const carouselCategoryDataRef = ref(carouselCategoryData);
    const carouselPopularRef = ref(carouselPopular);
    const tryFeeCardRef = ref(tryFeeCard);

    // Telegram WebApp API
    const telegramData = reactive({
      user: null,
      initData: null,
      isInitialized: false,
      errors: [],
      logs: [],
    });

    onMounted(() => {
      console.log("Checking Telegram WebApp API availability...");
      console.log(telegramData.user);

      try {
        if (window.Telegram && window.Telegram.WebApp) {
          const tg = window.Telegram.WebApp;

          // Уведомляем Telegram, что WebApp готов
          tg.ready();
          console.log("Telegram WebApp API initialized:", tg);

          const initDataUnsafe = tg.initDataUnsafe;
          telegramData.logs.push("Telegram WebApp initialized successfully.");
          telegramData.logs.push(JSON.stringify(initDataUnsafe));

          // Проверка пользователя
          if (initDataUnsafe?.user) {
            telegramData.user = initDataUnsafe.user;
            telegramData.logs.push(`User data: ${JSON.stringify(initDataUnsafe.user)}`);
          } else {
            telegramData.errors.push("No user data found.");
          }

          telegramData.isInitialized = true;
        } else {
          telegramData.errors.push("Telegram WebApp API is not available. Are you running inside Telegram?");
        }
      } catch (error) {
        telegramData.errors.push(`Initialization error: ${error.message}`);
      }
    });

    return {
      carouselNewRef,
      carouselCategoryDataRef,
      carouselPopularRef,
      tryFeeCardRef,
      telegramData,
    };
  },
};
</script>

<style scoped>
</style>
