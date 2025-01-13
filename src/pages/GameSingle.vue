<template>
  <section class="game-page pt-[82.5px] pb-[10px]">
    <iframe
      v-if="iframeSrc"
      :src="iframeSrc"
      allow="autoplay *; fullscreen *"
      class="w-full h-screen border-none"
    ></iframe>

    <h1 class="text-lg font-bold">{{ title }}</h1>
    <p>{{ description }}</p>
  </section>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "GamePage",
  setup() {
    const route = useRoute();

    // Динамическое получение данных из маршрута
    const iframeSrc = computed(() => route.query.iframe || "");
    const title = computed(() => route.query.title || "Default Title");
    const description = computed(() => route.query.description || "Default description");

    return {
      iframeSrc,
      title,
      description,
    };
  },
};
</script>

<style scoped>
/* Добавьте стили для компонента, если необходимо */
</style>
