<template>
  <div class="game-carousel my-10">
    <div class="carousel-title px-4 flex justify-between items-center mb-6">
      <div class="carousel-title-wrapper flex items-center pr-[10px] space-x-2">
        <img
          :src="data.title.image"
          alt="Carousel Title Image"
          class="h-8 w-8 rounded-full"
        />
        <h1 class="text-lg carousel-title font-bold">{{ data.title.text }}</h1>
      </div>
      <router-link to="/all-slots" class="btn btn-nj-primary text-white">
        <span class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 18L7 18L7 6L9 6L9 18M15 6L17 6L17 18L15 18L15 6"><animate fill="freeze" attributeName="d" dur="0.6s" keyTimes="0;0.66;1" values="M9 18L7 18L7 6L9 6L9 18M15 6L17 6L17 18L15 18L15 6;M13 15L8 18L8 6L13 9L13 15M13 9L18 12L18 12L13 15L13 9;M13 15L8 18L8 6L13 9L13 9M13 9L18 12L18 12L13 15L13 15"/></path></svg>
        </span>
        {{ data.button.text }}
      </router-link>
    </div>

    <div class="carousel carousel-center w-full">
      <div
        class="carousel-item flex-shrink-0 mx-1 rounded-md overflow-hidden"
        v-for="(item, index) in data.items"
        :key="index"
        @click="goToGame(item)"
      >
        <div class="game-carousel-item rounded-md relative cursor-pointer">
          <span class="play">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 18L7 18L7 6L9 6L9 18M15 6L17 6L17 18L15 18L15 6"><animate fill="freeze" attributeName="d" dur="0.6s" keyTimes="0;0.66;1" values="M9 18L7 18L7 6L9 6L9 18M15 6L17 6L17 18L15 18L15 6;M13 15L8 18L8 6L13 9L13 15M13 9L18 12L18 12L13 15L13 9;M13 15L8 18L8 6L13 9L13 9M13 9L18 12L18 12L13 15L13 15"/></path></svg>
          </span>
          <img :src="item.image" alt="Game Image" class="rounded-md cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "GameCarousel",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();

    const goToGame = (item) => {
      console.log("Navigating to:", `/game/${item.id}`);
      if (router) {
        router.push({
          path: `/game/${item.id}`,
          query: { iframe: item.iframeSrc },
        });
      } else {
        console.error("Router instance is not available");
      }
    };

    return {
      data: props.data,
      goToGame,
    };
  },
};
</script>

<style scoped>
/* Добавьте стили, если требуется */
</style>
