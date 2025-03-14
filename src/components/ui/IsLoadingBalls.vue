<template>
  <div class="isLoading flex flex-col item-center justify-center gap-2">

    <div class="results-content-loader-inside w-fit mx-auto text-center">
      <div class="svg-custom-loader w-fit mx-auto" style="fill:oklch(51.01% 0.274 263.83)">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
          <defs>
            <path
              style="background-color: green"
              id="symbol-cherry"
              d="M11.25,6.68a3.33,3.33,0,0,0-2.79-1A3.85,3.85,0,0,1,9,2.82c.11-.12.19-.24.27-.34h0a6.36,6.36,0,0,1,1.51,0,.09.09,0,0,0,.11-.08l.1-.55a.09.09,0,0,0-.08-.11A5.65,5.65,0,0,0,9.4,1.68a5.3,5.3,0,0,0-8.33.77l-.18.3A.2.2,0,0,0,1,3L1,3a3.82,3.82,0,0,1,1.2.43l.19.11h.06l.3.16a5.33,5.33,0,0,0,1.91.71A6.44,6.44,0,0,0,4,5.75a3.39,3.39,0,1,0,1.74.93,3.22,3.22,0,0,0-1-.7,5.75,5.75,0,0,1,.85-1.46h.2a5.14,5.14,0,0,0,2-.62,4.81,4.81,0,0,0,0,2,3.51,3.51,0,0,0-1.07.63,4.12,4.12,0,0,1,0,5.1,3.38,3.38,0,0,0,4.6-4.94Z"
            ></path>
            <path
              id="symbol-diamond"
              d="M11.86,5.7,7.09.45A1.34,1.34,0,0,0,5.21.33L5.09.45.35,5.7a1.33,1.33,0,0,0,0,1.8l4.77,5.25A1.33,1.33,0,0,0,7,12.88l.12-.13L11.89,7.5A1.35,1.35,0,0,0,11.86,5.7Z"
            ></path>
            <path
              id="symbol-heart"
              d="M7.25.44a3.35,3.35,0,0,1,5,3.06c-.14,3.11-3.79,5.88-5.4,6.88a1.38,1.38,0,0,1-1.49,0C3.75,9.38.09,6.61,0,3.5A3.33,3.33,0,0,1,3.08,0,3.38,3.38,0,0,1,5,.46L5.91,1a.35.35,0,0,0,.37,0Z"
            ></path>
            <path
              id="symbol-club"
              d="M10.11,3.68,9.7,3.55a.35.35,0,0,1-.24-.33V3A3.36,3.36,0,0,0,2.77,3v.2a.35.35,0,0,1-.24.33A4.44,4.44,0,0,0,2,3.72,3.36,3.36,0,0,0,.29,8.15a3.26,3.26,0,0,0,3.07,2,3.39,3.39,0,0,0,1.49-.35.22.22,0,0,1,.3.09.21.21,0,0,1,0,.19,6.83,6.83,0,0,1-.88,1.53.32.32,0,0,0,.08.46.28.28,0,0,0,.18.06H7.68A.33.33,0,0,0,8,11.77.35.35,0,0,0,8,11.58a6.17,6.17,0,0,1-.88-1.46.22.22,0,0,1,.1-.29.23.23,0,0,1,.2,0,3.35,3.35,0,1,0,2.94-6l-.2-.09Z"
            ></path>
            <path
              id="symbol-seven"
              d="M10.15,1.92a.2.2,0,0,0,0-.25L9.25.39A.19.19,0,0,0,9,.39C7.1,1.65,6,0,3.78,0A4.33,4.33,0,0,0,1.53.73V.63A.18.18,0,0,0,1.36.44H.19A.2.2,0,0,0,0,.63H0V4.72a.2.2,0,0,0,.19.19H1.36a.2.2,0,0,0,.19-.14,1.31,1.31,0,0,1,.09-.28A1.33,1.33,0,0,1,3,3.58c.79,0,1.53.67,2.65.57C3.1,5.78,1.78,9.35,1.65,12a.19.19,0,0,0,.18.2H7.15A.2.2,0,0,0,7.34,12h0a21.49,21.49,0,0,1,.22-4.46A10,10,0,0,1,10.15,1.92Z"
            ></path>
            <path
              id="symbol-lemon"
              d="M9.43,6a4.74,4.74,0,0,0,0-4A1.13,1.13,0,0,0,9.06.45,1.15,1.15,0,0,0,7.8.45,5,5,0,0,0,3,.84,6,6,0,0,0,.86,2.93,5,5,0,0,0,.44,7.8,1.1,1.1,0,0,0,.6,9.23,1.1,1.1,0,0,0,2,9.39a4.46,4.46,0,0,0,2.27.43A5.78,5.78,0,0,0,8,8.1,5.88,5.88,0,0,0,9.43,6Z"
            ></path>
            <path
              id="symbol-spades"
              d="M0,7.44a3.58,3.58,0,0,0,2.75,3.11,3.2,3.2,0,0,0,2-.26.27.27,0,0,1,.36.14.21.21,0,0,1,0,.19,7.22,7.22,0,0,1-1,1.75.36.36,0,0,0,.06.5.31.31,0,0,0,.21.07H7.76a.34.34,0,0,0,.35-.35A.33.33,0,0,0,8,12.38,7.76,7.76,0,0,1,7,10.6a.27.27,0,0,1,.17-.34.26.26,0,0,1,.21,0,3.3,3.3,0,0,0,2,.29,3.54,3.54,0,0,0,2.76-3.12C12.34,4.21,8.5,1.32,6.83.22a1.38,1.38,0,0,0-1.49,0C3.69,1.32-.15,4.21,0,7.44Z"
            ></path>
          </defs>
          <svg viewBox="0 0 82.9 82.57">
            <g id="Layer_1" data-name="Layer 1">
              <g>
                <path
                  class="cls-1"
                  d="M5.12,8.59h0A22.66,22.66,0,0,1,22.88,0H60A22.66,22.66,0,0,1,77.78,8.59H5.12Z"
                ></path>
                <path
                  class="cls-1"
                  d="M5.2,74.09a22.68,22.68,0,0,0,17.68,8.48H60A22.7,22.7,0,0,0,77.7,74.09Z"
                ></path>
                <path
                  class="cls-1"
                  d="M79.48,13.62H3.42A3.42,3.42,0,0,0,0,17V65.53A3.42,3.42,0,0,0,3.42,69H79.48a3.42,3.42,0,0,0,3.42-3.42V17A3.42,3.42,0,0,0,79.48,13.62ZM27.69,60.46h-19V22.12h19Zm23.28,0h-19V22.12H51Zm23.28,0h-19V22.12h19Z"
                ></path>
              </g>
            </g></svg
          ><svg viewBox="19.5 0 12.21 70">
            <g id="Layer_1" data-name="Layer 1" style="clip-path: url(#clip-off)">
              <g class="slot-element-1">
                <use
                  xlink:href="#symbol-lemon"
                  style="transform: translate(1px, 0)"
                ></use>
                <use
                  xlink:href="#symbol-cherry"
                  style="transform: translate(0, 17px)"
                ></use>
                <use
                  xlink:href="#symbol-club"
                  style="transform: translate(0, 37px)"
                ></use>
                <use
                  xlink:href="#symbol-heart"
                  style="transform: translate(0, 58px)"
                ></use>
                <use
                  xlink:href="#symbol-seven"
                  style="transform: translate(1px, 76px)"
                ></use>
                <use
                  xlink:href="#symbol-spades"
                  style="transform: translate(0, 96px)"
                ></use>
                <use
                  xlink:href="#symbol-diamond"
                  style="transform: translate(0, 116px)"
                ></use>
                <use
                  xlink:href="#symbol-lemon"
                  style="transform: translate(1px, 136px)"
                ></use>
                <use
                  xlink:href="#symbol-cherry"
                  style="transform: translate(0, 154px)"
                ></use>
                <use
                  xlink:href="#symbol-club"
                  style="transform: translate(0, 174px)"
                ></use>
                <use
                  xlink:href="#symbol-heart"
                  style="transform: translate(0, 194px)"
                ></use>
                <use
                  xlink:href="#symbol-seven"
                  style="transform: translate(1px, 212px)"
                ></use>
                <use
                  xlink:href="#symbol-spades"
                  style="transform: translate(0, 232px)"
                ></use>
                <use
                  xlink:href="#symbol-diamond"
                  style="transform: translate(0, 254px)"
                ></use>
              </g>
            </g></svg
          ><svg viewBox="0 0 12.21 70">
            <g id="Layer_1" data-name="Layer 1" style="clip-path: url(#clip-off)">
              <g class="slot-element-2">
                <use xlink:href="#symbol-cherry" style="transform: translate(0, 0)"></use>
                <use
                  xlink:href="#symbol-seven"
                  style="transform: translate(1px, 20px)"
                ></use>
                <use
                  xlink:href="#symbol-club"
                  style="transform: translate(0, 40px)"
                ></use>
                <use
                  xlink:href="#symbol-heart"
                  style="transform: translate(0, 60px)"
                ></use>
                <use
                  xlink:href="#symbol-lemon"
                  style="transform: translate(1px, 78px)"
                ></use>
                <use
                  xlink:href="#symbol-spades"
                  style="transform: translate(0, 95px)"
                ></use>
                <use
                  xlink:href="#symbol-diamond"
                  style="transform: translate(0, 115px)"
                ></use>
                <use
                  xlink:href="#symbol-seven"
                  style="transform: translate(1px, 136px)"
                ></use>
                <use
                  xlink:href="#symbol-cherry"
                  style="transform: translate(0, 156px)"
                ></use>
                <use
                  xlink:href="#symbol-club"
                  style="transform: translate(0, 176px)"
                ></use>
                <use
                  xlink:href="#symbol-diamond"
                  style="transform: translate(0, 196px)"
                ></use>
                <use
                  xlink:href="#symbol-lemon"
                  style="transform: translate(1px, 216px)"
                ></use>
                <use
                  xlink:href="#symbol-spades"
                  style="transform: translate(0, 233px)"
                ></use>
                <use
                  xlink:href="#symbol-heart"
                  style="transform: translate(0, 254px)"
                ></use>
              </g>
            </g></svg
          ><svg viewBox="-19.5 0 12.21 70">
            <g id="Layer_1" data-name="Layer 1" style="clip-path: url(#clip-off)">
              <g class="slot-element-3">
                <use xlink:href="#symbol-cherry" style="transform: translate(0, 0)"></use>
                <use
                  xlink:href="#symbol-heart"
                  style="transform: translate(0, 20px)"
                ></use>
                <use
                  xlink:href="#symbol-club"
                  style="transform: translate(0, 38px)"
                ></use>
                <use
                  xlink:href="#symbol-seven"
                  style="transform: translate(1px, 59px)"
                ></use>
                <use
                  xlink:href="#symbol-diamond"
                  style="transform: translate(0, 80px)"
                ></use>
                <use
                  xlink:href="#symbol-spades"
                  style="transform: translate(0, 100px)"
                ></use>
                <use
                  xlink:href="#symbol-lemon"
                  style="transform: translate(1px, 120px)"
                ></use>
                <use
                  xlink:href="#symbol-spades"
                  style="transform: translate(0, 137px)"
                ></use>
                <use
                  xlink:href="#symbol-diamond"
                  style="transform: translate(0, 158px)"
                ></use>
                <use
                  xlink:href="#symbol-cherry"
                  style="transform: translate(0, 178px)"
                ></use>
                <use
                  xlink:href="#symbol-club"
                  style="transform: translate(0, 198px)"
                ></use>
                <use
                  xlink:href="#symbol-lemon"
                  style="transform: translate(1px, 217px)"
                ></use>
                <use
                  xlink:href="#symbol-seven"
                  style="transform: translate(1px, 235px)"
                ></use>
                <use
                  xlink:href="#symbol-heart"
                  style="transform: translate(0, 254px)"
                ></use>
              </g>
            </g>
          </svg>
        </svg>
      </div>
      <div class="results-content-loader-text">
        <h3 class="text-lg py-2 title-dark">Casino Free Slots</h3>
        <h4 class="neo-fs-20 title-dark">플레이어들이 도박을 이해할 수 있길 바랍니다.</h4>
      </div>
    </div>

    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 24 24">
      <defs>
        <radialGradient id="gradient1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="oklch(51.01% 0.274 263.83)" />
          <stop offset="100%" stop-color="oklch(53.18% 0.28 296.97)" />
        </radialGradient>
        <radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="oklch(47.66% 0.246 305.88)" />
          <stop offset="100%" stop-color="oklch(69.02% 0.277 332.77)" />
        </radialGradient>
        <radialGradient id="gradient3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="oklch(61.42% 0.238 15.34)" />
          <stop offset="100%" stop-color="oklch(51.01% 0.274 263.83)" />
        </radialGradient>
      </defs>
      <circle cx="12" cy="12" r="0" fill="url(#gradient1)">
        <animate
          id="svgSpinnersPulseMultiple0"
          fill="freeze"
          attributeName="r"
          begin="0;svgSpinnersPulseMultiple2.end"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="0;11"
        />
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="0;svgSpinnersPulseMultiple2.end"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        />
      </circle>
      <circle cx="12" cy="12" r="0" fill="url(#gradient2)">
        <animate
          id="svgSpinnersPulseMultiple1"
          fill="freeze"
          attributeName="r"
          begin="svgSpinnersPulseMultiple0.begin+0.2s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="0;11"
        />
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="svgSpinnersPulseMultiple0.begin+0.2s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        />
      </circle>
      <circle cx="12" cy="12" r="0" fill="url(#gradient3)">
        <animate
          id="svgSpinnersPulseMultiple2"
          fill="freeze"
          attributeName="r"
          begin="svgSpinnersPulseMultiple0.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="0;11"
        />
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="svgSpinnersPulseMultiple0.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        />
      </circle>
    </svg> -->
  
  </div>

</template>
<script setup></script>

<style lang="scss" scoped>
.isLoading {
  position: fixed;
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}
svg{
  box-shadow:
    0 0 0px 10px rgba(0, 149, 255, 0.8),
    0 0 20px 10px rgba(0, 149, 255, 0.8),
    0 0 40px 20px rgba(0, 149, 255, 0.8),
    0 0 80px 40px rgba(0, 149, 255, 0.8),
    0 0 100px 70px rgba(0, 149, 255, 1);
    // background: rgba(0, 149, 255, 0.2);
    padding: 10px;
    border-radius: 12px;
    backdrop-filter: blur(10px); 
}
.results-content-loader-text{
  position: relative;
  z-index: 1;
  font-weight: bold;
}
.slot-element-1 {
  animation-name: movingSlots-1;
  animation-duration: 9.5s;
  animation-iteration-count: infinite;
}

.slot-element-2 {
  animation-name: movingSlots-2;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}

.slot-element-3 {
  animation-name: movingSlots-3;
  animation-duration: 8.5s;
  animation-iteration-count: infinite;
}

@keyframes movingSlots-1 {
  0% {
    transform: translate(0, -200px);
  }
  15% {
    transform: translate(0, 10px);
  }
  35% {
    transform: translate(0, -150px);
  }
  47.5% {
    transform: translate(0, -40px);
  }
  65% {
    transform: translate(0, -120px);
  }
  85% {
    transform: translate(0, -80px);
  }
  100% {
    transform: translate(0, -200px);
  }
}

@keyframes movingSlots-2 {
  0% {
    transform: translate(0, 10px);
  }
  15% {
    transform: translate(0, -200px);
  }
  35% {
    transform: translate(0, -40px);
  }
  47.5% {
    transform: translate(0, -150px);
  }
  65% {
    transform: translate(0, -80px);
  }
  85% {
    transform: translate(0, -120px);
  }
  100% {
    transform: translate(0, -10px);
  }
}

@keyframes movingSlots-3 {
  0% {
    transform: translate(0, -200px);
  }
  15% {
    transform: translate(0, 10px);
  }
  35% {
    transform: translate(0, -150px);
  }
  47.5% {
    transform: translate(0, -40px);
  }
  65% {
    transform: translate(0, -120px);
  }
  85% {
    transform: translate(0, -80px);
  }
  100% {
    transform: translate(0, -200px);
  }
}
</style>
