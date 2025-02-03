<script setup>
import { computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useCategoryStore } from "@/stores/categoryStore";
import CategoryCarousel from "@/layouts/CategoryCarousel.vue";
import Banner from "@/layouts/Banner.vue";

const router = useRouter();
const categoryStore = useCategoryStore();

const games = computed(() => categoryStore.currentCategoryGames);
const categories = computed(() => categoryStore.categories);

// Обработка изменения маршрута
onMounted(() => {
  // Прокрутить страницу к началу
   window.scrollTo({
    top: 350,
    behavior: "smooth", // Плавная прокрутка (опционально)
  });
  
  const categoryFromRoute = router.currentRoute.value.query.category || "All";
  categoryStore.setCurrentCategory(categoryFromRoute);
});

watch(
  () => router.currentRoute.value.query.category,
  (newCategory) => {
    if (newCategory) {
      categoryStore.setCurrentCategory(newCategory);
    }
  }
);

watch(
  () => games.value,
  (newGames) => {
    console.log("Games updated:", newGames);
  }
);

const filterByCategory = (categoryName) => {
  categoryStore.setCurrentCategory(categoryName);
  router.push({ name: "AllGames", query: { category: categoryName.toLowerCase() } });
};

// Метод для перехода к игре
const goToGame = (game) => {
  if (game?.id) {
    router.push({ name: "SingleGame", params: { id: game.id } });
  } else {
    console.error("Game ID is missing:", game);
  }
};
</script>

<template>
  <div class="all-games min-h-screen" v-auto-animate>
    <!-- Баннер -->
    <Banner />

    <!-- Карусель категорий -->
    <CategoryCarousel
      :data="{ items: categories }"
      @categorySelected="filterByCategory"
    />

    <!-- Заголовок страницы -->
    <h1 class="page-title px-2 text-xl flex items-center">
      <span class="capitalize">{{ categoryStore.currentCategory }}</span> 
      <span class="title px-2 text-lg">({{ games.length }})</span>
    </h1>

    <!-- Игры текущей категории -->
    <div class="all-games-list pb-[50px] pt-[20px] px-2" v-if="games && games.length">
      <div
        v-for="game in games"
        :key="game.id"
        class="game-card bg-nj-card rounded-lg flex flex-col nj-hover-shadow cursor-pointer"
        @click="goToGame(game)"
      >
        <img :src="game.image" :alt="game.title" class="game-image rounded-lg" />
        <!-- <div class="skeleton h-[100%] w-[100%] absolute top-0 left-0 bg-nj-card"></div> -->
        <div class="game-card-body flex-1 flex items-center justify-center">
          <h2 class="title text-sm text-center px-1 py-2">{{ game.title }}</h2>
        </div>
      </div>
    </div>

    <!-- Сообщение, если игр нет -->
    <p v-if="games.length === 0" class="no-games-message">
      No games available in this category.
    </p>

    <!-- Спиннер загрузки -->
    <!-- <IsLoadingBalls v-if="isLoading" /> -->
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
  padding: 40px;
}
.game-image {
  min-height: 100px;
}
.skeleton{
  z-index: -1;
}
</style>