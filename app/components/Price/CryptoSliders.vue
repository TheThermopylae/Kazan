<template>
  <section class="my-10">
    <div class="flex gap-6 mb-4 pb-4 border-b border-stroke text-sm">
      <button
        class="text-secondary transition"
        @click="tab = 0"
        :class="{ '!text-primary': tab == 0 }"
      >
        ارز های محبوب
      </button>
      <button
        class="text-secondary transition"
        @click="tab = 1"
        :class="{ '!text-primary': tab == 1 }"
      >
        ارز های مشابه
      </button>
      <button
        class="text-secondary transition"
        @click="tab = 2"
        :class="{ '!text-primary': tab == 2 }"
      >
        بیشترین سود
      </button>
      <button
        class="text-secondary transition"
        @click="tab = 3"
        :class="{ '!text-primary': tab == 3 }"
      >
        بیشترین ضرر
      </button>
    </div>
    <swiper
      :space-between="10"
      :slides-per-view="4"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide v-for="item in 10" :key="item">
        <article
          class="p-3 bg-white border border-[#EFEFEF] rounded-10 text-sm"
        >
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <img src="/crypto/BTC.svg" alt="btc icon" class="size-7" />
              <div>
                <h4 class="font-bold mb-1">قیمت بیت کوین</h4>
                <span class="text-xs text-secondary">BTC</span>
              </div>
            </div>
            <div>
              <p class="font-bold ltr-dir mb-1">
                111.000.111 <span class="text-secondary text-xs">USDT</span>
              </p>
              <p
                class="text-xs text-fail flex items-center justify-end gap-0.5"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.75 7.25L5.92929 10.4762C5.94882 10.4921 5.97441 10.5 6 10.5M9.25 7.25L6.07071 10.4762C6.05118 10.4921 6.02559 10.5 6 10.5M6 10.5V1.5"
                    stroke="#F65555"
                    stroke-width="0.75"
                    stroke-linecap="round"
                  />
                </svg>
                6.25%
              </p>
            </div>
          </div>
          <div class="flex justify-between items-center mt-8">
            <NuxtLink
              to="/"
              class="border border-primary text-primary rounded-10 p-2 hover:bg-primary hover:text-white transition"
              >خرید بیت کوین</NuxtLink
            >
            <div class="flex gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.60604 17.0834C8.1331 17.839 9.00877 18.3334 9.99992 18.3334C10.9911 18.3334 11.8667 17.839 12.3938 17.0834M8.37482 4.16675H11.625C12.6551 4.16675 13.5797 4.79854 13.9541 5.75818L15.5701 11.6667C15.6746 11.9347 15.8412 12.174 16.0561 12.3651L16.1712 12.4674C16.4863 12.7475 16.6666 13.149 16.6666 13.5706C16.6666 14.3858 16.0057 15.0466 15.1905 15.0466H4.8093C3.9941 15.0466 3.33325 14.3858 3.33325 13.5706C3.33325 13.149 3.51355 12.7475 3.82867 12.4674L3.9437 12.3651C4.15867 12.174 4.32525 11.9347 4.42978 11.6667L6.04577 5.75818C6.42012 4.79854 7.34475 4.16675 8.37482 4.16675ZM11.2499 2.91675C11.2499 3.6071 10.6903 4.16675 9.99992 4.16675C9.30956 4.16675 8.74992 3.6071 8.74992 2.91675C8.74992 2.22639 9.30956 1.66675 9.99992 1.66675C10.6903 1.66675 11.2499 2.22639 11.2499 2.91675Z"
                  stroke="#000006"
                  stroke-opacity="0.4"
                  stroke-width="1.25"
                  stroke-linecap="round"
                />
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.57055 2.33796C9.75665 1.99835 10.2435 1.99835 10.4296 2.33796L12.666 6.4189C12.8074 6.67702 13.0569 6.85792 13.3458 6.91176L17.9325 7.76657C18.3149 7.83784 18.466 8.30573 18.1978 8.58804L14.9977 11.9566C14.7937 12.1714 14.6974 12.4671 14.7358 12.7612L15.3355 17.361C15.3857 17.7461 14.9911 18.0344 14.6406 17.8688L10.418 15.874C10.1533 15.749 9.84681 15.749 9.58218 15.874L5.35954 17.8688C5.00902 18.0344 4.61446 17.7461 4.66467 17.361L5.26441 12.7612C5.30275 12.4671 5.20647 12.1714 5.00242 11.9566L1.80233 8.58805C1.53413 8.30573 1.68525 7.83784 2.06765 7.76657L6.65433 6.91176C6.94322 6.85792 7.19276 6.67702 7.33421 6.4189L9.57055 2.33796Z"
                  stroke="#000006"
                  stroke-opacity="0.4"
                  stroke-width="1.25"
                />
              </svg>
            </div>
          </div>
        </article>
      </SwiperSlide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

let tab = ref(0)
let modules = [Pagination]
</script>

<style scoped>
:deep(.swiper-pagination) {
  position: relative;
  top: 5px;
}
:deep(.swiper-pagination-bullet) {
  width: 24px;
  height: 2px;
  background: #d7dadf;
  opacity: 1 !important;
  border-radius: 0;
  transition: all 150ms;
}
:deep(.swiper-pagination-bullet-active) {
  width: 24px;
  height: 2px;
  background: #000;
  opacity: 1 !important;
  transition: all 150ms;
}
</style>
