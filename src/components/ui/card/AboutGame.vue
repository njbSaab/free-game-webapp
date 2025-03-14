<template>
  <div class="px-2">
    <div class="about flex-col gap-2 text-start items-start mt-8">
      <h2 class="text-xl lg:text-2xl font-bold mb-3 flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 15 15"
        >
          <path
            fill="rgba(0, 149, 255, 0.9)"
            d="M8.5 10A2.5 2.5 0 0 0 13 8.5c0-.564-.194-1.079-.509-1.497L12.5 7l-5-6l-5 6l.009.003A2.48 2.48 0 0 0 2 8.5A2.5 2.5 0 0 0 6.5 10l.5-.666V11.5C7 13 4.5 13 4.5 13a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1S8 13 8 11.5V9.334z"
          />
        </svg>
        本作について
      </h2>
      <p class="text-sm text-nj-white-80 pl-1">{{ description }}</p>
    </div>
    <div class="about-provider flex-col gap-2 text-start items-start pt-4">
      <!-- <h2 class="text-xl font-bold flex gap-1 items-center">
        ゲームプロバイダーについて
      </h2> -->
      <div class="provider-wrapper flex flex-col justify-between items-center line mt-2">
        <img v-if="logo" :src="logo" alt="provider-logo" class="provider-logo sm:w-[50%] mx-auto" />
        <!-- <p class="text-lg">{{ provider }}</p> -->
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  logo: String,
  description: String,
  provider: String,
});
</script>

<style lang="scss" scoped>
.provider-wrapper.line {
  padding: 0;
}
</style>
