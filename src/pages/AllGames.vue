<template>
    <div class="all-games min-h-screen" v-auto-animate>
      <Banner />

      <h1 class="page-title px-2 text-xl">All Games <span class="text-nj-white-50">{{ gameLength }}</span> </h1>
  
      <!-- Спиннер отображается, пока идет загрузка -->
      <IsLoadingBalls v-if="isLoading" />
      <!-- Проверяем, есть ли игры -->
      <div class="all-games-list pb-[50px] pt-[20px] px-2" v-else-if="games && games.length">
        <div
          v-for="game in games"
          :key="game.id"
          class="game-card bg-nj-card rounded-lg flex flex-col"
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
  
<script setup>
  import { useRouter } from "vue-router";
  import { useGameStore } from "@/stores/gameStore";
  import Banner from "@/layouts/Banner.vue";
  import IsLoadingBalls from "@/components/ui/IsLoadingBalls.vue"

  // Инициализация роутера и Pinia-хранилища
  const router = useRouter();
  const gameStore = useGameStore();
  const isLoading = ref(true); // Состояние загрузки
  const gameLength = ref(gameStore.allGames.length)
  // Данные для списка игр
  const games = gameStore.allGames;
  const goToGame = (game) => {
    console.log("Navigating to game:", game);
    router.push({ name: "SingleGame", params: { id: game.id } });
  };
  onMounted(() => {
  isLoading.value = true; // Устанавливаем состояние загрузки

  // Эмуляция задержки загрузки (например, 2 секунды)
  setTimeout(() => {
    games.value = gameStore.allGames; // Присваиваем данные локально
    isLoading.value = false; // Скрываем спиннер
  }, 300); // Задержка 2 секунды
});
  // Метод для перехода к конкретной игре

</script>
  
<style scoped>

.all-games-list{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px 10px;
}
</style>