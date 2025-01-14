<template>
  <section v-if="currentGame" class="game-page pt-[85px]">
    <div class="info rounded-md nj-bg-card mx-2 my-10 line text-center">
      <h2 class="text-2xl font-bold mt-[-10px] pb-[20px] px-4">
        Играйте в <span class="title">{{ currentGame.title }}</span> 1000 бесплатно в
        демо-режиме
      </h2>
      <iframe
        :src="currentGame.iframeSrc"
        allow="autoplay *; fullscreen *"
        class="w-full h-screen border-none"
      ></iframe>
      <GameCardFoter />
    </div>
    <!-- Передача объекта CardDetails в компонент DetailsCard -->
    <DetailsCard
      :details="currentGame.cardDetails"
      :title="currentGame.title"
      :description="currentGame.description"
      :image="currentGame.image"
    />
    <TutorialCard
      :image="currentGame.InfoGameCardSingle.image"
      :altText="currentGame.InfoGameCardSingle.altText"
      :title="currentGame.InfoGameCardSingle.title"
      :description="currentGame.InfoGameCardSingle.description"
      :tutorial="currentGame.InfoGameCardSingle.tutorila"
    />
  </section>

  <div v-else>Loading...</div>
</template>

<script setup>
import { useGameStore } from "@/stores/gameStore";
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";
import DetailsCard from "@/components/ui/card/DetailsCard.vue";
import TutorialCard from "@/components/ui/card/TutorialCard.vue";

const gameStore = useGameStore();
const route = useRoute();

const id = computed(() => parseInt(route.params.id, 10));

const currentGame = computed(() => gameStore.currentGame);

onMounted(() => {
  const game = gameStore.allGames.find((g) => g.id === id.value);
  if (game) {
    gameStore.setCurrentGame(game);
  } else {
    console.error("Game not found for ID:", id.value);
  }
});
</script>

<style scoped>
.line {
  padding: 35px 0 0;
}
/* Добавьте стили для страницы */
</style>
