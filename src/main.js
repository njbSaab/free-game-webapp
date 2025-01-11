// Plugins
import { registerPlugins } from "@/plugins";
import "./styles/tailwind.css";
import { VueTelegramPlugin } from "vue-tg"; // Импортируем плагин

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

const app = createApp(App);

app.use(VueTelegramPlugin);

registerPlugins(app);

app.mount("#app");
