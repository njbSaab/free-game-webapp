<template>
  <nav class="nav mx-2">
    <div
      v-for="(section, index) in sections"
      :key="index"
      class="footer-col mt-2"
    >
      <!-- Заголовок секции -->
      <div class="label-group flex items-center" @click="toggleSection(index)">
        <label
          class="social-networks-title text-sm uppercase text-start block text-nj-white-80 flex items-center cursor-pointer"
        >
          {{ section.title }}
          <svg
            class="transition ease-in-out"
            :class="isOpen(index) ? 'rotate-90' : ''"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#fff"
              stroke-dasharray="10"
              stroke-dashoffset="10"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12l-5 -5M15 12l-5 5"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.3s"
                values="10;0"
              />
            </path>
          </svg>
        </label>
        <span class="footer-line ml-0"></span>
      </div>
      <!-- Список элементов секции -->
      <ul
        class="footer-list flex flex-col gap-2"
        :class="isOpen(index) ? 'list-open' : 'list-closed'"
        v-auto-animate
      >
        <li
          v-for="(item, itemIndex) in section.items"
          :key="itemIndex"
          class="footer-item flex items-center gap-2 text-left"
        >
        <div class="flex w-[30px] h-[30px] flex items-center justify-center text-accent">
          <img class="w-[25px] h-[25px]" :src="item.icon" alt="">
        </div>
          <a href="#" class="footer-link sm flex-1 align-left">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

// Пропсы для секций
const props = defineProps({
  sections: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const openSections = ref([]); // Массив открытых секций

// Проверяет, открыта ли секция
const isOpen = (index) => openSections.value.includes(index);

// Переключает состояние секции
const toggleSection = (index) => {
  if (isOpen(index)) {
    openSections.value = openSections.value.filter((i) => i !== index);
  } else {
    openSections.value.push(index);
  }
};
</script>

<style scoped>
.list-open {
  transition: 0.4s ease-in-out;
  visibility: visible;
  height: 100%;
  opacity: 1;
  padding: 8px 0;
}

.list-closed {
  transition: 0.2s ease-in;
  opacity: 0;
  visibility: hidden;
  height: 0;
  padding-top: 0;
}

</style>