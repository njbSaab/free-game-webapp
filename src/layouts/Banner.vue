<template>
  <div
    class="banner page-header container lg:mx-auto game-section-carousel-header flex flex-col lg:flex-row items-center lg:text-start text-center gap-4 lg:gap-0 pb-5 pt-[125px]"
  >
    <div class="page-header-heading w-[90%] mx-auto lg:w-1/2">
      <h1 class="fs-25 c-white text-default">무료 온라인 슬롯 및 카지노 게임</h1>
      <!-- intro text -->
      <div class="desc fs-16 mt-4">
        슬롯 머신 및 기타 유형의 카지노 게임을 무료로 즐겨보세요. ✅ 다운로드
        및 등록이 필요하지 않습니다. ✅ 데모 모드에서 리스크 없이 플레이
        해보세요.
      </div>
    </div>

    <div class="page-heading-carousel page-heading-carousel-static w-full sm:w-2/3 lg:w-full">
      <div class="game-list-top-carousel-wrapper mx-4 sm:mx-0 lg:mx-0">
        <div
          class="js-cg-carousel-item cg-carousel-item cg-carousel-layer-0 selected"
        >
          <div class="game-carousel-item">
            <div class="img-wrapper relative">
              <picture class="relative cicrle-img">
                <source
                  :data-srcset="carouselImage.webp"
                  type="image/webp"
                  :srcset="carouselImage.webp"
                />
                <img
                  alt="Divine Wine"
                  height="220"
                  :src="carouselImage.jpg"
                />
              </picture>
              <span
                class="game-item-promo-label label-purple absolute z-index-1"
              >
                이 주의 게임 #1
              </span>

              <div
                class="game-data-overlay absolute bottom-2 mb-12 left-2 js-data-overlay z-index-2"
              >
                <span class="title-ico-wrapper">
                  <span>
                    <span class="game-name relative mb-xs">{{ game.name }}</span>
                    <span
                      class="game-provider-name relative ml-xs mb-xs text-white pl-2"
                    >
                      {{ game.provider }}
                    </span>
                  </span>
                  <span class="ico-wrapper">
                    <svg width="18" height="18" class="c-white">
                      <use xlink:href="#base_ui_ico_play_mark"></use>
                    </svg>
                  </span>
                </span>
              </div>
              <div class="btn-wrapper flex gap-2 absolute bottom-4">
                <a
                  href=""
                  class="btn btn-outline w-1/2 btn-border-white js-btn-for-real mt-s fs-16"
                >
                  <span class="text-white fs-16">무료로 플레이</span>
                </a>
                <a
                  class="btn btn-nj-accent w-1/2 mt-s text-default"
                  href=""
                >
                  <span class="text-white fs-16">무료로 플레이</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Banner",
  setup() {
    const carouselImage = reactive({
      webp:
        "https://cdn.vectorstock.com/i/500p/50/33/play-games-have-fun-neon-sign-with-game-pad-vector-38395033.jpg",
      jpg: "https://cdn.vectorstock.com/i/500p/50/33/play-games-have-fun-neon-sign-with-game-pad-vector-38395033.jpg",
    });

    const game = reactive({
      name: "Divine Wine",
      provider: "Atomic Slot Lab",
    });

    return {
      carouselImage,
      game,
    };
  },
};
</script>

<style scoped>
/* Добавьте стили, если требуется */
</style>
