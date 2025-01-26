<script setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useGameStore } from "@/stores/gameStore";
import { useCategoryStore } from "@/stores/categoryStore";
import CategoryCarousel from "@/layouts/CategoryCarousel.vue";
import DetailsCard from "@/components/ui/card/DetailsCard.vue";
import TutorialCard from "@/components/ui/card/TutorialCard.vue";
import IsLoadingBalls from "@/components/ui/IsLoadingBalls.vue";

const router = useRouter();
const gameStore = useGameStore();
const categoryStore = useCategoryStore();

const isLoading = ref(true);
const id = computed(() => parseInt(router.currentRoute.value.params.id, 10));
const currentGame = computed(() => gameStore.currentGame);

// Категории для карусели
const categories = computed(() => categoryStore.categories);

// Метод для обработки выбора категории
const filterByCategory = (categoryName) => {
  router.push({ name: "AllGames", query: { category: categoryName.toLowerCase() } });
};

// Инициализация текущей игры
onMounted(() => {
    // Прокрутить страницу к началу
    window.scrollTo({
    top: 0,
    behavior: "smooth", // Плавная прокрутка (опционально)
  });
  
  const game = gameStore.allGames.find((g) => g.id === id.value);
  if (game) {
    gameStore.setCurrentGame(game);
  } else {
    console.error("Game not found for ID:", id.value);
  }
  isLoading.value = false;
});
</script>

<template>
  <div v-if="isLoading" class="flex justify-center items-center min-h-screen">
    <IsLoadingBalls />
  </div>

  <section v-else class="game-page pt-[85px] min-h-screen" v-auto-animate>
    <div class="info rounded-md nj-bg-card mx-2 my-10 line text-center">
      <h2 class="text-xl font-bold mt-[-10px] pb-[20px] px-4">
        Играйте в <span class="title">{{ currentGame.title }}</span> бесплатно в демо-режиме
      </h2>
      <iframe
        :src="currentGame.iframeSrc"
        allow="autoplay *; fullscreen *"
        class="w-full h-screen border-none"
      ></iframe>
    </div>

    <!-- Карточка деталей игры -->
    <DetailsCard
      :details="currentGame.cardDetails"
      :title="currentGame.title"
      :description="currentGame.description"
      :image="currentGame.image"
    />

    <!-- Обучающая карточка -->
    <TutorialCard
      :image="currentGame.InfoGameCardSingle.image"
      :altText="currentGame.InfoGameCardSingle.altText"
      :title="currentGame.InfoGameCardSingle.title"
      :description="currentGame.InfoGameCardSingle.description"
      :tutorial="currentGame.InfoGameCardSingle.tutorila"
    />

    <!-- Карусель категорий -->
    <CategoryCarousel
      :data="{ items: categories }"
      @categorySelected="filterByCategory"
    />
  </section>
</template>

<style scoped>
.line {
  padding: 35px 0 0;
}
</style>