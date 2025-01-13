# Pages

Vue components created in this folder will automatically be converted to navigatable routes.

Full documentation for this feature can be found in the Official [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) repository.

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
 
</template>
