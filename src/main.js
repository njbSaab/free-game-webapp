// main.js
import { createApp } from "vue";
import App from "./App.vue";
import { registerPlugins } from "@/plugins";
import "./styles/tailwind.css";

const telegramData = {
  user: null,
  initData: null,
  isInitialized: false,
  errors: [], // Для хранения ошибок
  logs: [], // Для хранения логов
};

try {
  if (window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp;

    tg.ready(); // Уведомляем Telegram, что WebApp готов
    telegramData.logs.push("Telegram WebApp API доступен.");
    telegramData.logs.push(JSON.stringify(tg.initDataUnsafe));
    console.log(tg.initDataUnsafe);
    console.log(tg);

    // Сохраняем данные пользователя
    telegramData.user = tg.initDataUnsafe?.user || null;
    telegramData.initData = tg.initDataUnsafe || {};
    telegramData.isInitialized = true;

    if (!telegramData.user) {
      telegramData.errors.push("Нет данных о пользователе.");
    }
  } else {
    telegramData.errors.push("Telegram WebApp API недоступен.");
  }
} catch (error) {
  telegramData.errors.push(`Ошибка инициализации: ${error.message}`);
}

// Передаем Telegram данные в Vue
const app = createApp(App);

app.provide("telegramData", telegramData); // Делаем данные доступными через inject
registerPlugins(app);
app.mount("#app");
