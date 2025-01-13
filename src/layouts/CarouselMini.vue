<template>
  <div class="category-carousel">
    <!-- Элементы карусели -->
    <div class="carousel carousel-center w-full">
      <div
        class="carousel-item w-[25%] flex-shrink-0 mx-1 flex flex-col items-center justify-center gap-1 bg-nj-card rounded-md py-2 px-1"
        v-for="(item, index) in data.items"
        :key="index"
      >
        <div class="game-icon">
          <!-- Проверка: SVG как строка или URL -->
          <div
            class="svg-icon text-white"
            v-if="item.image.includes('<svg')"
            v-html="item.image"
          ></div>
          <img v-else :src="item.image" alt="Game Icon" />
        </div>
        <span class="category-name text-nj-white">{{ item.name }}</span>
        <span class="category-count text-sm text-nj-white-50">
          ({{ item.count }})
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "CategoryCarousel",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    // Компьютед-свойство для данных (если потребуется дополнительная обработка)
    const items = computed(() => props.data.items);

    return {
      items,
    };
  },
};
</script>

<style scoped>
/* Добавьте стили, если требуется */
</style>
