<template>
    <div class="all-games">
      <h1 class="page-title">All Games</h1>
  
      <!-- Проверяем, есть ли игры -->
      <div v-if="games && games.length">
        <div
          v-for="game in games"
          :key="game.id"
          class="game-card"
          @click="goToGame(game)"
        >
          <img :src="game.image" :alt="game.title" class="game-image" />
          <h2>{{ game.title }}</h2>
          <p>{{ game.description }}</p>
        </div>
      </div>
  
      <!-- Сообщение, если игр нет -->
      <p v-else class="no-games-message">No games available to display.</p>
    </div>
</template>
  
<script setup>
  import { useRouter } from "vue-router";
  import { useGameStore } from "@/stores/gameStore";
  
  // Инициализация роутера и Pinia-хранилища
  const router = useRouter();
  const gameStore = useGameStore();
  
  // Данные для списка игр
  const games = gameStore.allGames;
  
  // Метод для перехода к конкретной игре
  const goToGame = (game) => {
    console.log("Navigating to game:", game);
    router.push({ name: "SingleGame", params: { id: game.id } });
  };
</script>
  
<style scoped>
  .all-games {
    padding: 16px;
  }
  .game-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .game-card:hover {
    transform: scale(1.05);
  }
  .game-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .no-games-message {
    text-align: center;
    color: #888;
  }
</style>