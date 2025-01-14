<template>
  <div class="category-carousel">
    <!-- Проверка на наличие элементов -->
    <div v-if="items.length" class="carousel carousel-center w-full">
      <div
        class="carousel-item w-[25%] flex-shrink-0 mx-1 flex flex-col items-center justify-center gap-1 bg-nj-card rounded-md py-2 px-1"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="game-icon">
          <!-- Проверка: SVG как строка или URL -->
          <div
            class="svg-icon text-white"
            v-if="item.image && item.image.includes('<svg')"
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
    <p v-else class="text-center text-nj-white">No categories available</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

// Определение пропсов через defineProps
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

// Компьютед-свойство для обработки данных
const items = computed(() => props.data?.items || []);
</script>

<style scoped>
/* Добавьте стили, если требуется */
</style>