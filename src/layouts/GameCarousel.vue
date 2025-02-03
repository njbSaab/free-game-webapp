<template>
  <div class="game-carousel my-[20px]" v-auto-animate>
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

    <div class="carousel carousel-center w-full py-[20px]">
      <div
        class="carousel-item nj-hover-shadow flex-shrink-0 mx-1 rounded-md overflow-hidden"
        v-for="(item, index) in data.items"
        :key="index"
        @click="goToGame(item)"
      >
        <div class="game-carousel-item rounded-md relative cursor-pointer flex flex-col">
          <div class="image-wrapper rounded-md relative cursor-pointer">
            <span class="play">
             <img src="../assets/play.png" alt=""> 
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useGameStore } from "@/stores/gameStore";

// Получение пропсов
defineProps({
  data: {
    type: Object,
    required: true,
  },
});

// Маршрутизатор и состояние игры
const router = useRouter();
const gameStore = useGameStore();

// Обработчик перехода к игре
const goToGame = (item) => {
  console.log("Navigating to game:", item);
  if (!item.id) {
    console.error("Invalid game item, missing ID:", item);
    return;
  }

  router.push({ name: "SingleGame", params: { id: item.id } });
};
</script>

<style scoped>
/* Добавьте стили для оформления */
.game-carousel-item {
  transition: 0.1s ease-in-out;
}
.game-carousel-item:hover {
  scale: 1.02;
  transition: 0.3s ease-in-out;
}
</style>
