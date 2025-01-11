<script setup>
import { inject } from "vue";

const telegramData = inject("telegramData"); // Получаем данные Telegram через inject
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

    <!-- Вывод логов -->
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
