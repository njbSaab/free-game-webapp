<template>
  <div
    class="banner page-header container-lg game-section-carousel-header flex flex-col lg:flex-row items-center lg:text-start text-center gap-4 pt-[100px] lg:pt-[10.5vw] lg:pb-[3.5vw]"
  >
  <!-- lg:gap-0 lg:mx-auto -->
    <div class="page-header-heading w-[90%] mx-auto">
      <!-- lg:w-1/2 -->
      <h1 class="fs-30 c-white text-default title banner-title">{{ bannerContent.title }}</h1>
      <!-- Описание -->
      <div class="desc fs-16 mt-4">
        {{ bannerContent.description }}
      </div>
    </div>

    <div
      class="page-heading-carousel-static w-[90%] lg:w-full"
    >
    <!-- page-heading-carousel -->
      <div class="game-list-top-carousel-wrapper mx-2 sm:mx-0 lg:mx-0">
        <div class="js-cg-carousel-item cg-carousel-item cg-carousel-layer-0 selected">
          <div class="game-carousel-item relative">
            <div class="img-wrapper relative">
              <picture class="relative">
                <source
                  :data-srcset="carouselImage.webp"
                  type="image/webp"
                  :srcset="carouselImage.webp"
                />
                <img alt="Divine Wine" :src="carouselImage.jpg" />
              </picture>
              <span class="game-item-promo-label label-purple absolute z-index-1">
                이 주의 게임 #1
              </span>

              <div
                class="game-data-overlay absolute bottom-2 mb-12 left-2 js-data-overlay z-index-2"
              >
                <span class="title-ico-wrapper">
                  <span>
                    <span class="game-name relative mb-xs">{{ game.name }}</span>
                    <span class="game-provider-name relative ml-xs mb-xs text-white pl-2">
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
                  href="#"
                  class="btn btn-outline w-1/2 btn-border-white js-btn-for-real mt-s fs-16"
                >
                  <span class="text-white fs-16">무료로 플레이</span>
                </a>
                <a class="btn btn-nj-accent w-1/2 mt-s text-default" href="#">
                  <span class="text-white fs-16">무료로 플레이</span>
                </a>
              </div>
            </div>
            <!-- <div class="cirlcle-wrapp absolute w-[100%] h-[100%] z-0">
              <div class="cicrle-img w-[100px] h-[150px] lg:w-[26vw]"></div>
            </div> -->
            <div class="skeleton w-full h-[200px] absolute top-0"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { reactive } from "vue";


// Данные изображения
const carouselImage = reactive({
  webp:
    "https://free-games-img.netlify.app/img/banners/image1.jpg",
  jpg:
    "https://free-games-img.netlify.app/img/banners/image1.jpg",
});


// Данные игры
const game = reactive({
  name: "Divine Wine",
  provider: "Atomic Slot Lab",
});

const bannerContent = reactive({
  title: "무료 온라인 슬롯 및 카지노 게임",
  description:
    "슬롯 머신 및 기타 유형의 카지노 게임을 무료로 즐겨보세요. <br> ✅ 다운로드 및 등록이 필요하지 않습니다. <br> ✅ 데모 모드에서 리스크 없이 플레이 해보세요.",
})
</script>

<style scoped>
.banner .img-wrapper img{
  min-height: 200px;
}

</style>
