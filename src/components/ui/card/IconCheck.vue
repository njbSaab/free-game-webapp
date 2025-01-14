<template>
    <div>
      <div v-if="isActive">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="rgba(0, 149, 255, 1)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              fill="rgba(0, 149, 255, .5)"
              fill-opacity="0.3"
              d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"
            >
              <animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0.3;0" />
            </path>
            <path
              stroke-dasharray="14"
              stroke-dashoffset="14"
              d="M8 12l3 3l5 -5"
            >
              <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="14;0" />
            </path>
          </g>
        </svg>
      </div>
  
      <div v-else class="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              stroke-dasharray="64"
              stroke-dashoffset="64"
              d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
            >
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
            </path>
            <path
              stroke-dasharray="8"
              stroke-dashoffset="8"
              d="M12 12l4 4M12 12l-4 -4M12 12l-4 4M12 12l4 -4"
            >
              <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0" />
            </path>
          </g>
        </svg>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    isActive: {
      type: Boolean,
      required: true,
    },
  });
  </script>