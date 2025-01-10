<script setup>
import { reactive, onMounted } from "vue";

const telegramData = reactive({
  user: null,
  initData: null,
  isInitialized: false,
});

onMounted(() => {
  const tg = window.Telegram.WebApp; // Доступ к Telegram WebApp API

  if (tg) {
    tg.ready(); // Уведомить Telegram, что WebApp загружен

    // Получить данные о пользователе
    telegramData.user = tg.initDataUnsafe?.user ?? null;
    telegramData.initData = tg.initData;
    telegramData.isInitialized = true;

    console.log("Telegram WebApp initialized");
    console.log("User data:", telegramData.user);
    console.log("Init data:", telegramData.initData);

    // Пример использования Telegram WebApp API
    tg.MainButton.text = "Submit";
    tg.MainButton.show();
    tg.MainButton.onClick(() => {
      console.log("MainButton clicked");
      tg.MainButton.hide();
    });
  } else {
    console.error("Telegram WebApp not available");
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
