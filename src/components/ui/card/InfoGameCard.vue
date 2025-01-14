<template>
  <div
    class="card-request-game flex flex-col md:flex-row text-center md:text-start gap-4 items-center rounded-md p-4 bg-nj-card my-10 mx-2"
  >
    <span class="cursor-pointer" v-if="cardData?.image">
      <picture>
        <source :srcset="cardData.image.webp" type="image/webp" />
        <img
          :src="cardData.image.default"
          :alt="cardData.altText || 'Image not available'"
          class="rounded-md"
        />
      </picture>
    </span>
    <div class="info flex flex-col">
      <h3 class="text-xl font-bold">{{ cardData?.title || 'No Title' }}</h3>
      <p class="text-sm text-gray-500">{{ cardData?.description || 'No Description' }}</p>
    </div>
    <button
      class="btn btn-primary mt-4 md:mt-0"
      @click="onButtonClick"
      v-if="cardData?.buttonText"
    >
      {{ cardData.buttonText }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  cardData: {
    type: Object,
    default: () => ({}),
    required: true,
  },
});

const onButtonClick = () => {
  console.log("Button clicked:", cardData?.title || "Unknown Title");
};
</script>

<style scoped>
/* Добавьте стили для карточки */
</style>