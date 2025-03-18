<template>
  <div class="game-carousel my-[20px]" v-auto-animate>
    <!-- Заголовок и кнопка "See All Games" -->
    <div class="carousel-title px-2 flex justify-between items-center">
      <div class="carousel-title-wrapper flex items-center pr-[10px] space-x-2">
        <img :src="data.title.image" alt="Carousel Title Image" class="h-8 w-8" />
        <h1 class="text-lg carousel-title font-bold">{{ data.title.text }}</h1>
      </div>
      <router-link
        :to="{ name: 'AllGames', query: { category: data.title.text.toLowerCase() } }"
        class="btn btn-nj-primary text-white"
      >
        <span>See All Games</span>
      </router-link>
    </div>

    <!-- Сам слайдер -->
    <Carousel v-bind="carouselConfig" v-auto-animate>
      <!-- Каждый item внутри Slide -->
      <Slide
        v-for="(item, index) in data.items"
        :key="index"
        class="nj-hover-shadow flex-shrink-0 mx-1 rounded-md overflow-hidden lg:max-w-[292px]"
        @click="goToGame(item)"
      >
        <div class="game-carousel-item rounded-md relative cursor-pointer flex flex-col">
          <div class="image-wrapper rounded-md relative cursor-pointer">
            <span class="play">
              <img
                src="../assets/play.png"
                class="transition-all ease-in"
                :class="item.id === clickedItemId ? 'skew' : ''"
                alt=""
              />
            </span>
            <img
              :src="item.image"
              alt="Game Image"
              class="rounded-md cursor-pointer min-h-[150px]"
            />
          </div>
          <h3
            class="title text-xl text-center px-2 flex-1 flex items-center justify-center pb-1 my-[10px]"
          >
            {{ item.title }}
          </h3>
        </div>
      </Slide>

      <!-- Дополнительные элементы управления (стрелки, пагинация) -->
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useGameStore } from "@/stores/gameStore";

// Импорт vue3-carousel
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const gameStore = useGameStore();

// Переменная для хранения id нажатого элемента (визуальный эффект)
const clickedItemId = ref(null);

// Метод перехода к игре
const goToGame = (item) => {
  console.log("Navigating to game:", item);
  clickedItemId.value = item.id;

  if (!item.id) {
    console.error("Invalid game item, missing ID:", item);
    return;
  }

  // Небольшая задержка для анимации
  setTimeout(() => {
    router.push({ name: "SingleGame", params: { id: item.id } });
    clickedItemId.value = null;
  }, 400);
};

// Конфигурация карусели
const carouselConfig = {
  // По умолчанию (мобильные экраны)
  itemsToShow: 2,
  wrapAround: true,
  snapAlign: "start",
  // Настройки для разных брейкпоинтов
  breakpoints: {
    768: {
      itemsToShow: 3, // средние экраны
      snapAlign: "start",
      wrapAround: true,
      itemsToScroll: 1, // Прокручивать по 1 элементу
    },
    1024: {
      itemsToShow: 4, // большие экраны
      snapAlign: "start",
      gap: 0,
      wrapAround: true,
      itemsToScroll: 1, // Прокручивать по 1 элементу
    },
  },
};
</script>

<style scoped>
.game-carousel-item {
  transition: 0.1s ease-in-out;
}
.carousel__prev {
  position: relative;
}
.carousel__prev::after {
  position: absolute;
  content: "";
  background-image: url(../assets/play.png);
  width: 100%;
  max-width: 120px;
}
.game-carousel-item:hover {
  scale: 1.02;
  transition: 0.3s ease-in-out;
}
/* Эффект для выбранного элемента (при клике) */
.skew {
  transform: translateX(40vw) rotate(90deg);
  transition: 0.5s ease-in-out;
}
.carousel__viewport {
  margin: 40px 0;
  padding: 12px 0;
}
/* Можно добавить стили для пагинации, стрелок, если нужно */
.carousel__pagination-button {
  background-color: #ccc;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 4px;
}
.carousel__pagination-button--active {
  background-color: #007bff;
}
.carousel__slide {
  width: fit-content !important;
}
@media screen and (max-width: 500px) {
  .carousel__slide {
  width: 48% !important;
}
}
</style>
