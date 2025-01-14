// Plugins
import { createPinia } from "pinia";
import { registerPlugins } from "@/plugins";
import "@/styles/styles.scss";
import "@/styles/tailwind.css";
import { VueTelegramPlugin } from "vue-tg"; // Импортируем плагин

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Import Router
import router from "./router/index.js"; // Убедитесь, что путь к роутеру правильный

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

console.log("Pinia initialized:", pinia);
console.log("Router initialized:", router);
app.use(VueTelegramPlugin);

registerPlugins(app);

app.mount("#app");
