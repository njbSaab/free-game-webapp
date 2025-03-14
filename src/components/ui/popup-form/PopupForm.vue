<template>
  <div class="popup-wrapper">
    <div class="overlay-popup" @click="handleClose"></div>

    <div
      class="subscribe line popup flex flex-col text-center md:text-start gap-4 items-center rounded-md bg-nj-card my-10 mt-0 relative w-[30%] mx-auto"
    >
      <!-- Иконка закрытия -->
      <span
        class="cursor-pointer icon icon-close btn btn-circle absolute right-[-22px] top-[-24px]"
        @click="handleClose"
      >
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

      <div class="subscribe-form-wrapper flex flex-col gap-2 pb-4">
        <h2 class="fs-25 font-bold text-nj-white py-[10px]">Подписаться</h2>
        <label class="relative subscribe-form-label flex items-center justify-center">
          <input
            type="text"
            placeholder="Email"
            class="w-full bg-nj-card input-info py-3 pl-12 pr-2 rounded-lg"
          />
          <span class="absolute left-2 icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 4.99L4 6zm0 12H4V8l8 5l8-5z"
              />
            </svg>
          </span>
        </label>
        <a class="btn btn-nj-primary fs-16 text-white cursor-pointer"> Подписаться </a>
      </div>
      <div class="form-control">
        <label class="cursor-pointer flex gap-4 label">
          <input
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-info px[10px] py-[0px]"
          />
          <span class="label-text">
            Мне не менее 19 лет, и я могу легально играть в казино.
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

// Эмит события закрытия попапа
const emit = defineEmits(["close"]);

const handleClose = () => {
  emit("close");
};
</script>

<style lang="scss" scoped>
.popup {
  display: block;
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
}
.subscribe {
  padding: 20px 50px;
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
    width: 90%;
    max-height: 50dvh;
  }
}
</style>
