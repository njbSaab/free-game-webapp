<template>
    <div class="stats-card px-2 mt-8">
      <ul class="flex flex-col gap-2">
        <li v-for="(stat, index) in statsList" :key="index" class="flex flex-col items-start side-line w-full gap-2">
          <h3 class="text-xl font-normal text-nj-white-50">{{ stat.title }}</h3>
          <div class="content flex gap-3 items-center">
            <span v-html="stat.icon" class="icon"></span>
            <p class="title text-xl font-bold">{{ stat.body }}</p>
          </div>
        </li>
      </ul>
    </div>
</template>
  
<script setup>
  defineProps({
    statsList: {
      type: Array,
      required: true,
    },
  });
  </script>