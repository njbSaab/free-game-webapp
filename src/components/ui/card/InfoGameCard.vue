<template>
<div class="container">
  <div
    class="card-request-game flex flex-col md:flex-row md:justify-evenly text-center md:text-start items-center rounded-md p-2 lg:px-4 lg:py-[30px] bg-nj-card my-10 mt-0 mx-2"
  >
    <span class="cursor-pointer" v-if="cardData?.image">
      <picture class="flex items-center justify-center">
        <source :srcset="cardData.image.webp" type="image/webp" />
        <img
          :src="cardData.image.default"
          :alt="cardData.altText || 'Image not available'"
          class="rounded-md"
        />
      </picture>
    </span>
    <div class="info flex flex-col gap-[10px] lg:flex-0 lg:w-[55%]">
      <h3 class="text-xl font-bold title">{{ cardData?.title || 'No Title' }}</h3>
      <p class="text-sm lg:text-lg text-gray-400">
        {{ cardData?.description || 'No Description' }}
      </p>
      <button
        class="btn btn-nj-primary mb-2 w-2/3 mx-auto mt-2"
        @click="onButtonClick"
        v-if="cardData?.buttonText"
      >
        {{ cardData.buttonText }}
      </button>
    </div>
  </div>
</div>

</template>

<script setup>
const { cardData } = defineProps({
  cardData: {
    type: Object,
    default: () => ({}),
    required: true,
  },
});
const emit = defineEmits(['openPopup']);

const onButtonClick = () => {
  console.log("Button clicked:", cardData?.title || "Unknown Title");
  emit('openPopup'); // Передаём событие родительскому компоненту
};
</script>

<style scoped>
/* Добавьте стили для карточки */
</style>