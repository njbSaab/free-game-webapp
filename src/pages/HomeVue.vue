<script setup>
import { reactive, onMounted } from "vue";

const telegramData = reactive({
  user: null,
  initData: null,
  isInitialized: false,
});

onMounted(() => {
  if (window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready(); // Уведомление Telegram, что WebApp готов

    const initDataUnsafe = tg.initDataUnsafe;
    console.log("Telegram WebApp initialized:", initDataUnsafe);

    // Проверка наличия данных о пользователе
    if (initDataUnsafe?.user) {
      telegramData.user = initDataUnsafe.user;
    } else {
      console.warn("No user data available.");
    }

    telegramData.isInitialized = true;
  } else {
    console.error("Telegram WebApp not found. Are you running inside Telegram?");
  }
});
</script>

<template>
  <div>
    <h1>Welcome to Telegram WebApp</h1>
    <p v-if="telegramData.user">
      Hello, {{ telegramData.user.first_name }}!
    </p>
    <p v-else>Loading Telegram data...</p>
    <h1 class="tw-text-2xl tw-font-bold tw-text-green-500">Hello, Tailwind!</h1>
    <v-btn variant="tonal"> HelloButton </v-btn>
  </div>
</template>
