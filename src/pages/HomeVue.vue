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
  console.log("Checking Telegram WebApp API availability...");
  try {
    // Проверяем наличие Telegram WebApp API
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;

      // Уведомление Telegram, что WebApp готов
      tg.ready();
      console.log("Telegram WebApp API initialized:", tg);

      // Получение данных initDataUnsafe
      const initDataUnsafe = tg.initDataUnsafe;
      telegramData.logs.push("Telegram WebApp initialized successfully.");
      telegramData.logs.push(JSON.stringify(initDataUnsafe));
      console.log("Telegram WebApp initialized successfully with data:", initDataUnsafe);
      // Проверка данных пользователя
      if (initDataUnsafe?.user) {
        telegramData.user = initDataUnsafe.user;
        telegramData.logs.push(`User data: ${JSON.stringify(initDataUnsafe.user)}`);
        console.log("User data:", initDataUnsafe.user);
      } else {
        telegramData.errors.push("No user data found.");
      }

      // Отмечаем, что инициализация завершена
      telegramData.isInitialized = true;
    } else {
      telegramData.errors.push("Telegram WebApp API is not available. Are you running inside Telegram?");
    }
  } catch (error) {
    telegramData.errors.push(`Initialization error: ${error.message}`);
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
    <p v-else-if="!telegramData.isInitialized">Initializing Telegram WebApp...</p>
    <p v-else>No user data available.</p>

    <!-- Вывод ошибок -->
    <div v-if="telegramData.errors.length" class="tw-text-red-500 mt-4">
      <h2>Errors:</h2>
      <ul>
        <li v-for="(error, index) in telegramData.errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>

    <!-- Вывод логов -->
    <div v-if="telegramData.logs.length" class="tw-text-blue-500 mt-4">
      <h2>Logs:</h2>
      <ul>
        <li v-for="(log, index) in telegramData.logs" :key="index">
          {{ log }}
        </li>
      </ul>
    </div>

    <!-- Tailwind пример -->
    <h1 class="tw-text-2xl tw-font-bold tw-text-green-500 mt-6">Hello, Tailwind!</h1>
    <v-btn variant="tonal"> Hello Button </v-btn>
  </div>
</template>
