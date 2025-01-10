<script setup>
import { reactive, onMounted } from "vue";

// Хранилище для данных Telegram и ошибок
const telegramData = reactive({
  user: null,
  initData: null,
  isInitialized: false,
  errors: [], // Массив для хранения ошибок
  logs: [], // Массив для логов
});

onMounted(() => {
  console.log('Telegram WebApp API:', window.Telegram?.WebApp);
  try {
    // Проверяем наличие Telegram WebApp API
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready(); // Уведомление Telegram, что WebApp готов
      console.log(tg);

      const initDataUnsafe = tg.initDataUnsafe;
      telegramData.logs.push("Telegram WebApp initialized.");
      telegramData.logs.push(JSON.stringify(initDataUnsafe));

      // Проверяем данные пользователя
      if (initDataUnsafe?.user) {
        telegramData.user = initDataUnsafe.user;
        telegramData.logs.push(`User data found: ${JSON.stringify(initDataUnsafe.user)}`);
      } else {
        telegramData.errors.push("No user data available.");
      }

      telegramData.isInitialized = true;
    } else {
      telegramData.errors.push("Telegram WebApp not found. Are you running inside Telegram?");
    }
  } catch (error) {
    telegramData.errors.push(`Error during initialization: ${error.message}`);
  }
});
</script>

<template>
  <div>
    <h1>Welcome to Telegram WebApp</h1>

    <!-- Приветственное сообщение -->
    <p v-if="telegramData.user">
      Hello, {{ telegramData.user.first_name }}!
    </p>
    <p v-else>Loading Telegram data...</p>

    <!-- Вывод ошибок -->
    <div v-if="telegramData.errors.length" class="tw-text-red-500">
      <h2>Errors:</h2>
      <ul>
        <li v-for="(error, index) in telegramData.errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>

    <!-- Вывод  логов -->
    <div v-if="telegramData.logs.length" class="tw-text-blue-500">
      <h2>Logs:</h2>
      <ul>
        <li v-for="(log, index) in telegramData.logs" :key="index">
          {{ log }}
        </li>
      </ul>
    </div>

    <h1 class="tw-text-2xl tw-font-bold tw-text-green-500">Hello, Tailwind!</h1>
    <v-btn variant="tonal"> HelloButton </v-btn>
  </div>
</template>
