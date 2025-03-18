<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useCategoryStore } from "@/stores/categoryStore";
import "vue3-carousel/carousel.css"; // Импорт стилей vue3-carousel
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

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

// Конфигурация карусели
const carouselConfig = {
  itemsToShow: 4, // Мобильные: 2 элемента
  wrapAround: true,
  snapAlign: "end",
  breakpoints: {
    768: {
      wrapAround: true,
      itemsToShow: 6, // Средние экраны: 4 элемента
      snapAlign: "end",
    },
    1024: {
      wrapAround: true,
      itemsToShow: 8, // Большие экраны: 8 элементов
      snapAlign: "end",
      gap: 12,
      
    },
  },
};

// Метод обработки выбора категории
const selectCategory = (categoryName) => {
  console.log("Selected category:", categoryName);
  categoryStore.setCurrentCategory(categoryName);
  console.log("Current category in Pinia:", categoryStore.currentCategory);
  router.push({ name: "AllGames", query: { category: categoryName.toLowerCase() } });
};
</script>
<template>
  <div class="category-carousel my-4" v-auto-animate>
    <!-- Проверка на наличие элементов -->
    <div v-if="items.length" class="w-full py-[15px]">
      <Carousel v-bind="carouselConfig" v-auto-animate>
        <Slide v-for="(item, index) in items" :key="index">
          <div
            class="carousel__item flex-shrink-0 flex flex-col items-center justify-center gap-1 bg-nj-card rounded-md py-4 px-1 nj-hover-shadow cursor-pointer v-auto-animate"
            @click="selectCategory(item.name)"
          >
            <div class="game-icon">
              <!-- SVG или URL -->
              <div
                class="svg-icon text-white v-auto-animate"
                v-if="item.image && item.image.includes('<svg')"
                v-html="item.image"
              ></div>
              <img v-else :src="item.image" :alt="`${item.name} Icon`" />
            </div>
            <span class="category-name text-nj-white">{{ item.name }}</span>
            <span class="category-count text-sm text-nj-white-50">
              ({{ item.count }})
            </span>
          </div>
        </Slide>

        <!-- Навигация и пагинация -->
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
    <p v-else class="text-center text-nj-white">No categories available</p>
  </div>
</template>

<style scoped>
.carousel {
  width: 100%;
}
.category-carousel {
  width: 100%;
}
.carousel__item {
  width: 100%; /* Полная ширина внутри слайда */
  height: 100%; /* Высота подстраивается под контент */
  transition: transform 0.3s ease; /* Плавное масштабирование */
  width: 100%;
  box-sizing: border-box;
}

/* .carousel__slide {
  width: 11.8% !important;
} */

/* Стили для пагинации */
.carousel__pagination {
  margin-top: 20px;
}

.carousel__pagination-button {
  background-color: #ccc;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 4px;
}

</style>
