<template>
  <div>
    <footer class="nj-dark py-5 px-[.5rem] text-center text-white">
      <div class="container">
        <div class="footer-logo-row py-5 flex items-center">
          <div class="logo-wrapper">
            <img
              class="logo"
              src="https://static.vecteezy.com/system/resources/thumbnails/019/982/223/small/dark-style-poker-card-element-png.png"
              alt="logo"
            />
          </div>
          <span class="footer-line"></span>
        </div>

        <MenuNav :sections="navSections" />

        <!-- <form class="subscribe mt-8 mb-[20px]" action="submit">
        <div
          class="subscribe-form bg-nj-card line flex flex-col md:flex-row text-center md:text-start gap-4 items-center rounded-md p-4 rounded-md bg-nj-card pb-4"
        >
          <div class="subscribe-form-wrapper w-[80%] flex flex-col gap-2">
            <h2 class="fs-25 font-bold text-nj-white py-[10px]">Подписаться</h2>
            <label class="relative subscribe-form-label">
              <input type="text" placeholder="Email" />
              <span class="absolute left-2 icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 4.99L4 6zm0 12H4V8l8 5l8-5z"
                  />
                </svg>
              </span>
            </label>
            <a class="btn btn-nj-primary fs-16 text-white cursor-pointer">
              Подписаться
            </a>
          </div>
          <div class="form-control">
            <label class="cursor-pointer flex gap-4 label">
              <input
                type="checkbox"
                checked="checked"
                class="checkbox checkbox-info px[10px] py-[0px]"
              />
              <span class="label-text"
                >Мне не менее 18 лет, и я могу легально играть в казино.</span
              >
            </label>
          </div>
        </div>
      </form> -->

        <div class="footer-partners flex justify-between gap-2 flex-wrap">
          <div
            class="footer__partner w-[20%] lg:w-[15%] nj-hover-shadow rounded-lg cursor-pointer"
            v-for="(provider, index) in providersImg"
            :key="index"
            
          >
            <div class="providers-wrapper mx-w-[250px] relative">
              <img :src="provider.default" :alt="provider.altText" />
              <p class="text-nj-white-50">
                {{ provider.altText }}
              </p>
            </div>
          </div>
        </div>
        <p class="text-nj-white pt-4 text-xs">© 2024 My Landing. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { navSections } from "@/data/nav/nav_list.js";
import { providersImg } from "@/data/providers/providers-img.js";
</script>

<style lang="scss" scoped>
.providers-wrapper {
  &::after{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: #1b2642d4;
    z-index: 1;
    left: 0;
    top: 0;
    transition: all .3s ease-in-out;

  }
  &:hover{
    &::after{
    background: transparent;
    transition: all .3s ease-in-out;
  }
  }
  p{
    display: none;
  }
}
</style>
