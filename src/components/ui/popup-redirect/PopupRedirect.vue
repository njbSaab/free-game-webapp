<template>
  <div v-if="isVisible" class="popup-wrapper">
    <div class="overlay-popup" @click="closePopup"></div>

    <div
      class="card-request-game popup flex flex-col md:flex-row text-center md:text-start gap-4 items-center rounded-md p-4 bg-nj-card my-10 mt-0 mx-2"
    >
      <!-- Иконка закрытия -->
      <span class="cursor-pointer icon icon-close btn btn-circle" @click="closePopup">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-dasharray="16"
            stroke-dashoffset="16"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M7 7l10 10">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.4s"
                values="16;0"
              />
            </path>
            <path d="M17 7l-10 10">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.4s"
                dur="0.4s"
                values="16;0"
              />
            </path>
          </g>
        </svg>
      </span>

      <!-- Изображение -->
      <span class="cursor-pointer" v-if="popupData?.image">
        <picture>
          <source :srcset="popupData.image.webp" type="image/webp" />
          <img
            :src="popupData.image.default"
            :alt="popupData.altText || 'Image not available'"
            class="rounded-md"
          />
        </picture>
      </span>

      <!-- Информация -->
      <div class="info flex flex-col">
        <h3 class="text-xl font-bold pb-[10px]">{{ popupData?.title || "No Title" }}</h3>
        <p class="text-sm text-gray-400">
          {{ popupData?.description || "No Description" }}
        </p>
      </div>

      <!-- Кнопка -->
      <button
        class="btn btn-nj-primary mb-2 md:mt-0 w-2/3 mx-auto"
        v-if="popupData?.buttonText"
      >
        {{ popupData.buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { popupRedirectContents } from "@/data/popup/popup-redirect-data"; // Импорт массива контента

const isVisible = ref(false);
const popupData = ref(popupRedirectContents[0]); // Текущий контент попапа
let popupTimer = null;
let contentIndex = 0; // Индекс текущего контента

// Функция смены контента
const changePopupContent = () => {
  contentIndex = (contentIndex + 1) % popupRedirectContents.length;
  popupData.value = popupRedirectContents[contentIndex];
};

// Функция для открытия попапа
const showPopup = () => {
  isVisible.value = true;
};

// Функция для закрытия попапа
const closePopup = () => {
  isVisible.value = false;
  resetPopupTimer();
};

// Функция для сброса и повторного запуска таймера
const resetPopupTimer = () => {
  if (popupTimer) {
    clearTimeout(popupTimer);
  }
  changePopupContent(); // Меняем контент перед повторным запуском
  popupTimer = setTimeout(showPopup, 180000); // 3 минуты (180000 мс)
};

// Инициализация таймера при монтировании
onMounted(() => {
  resetPopupTimer();
});

// Очищаем таймер при размонтировании компонента
onUnmounted(() => {
  clearTimeout(popupTimer);
});
</script>

<style lang="scss" scoped>
.popup {
  display: block;
  position: fixed;
  top: 55%;
  left: 47.5%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  width: 35vw;
  max-height: 70dvh;
}
.popup img {
  width: 100%;
  max-width: 500px;
  object-fit: cover;
  height: auto;
  object-position: top;
  transform: translateY(-25%);
  margin: 0 auto;
}
.info {
  margin-top: -55px;
  padding-bottom: 20px;
}

.overlay-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(9, 15, 30, 0.8);
  z-index: 9999;
  backdrop-filter: blur(2px);
}
.popup .icon-close {
  position: absolute;
  top: -11.5px;
  right: -11.5px;
  cursor: pointer;
  min-height: 2rem;
  height: 2rem;
  width: 2rem;
  backdrop-filter: blur(5px);
  transition: 0.3s ease-in-out;
}
.popup .icon-close:active,
.popup .icon-close:focus {
  rotate: 90deg;
  transition: 0.3s ease-in-out;
}
@media screen and (max-width: 768px) {
  .popup {
    width: 80vw;
    max-height: 50dvh;
  }
}
</style>
