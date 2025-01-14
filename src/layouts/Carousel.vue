<template>
  <div class="game-carousel my-10">
    <div class="carousel-title px-4 flex justify-between items-center mb-6">
      <div class="carousel-title-wrapper flex items-center pr-[10px] space-x-2">
        <img
          :src="data.title.image"
          alt="Carousel Title Image"
          class="h-8 w-8 rounded-full"
        />
        <h1 class="text-lg carousel-title font-bold">{{ data.title.text }}</h1>
      </div>
      <router-link to="/all-games" class="btn btn-nj-primary text-white">
        <span>See All Games</span>
      </router-link>
    </div>

    <div class="carousel carousel-center w-full">
      <div
        class="carousel-item flex-shrink-0 mx-1 rounded-md overflow-hidden"
        v-for="(item, index) in data.items"
        :key="index"
        @click="goToGame(item)"
      >
        <div class="game-carousel-item rounded-md relative cursor-pointer">
          <span class="play">▶</span>
          <img :src="item.image" alt="Game Image" class="rounded-md cursor-pointer" />
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
</style>