<template>
  <header ref="headerRef" class="header nj-dark text-white">
    <div class="header-wrapper flex justify-between items-center mb-[-10px]">
      <div class="logo-wrapper">
        <router-link to="/">
          <img
            class="logo w-[70px] h-[50px]"
            src="https://static.vecteezy.com/system/resources/thumbnails/019/982/223/small/dark-style-poker-card-element-png.png"
            alt="Logo"
          />
        </router-link>
      </div>
      <!-- Переключатель меню -->
      <label class="btn btn-circle swap swap-rotate">
        <!-- Чекбокс для управления состоянием -->
        <input type="checkbox" v-model="isMenuOpen" />

        <!-- Иконка "гамбургер" -->
        <svg
          class="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path
            d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
          />
        </svg>

        <!-- Иконка "закрыть" -->
        <svg
          class="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon
            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
          />
        </svg>
      </label>
    </div>
    <!-- Навигация -->
    <div :class="isMenuOpen ? 'nav-open' : 'nav-close'" v-auto-animate>
      <MenuNav :sections="navSections" />
    </div>
  </header>
  <div :class="isMenuOpen? 'overlay': 'overlay-non'"></div>
</template>

<script setup>
import MenuNav from './navigation/MenuNav.vue';
import { navSections } from "@/data/nav/nav_list.js"; 
import { ref } from "vue";
const isMenuOpen = ref(false);
const headerRef = ref(null);

const handleClickOutside = (event) => {
  if (headerRef.value && !headerRef.value.contains(event.target)) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>

.nav-open .nav{
  /* transform: translateY(0);  */
  transition: .3s ease-in-out;
  visibility: visible;
  height: 100%;
  opacity: 1;
  padding: 10px 0;
}

.nav-close .nav{
  transition: .2s ease-out;
  opacity: 0;
  padding: 0px;
  /* transform: translateY(-1000px); */
  visibility: hidden;
  height: 0;
}

.overlay{
  position: fixed;
  width: 100%;
  height: 100dvh;
  background: #1b2642a2;
  left: 0;
  top: 0;
  z-index: 1;
  backdrop-filter: blur(2px);
  opacity: 1;
  transition: .3s ease-in;
  z-index: 11111;
}
.overlay-non{
  opacity: 0;
  z-index: -1;
  transition: .1s ease-in;
}
</style>