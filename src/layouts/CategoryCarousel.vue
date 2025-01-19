<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useCategoryStore } from "@/stores/categoryStore";

// Используем Pinia и маршрутизатор
const router = useRouter();
const categoryStore = useCategoryStore();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

// Список категорий
const items = computed(() => props.data?.items || []);

// Метод обработки выбора категории
const selectCategory = (categoryName) => {
  console.log("Selected category:", categoryName); // Лог выбранной категории
  categoryStore.setCurrentCategory(categoryName); // Устанавливаем категорию в Pinia
  console.log("Current category in Pinia:", categoryStore.currentCategory);

  // Переход на страницу всех игр
  router.push({ name: "AllGames", query: { category: categoryName.toLowerCase() } });
};
</script>

<template>
  <div class="category-carousel my-4" v-auto-animate>
    <!-- Проверка на наличие элементов -->
    <div v-if="items.length" class="carousel carousel-center w-full py-[15px]">
      <div
        class="carousel-item w-[25%] flex-shrink-0 mx-1 flex flex-col items-center justify-center gap-1 bg-nj-card rounded-md py-2 px-1 nj-hover-shadow nj-hover-scale cursor-pointer"
        v-for="(item, index) in items"
        :key="index"
        @click="selectCategory(item.name)"
      >
        <div class="game-icon">
          <!-- SVG или URL -->
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

<style scoped>
.carousel-item {
  cursor: pointer;
  transition: transform 0.3s ease;
}
</style>