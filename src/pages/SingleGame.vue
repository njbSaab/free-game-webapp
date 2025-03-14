<script setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useGameStore } from "@/stores/gameStore";
import { useCategoryStore } from "@/stores/categoryStore";
import CategoryCarousel from "@/layouts/CategoryCarousel.vue";
import DetailsCard from "@/components/ui/card/DetailsCard.vue";
import IsLoadingBalls from "@/components/ui/IsLoadingBalls.vue";
import StatsCard from "@/components/ui/card/StatsCard.vue";
import { popupRedirectContents } from "@/data/popup/popup-redirect-data";
import PopupRedirect from "@/components/ui/popup-redirect/PopupRedirect.vue";
import AboutGame from "@/components/ui/card/AboutGame.vue";
import { tryCardFirst } from "@/data/card/try_card_item-1";
import GameCard from "@/components/ui/card/InfoGameCard.vue";

const tryCardFirstRef = ref(null);

const popupRedirectContentsRef = ref(null);

const router = useRouter();
const gameStore = useGameStore();
const categoryStore = useCategoryStore();

const isLoading = ref(true);
const isActive = ref(false);

const id = computed(() => parseInt(router.currentRoute.value.params.id, 10));
const currentGame = computed(() => gameStore.currentGame);

// Категории для карусели
const categories = computed(() => categoryStore.categories);

// Метод для обработки выбора категории
const filterByCategory = (categoryName) => {
  router.push({ name: "AllGames", query: { category: categoryName.toLowerCase() } });
};

// Инициализация текущей игры
onMounted(() => {
  tryCardFirstRef.value = tryCardFirst || null;

  // Прокрутить страницу к началу
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Плавная прокрутка (опционально)
  });

  const game = gameStore.allGames.find((g) => g.id === id.value);
  if (game) {
    gameStore.setCurrentGame(game);
  } else {
    console.error("Game not found for ID:", id.value);
  }
  isLoading.value = false;

  popupRedirectContentsRef.value = popupRedirectContents || null;
  console.log("statsList:", currentGame.value?.statsList);

});

const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <div v-if="isLoading" class="flex justify-center items-center min-h-screen">
    <IsLoadingBalls />
  </div>

  <section v-else class="game-page pt-[85px] min-h-screen" v-auto-animate>
    <div
      class="info rounded-md nj-bg-card my-10 line text-center mx-auto"
      :class="isActive ? 'w-full' : 'container'"
    >
      <h2 class="text-xl font-bold mt-[-10px] pb-[20px] px-4">
        무료로 <span class="title">{{ currentGame.title }}</span> 을(를) 플레이하십시오
      </h2>
    
      <div
        class="play-controlls absolute w-[10vw] px-2 flex items-cetert justify-center"
        @click="toggleActive"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          v-if="!isActive"
        >
          <path fill="#fff" d="M10 16h4v0h-4z">
            <animate
              fill="freeze"
              attributeName="d"
              begin="0.6s"
              dur="0.2s"
              values="M10 16h4v0h-4z;M10 16h4v6h-4z"
            />
          </path>
          <g
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              fill="#fff"
              fill-opacity="0"
              stroke-dasharray="72"
              stroke-dashoffset="72"
              d="M12 17h-10v-14h20v14Z"
            >
              <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="1.1s"
                dur="0.15s"
                values="0;0.3"
              />
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.6s"
                values="72;0"
              />
            </path>
            <path stroke-dasharray="4" stroke-dashoffset="4" d="M12 21h3M12 21h-3">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.8s"
                dur="0.2s"
                values="4;0"
              />
            </path>
            <path
              stroke-dasharray="4"
              stroke-dashoffset="4"
              d="M6 7h2M6 7v2M18 13h-2M18 13v-2"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="1.25s"
                dur="0.2s"
                values="4;0"
              />
            </path>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          v-else
        >
          <mask id="lineMdMonitorOffTwotone0">
            <path fill="#fff" d="M10 16h4v0h-4z">
              <animate
                fill="freeze"
                attributeName="d"
                begin="0.6s"
                dur="0.2s"
                values="M10 16h4v0h-4z;M10 16h4v6h-4z"
              />
            </path>
            <g
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                fill="#fff"
                fill-opacity="0"
                stroke-dasharray="72"
                stroke-dashoffset="72"
                d="M12 17h-10v-14h20v14Z"
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="1.1s"
                  dur="0.15s"
                  values="0;0.3"
                />
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.6s"
                  values="72;0"
                />
              </path>
              <path stroke-dasharray="4" stroke-dashoffset="4" d="M12 21h3M12 21h-3">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.8s"
                  dur="0.2s"
                  values="4;0"
                />
              </path>
              <path
                stroke="#000"
                stroke-dasharray="28"
                stroke-dashoffset="28"
                d="M-1 11h26"
                transform="rotate(45 12 12)"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="1.25s"
                  dur="0.4s"
                  values="28;0"
                />
              </path>
              <path
                stroke-dasharray="28"
                stroke-dashoffset="28"
                d="M-1 13h26"
                transform="rotate(45 12 12)"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="1.25s"
                  dur="0.4s"
                  values="28;0"
                />
              </path>
            </g>
          </mask>
          <rect
            width="24"
            height="24"
            fill="#fff"
            mask="url(#lineMdMonitorOffTwotone0)"
          />
        </svg>
      </div>
      <iframe
        :src="currentGame.iframeSrc"
        allow="autoplay *; fullscreen *"
        class="w-full h-screen border-none"
      ></iframe>
      <use xlink:href="#base_ui_ico_reply_left"></use>
    </div>

    <div class="container">
      <!-- Карточка деталей игры -->
      <DetailsCard
        :details="currentGame.gameDetails"
        :title="currentGame.title"
        :description="currentGame.description"
        :image="currentGame.image"
      />

      <StatsCard :statsList="currentGame.statsList" />

      <!-- Обучающая карточка -->
      <AboutGame
        :logo="currentGame.aboutGame.logo"
        :description="currentGame.aboutGame.gameDescription"
        :provider="currentGame.aboutGame.provide"
      />

      <!-- Карточка бесплатных игр -->
      <GameCard v-if="tryCardFirstRef" :cardData="tryCardFirstRef"/>

      <!-- Карусель категорий -->
      <CategoryCarousel
        :data="{ items: categories }"
        @categorySelected="filterByCategory"
      />

      <PopupRedirect
        v-if="popupRedirectContentsRef"
        :popupData="popupRedirectContentsRef"
      />

    </div>
  </section>
</template>

<style scoped>
.game-page .card-request-game{
  margin-bottom: 0px !important;
}
.line {
  padding: 35px 0 0;
}
.play-controlls {
  cursor: pointer;
  backdrop-filter: blur(5px);
  border-radius: 20px;
  background: linear-gradient(240deg, rgba(0, 149, 255, 0.8), transparent);
  top: 10px;
  right: 20px;
  padding: 5px !important;
  transition: 0.3s ease-in;
}
.play-controlls:hover {
  background: linear-gradient(90deg, rgba(0, 149, 255, 0.8), transparent);
  scale: 1.05;
}
</style>
