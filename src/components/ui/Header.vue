<template>
  <header class="header nj-dark text-white flex justify-between items-center">
    <!-- Логотип -->
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
      <!-- Скрытый чекбокс для управления состоянием -->
      <input type="checkbox" />

      <!-- Иконка "гамбургер" -->
      <svg
        class="swap-off fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
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
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
</style>
