<template>
  <div
    class="tutorial-card card-request-game flex flex-col md:flex-row text-center md:text-start gap-4 items-center rounded-md p-4 rounded-md bg-nj-card my-5 mx-2"
  >
    <!-- Изображение -->
        <img :src="image.webp || image.default" :alt="altText" class="info-image" />
    <!-- Заголовок -->
    <h3 class="info-title fs-25 font-bold text-nj-white">{{ title }}</h3>

    <!-- Описание -->
    <p class="info-description text-sm text-nj-white-50">{{ description }}</p>
    <!-- Руководство -->
    <p class="info-description text-sm text-nj-white-50">{{ tutorial }}</p>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: Object,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tutorial: {
    type: String,
    required: false, // Если этот пропс необязательный
  },
});
</script>

<style scoped></style>
