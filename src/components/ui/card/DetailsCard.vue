<template>
  <div>
    <div class="card-details bg-nj-card rounded-md mx-2 py-[20px]">
      <!-- Заголовок и описание -->
      <div class="card-details-header text-center px-[20px]">
        <h2 class="title text-2xl pb-[20px]">{{ title }}</h2>
        <p>{{ description }}</p>
      </div>

      <!-- Изображение -->
      <div class="img-wrapp rounded-lg mb-[20px]">
      <img :src="image" alt="Game Image" class="game-image" />
      </div>
      <!-- Остальные детали -->
      <div class="card-details-body px-[10px]">
        <div class="title-group flex items-start gap-4 items-center pb-[20px]">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 512 512"
          >
            <path
              fill="rgba(0, 149, 255, 0.8)"
              d="M495.24 267.592L445.066 41.083A32.04 32.04 0 0 0 406.9 16.76L180.393 66.934a32 32 0 0 0-24.322 38.166l21.021 94.9H48a32.036 32.036 0 0 0-32 32v232a32.036 32.036 0 0 0 32 32h232a32.036 32.036 0 0 0 32-32V340.957l158.917-35.2a32.04 32.04 0 0 0 24.323-38.165M280 464H48V232h136.181l22.063 99.606a32.03 32.03 0 0 0 31.18 25.092a32.3 32.3 0 0 0 6.984-.769l35.6-7.886L280.02 464Zm184-189.487l-226.513 50.173l-50.173-226.51L413.824 48l50.193 226.505Z"
            />
            <path
              fill="rgba(0, 149, 255, 0.5)"
              d="M80 264h40v40H80zm0 128h40v40H80zm128 0h40v40h-40zm-64-64h40v40h-40zm81.456-205.433l39.054-8.644l8.644 39.055l-39.054 8.644zm152.672 97.223l39.054-8.65l8.65 39.054l-39.054 8.65zm-76.324-48.649l39.053-8.65l8.65 39.053l-39.052 8.65z"
            />
          </svg>
          <h3 class="text-xl">게임 정보</h3>
        </div>

        <ul class="details-list flex flex-col gap-[10px]">
          <!-- Разработчик -->
          <li
            class="flex justify-between"
          >
            <p class="text-nj-white-50">게임 제공 업체</p>
            <span class="line-transparent"></span>
            <p>{{ details.developers }}</p>
          </li>

          <!-- Джекпот -->
          <li
            class="flex justify-between "
            :class="{ 'opacity-50': !details.bonusParches }"
          >
            <p class="text-nj-white-50">게임 개발사	</p>
            <span class="line-transparent"></span>
            <IconCheck :isActive="details.jacpot" />
          </li>

          <!-- Бесплатные вращения -->
          <li
            class="flex justify-between"
            :class="{ 'opacity-50': !details.bonusParches }"
          >
            <p class="text-nj-white-50">프로그레시브 잭팟</p>
            <span class="line-transparent"></span>
            <IconCheck :isActive="details.freeSpeen" />
          </li>

          <!-- Автозапуск -->
          <li
            class="flex justify-between"
            :class="{ 'opacity-50': !details.bonusParches }"
          >
            <p class="text-nj-white-50">프로그레시브 잭팟</p>
            <span class="line-transparent"></span>
            <IconCheck :isActive="details.autorun" />
          </li>

          <!-- Быстрые спины -->
          <li
            class="flex justify-between"
            :class="{ 'opacity-50': !details.bonusParches }"
          >
            <p class="text-nj-white-50">무료 스핀</p>
            <span class="line-transparent"></span>
            <IconCheck :isActive="details.quickSpin" />
          </li>

          <!-- Возможность покупки бонусов -->
          <li
            class="flex justify-between"
            :class="{ 'opacity-50': !details.bonusParches }"
          >
            <p class="text-nj-white-50">오토플레이</p>
            <span class="line-transparent"></span>
            <IconCheck :isActive="details.bonusParches" />
          </li>

          <!-- Минимальная и максимальная ставка -->
          <li
            class="flex justify-between"
            :class="{ 'opacity-50': !details.bonusParches }"
          >
            <p class="text-nj-white-50">베팅액 (최소 - 최대)</p>
            <span class="line-transparent"></span>
            <p>{{ details.minBind }} / {{ details.maxBind }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconCheck from "./IconCheck.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  image:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  details: {
    type: Object,
    default: () => ({})
  },
});
</script>

<style scoped>
.card-details-header {
  margin-bottom: 20px;
}

.game-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.line-transparent{
    position: relative;
    bottom: -18px;
    background: linear-gradient(240deg, hsla(0, 0%, 100%, 0.2) 9.92%, transparent);
}
</style>
