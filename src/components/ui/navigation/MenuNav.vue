<template>
    <nav class="nav mx-2">
      <!-- Первый список -->
      <div class="footer-col mt-2">
        <div class="label-group flex items-center" @click="toggleList('firstList')">
          <label
            class="social-networks-title text-sm uppercase text-start block text-nj-white-80 flex items-center cursor-pointer"
          >
            руководство по азартным играм
            <svg
              class="transition ease-in-out"
              :class="isFirstListOpen ? 'rotate-90' : ''"
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
        <ul
          class="footer-list flex flex-col gap-2"
          :class="isFirstListOpen ? 'list-open' : 'list-closed'"
          v-auto-animate
        >
          <li
            v-for="item in firstListItems"
            :key="item.text"
            class="footer-item flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 15 15"
              :class="item.iconClass"
            >
              <path
                fill="currentColor"
                d="M8.5 10A2.5 2.5 0 0 0 13 8.5c0-.564-.194-1.079-.509-1.497L12.5 7l-5-6l-5 6l.009.003A2.48 2.48 0 0 0 2 8.5A2.5 2.5 0 0 0 6.5 10l.5-.666V11.5C7 13 4.5 13 4.5 13a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1S8 13 8 11.5V9.334z"
              />
            </svg>
            <a href="#" class="footer-link sm">{{ item.text }}</a>
          </li>
        </ul>
      </div>
  
      <!-- Второй список -->
      <div class="footer-col mt-2">
        <div class="label-group flex items-center" @click="toggleList('secondList')">
          <label
            class="social-networks-title text-sm uppercase text-start block text-nj-white-80 flex items-center cursor-pointer"           
          >
            Категории игр
            <svg
              class="transition ease-in-out"
              :class="isSecondListOpen ? 'rotate-90' : ''"
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
        <ul
          class="footer-list flex flex-col gap-2"
          :class="isSecondListOpen ? 'list-open' : 'list-closed'"
          v-auto-animate
        >
          <li
            v-for="item in secondListItems"
            :key="item.text"
            class="footer-item flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 15 15"
              :class="item.iconClass"
            >
              <path
                fill="currentColor"
                d="M8.5 10A2.5 2.5 0 0 0 13 8.5c0-.564-.194-1.079-.509-1.497L12.5 7l-5-6l-5 6l.009.003A2.48 2.48 0 0 0 2 8.5A2.5 2.5 0 0 0 6.5 10l.5-.666V11.5C7 13 4.5 13 4.5 13a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1S8 13 8 11.5V9.334z"
              />
            </svg>
            <a href="#" class="footer-link sm">{{ item.text }}</a>
          </li>
        </ul>
      </div>
    </nav>
</template>
<script setup>
import { ref } from "vue";

const isFirstListOpen = ref(false);
const isSecondListOpen = ref(false);
// Списки элементов
const firstListItems = ref([
  { text: "Как начать играть", iconClass: "text-accent" },
  { text: "Руководство", iconClass: "text-primary" },
]);

const secondListItems = ref([
  { text: "Казино", iconClass: "text-success" },
  { text: "Спорт", iconClass: "text-secondary" },
]);

const toggleList = (list) => {
  if (list === "firstList") {
    isFirstListOpen.value = !isFirstListOpen.value;
  } else if (list === "secondList") {
    isSecondListOpen.value = !isSecondListOpen.value;
  }
};
</script>
<style scoped>
.list-open {
    transition: .4s ease-in-out;
    visibility: visible;
    height: 100%;
    opacity: 1;
    padding: 5px 0;
}

.list-closed {
  transition: .2s ease-in;
  opacity: 0;
  padding-top: 0px;
  /* transform: translateY(-1000px); */
  visibility: hidden;
  height: 0;
}

</style>