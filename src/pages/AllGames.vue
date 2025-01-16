<script setup>
import { useRouter, useRoute } from "vue-router";
import { useCategoryStore } from "@/stores/categoryStore";
import { useGameStore } from "@/stores/gameStore";
import Banner from "@/layouts/Banner.vue";
import IsLoadingBalls from "@/components/ui/IsLoadingBalls.vue";
import CategoryCarousel from "@/layouts/CarouselMini.vue";

const router = useRouter();
const route = useRoute();
const categoryStore = useCategoryStore();
const gameStore = useGameStore();
const isLoading = ref(true);

// Загрузка игр в хранилище категорий
onMounted(() => {
  isLoading.value = true;
  categoryStore.setGames(gameStore.allGames); // Загружаем игры в категории
  setTimeout(() => {
    isLoading.value = false;
  }, 300);
});

// Обработчик смены категории
const filterByCategory = (categoryName) => {
  categoryStore.setCurrentCategory(categoryName);
  router.push({
    name: "AllGames",
    query: { category: categoryName === "All" ? undefined : categoryName },
  });
};

// Синхронизация текущей категории из URL
watch(
  () => route.query.category,
  (newCategory) => {
    categoryStore.setCurrentCategory(newCategory || "All");
  }
);

// Получение отфильтрованных игр
const filteredGames = computed(() => categoryStore.filteredGames);

// Метод перехода к конкретной игре
const goToGame = (game) => {
  router.push({ name: "SingleGame", params: { id: game.id } });
};
</script>

<template>
  <div class="all-games min-h-screen" v-auto-animate>
    <Banner />

    <!-- Фильтры категорий -->
    <div class="filters px-2 py-4">
      <CategoryCarousel
        :data="{ items: categoryStore.categories }"
        @categorySelected="filterByCategory"
      />
    </div>

    <h1 class="page-title px-2 text-xl">
      All Games <span class="text-nj-white-50">{{ filteredGames.length }}</span>
    </h1>

    <!-- Спиннер отображается, пока идет загрузка -->
    <IsLoadingBalls v-if="isLoading" />

    <!-- Проверяем, есть ли игры -->
    <div
      class="all-games-list pb-[50px] pt-[20px] px-2"
      v-else-if="filteredGames.length"
    >
      <div
        v-for="game in filteredGames"
        :key="game.id"
        class="game-card bg-nj-card rounded-lg flex flex-col nj-hover-shadow cursor-pointer"
        @click="goToGame(game)"
      >
        <img :src="game.image" :alt="game.title" class="game-image rounded-lg" />
        <div class="game-card-boy flex-1 flex items-center justify-center">
          <h2 class="title text-sm text-center px-1 py-2">{{ game.title }}</h2>
        </div>
      </div>
    </div>

    <!-- Сообщение, если игр нет -->
    <p v-else class="no-games-message">No games available to display.</p>
  </div>
</template>

<style scoped>
.all-games-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px 10px;
}

.no-games-message {
  text-align: center;
  color: #999;
}
</style>