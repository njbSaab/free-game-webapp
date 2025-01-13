<template>
  <div class="card-request-game flex flex-col md:flex-row text-center md:text-start gap-4 items-center rounded-md p-4 bg-nj-card my-10 mx-2">
    <span class="cursor-pointer">
      <picture>
        <source :srcset="cardData.image.webp" type="image/webp" />
        <img
          :src="cardData.image.default"
          :alt="cardData.altText"
          class="rounded-md"
        />
      </picture>
    </span>
    <div class="flex flex-col gap-2">
      <h2 class="fs-25 font-bold text-nj-white">{{ cardData.title }}</h2>
      <p class="description text-sm text-nj-white-50">{{ cardData.description }}</p>
      <a
        class="btn btn-nj-primary fs-16 text-white cursor-pointer"
      >
        <span class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        </span>
        {{ cardData.buttonText }}
      </a>
    </div>
  </div>
</template>

<script>
import { toRefs } from "vue";

export default {
  name: "CardRequestGame",
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    // Деструктуризация пропсов для более удобного использования
    const { cardData } = toRefs(props);

    return {
      cardData,
    };
  },
};
</script>

<style scoped>
/* Добавьте стили, если нужно */
</style>
