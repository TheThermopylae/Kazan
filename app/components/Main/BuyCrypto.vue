<template>
  <section class="mt-20 bg-white dark:bg-maindark rounded-10 p-4">
    <h2 class="text-lg mb-4">خرید آنی ارزها</h2>
    <swiper
      :spaceBetween="10"
      :breakpoints="{
        320: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 5
        },
        1024: {
          slidesPerView: 7
        },
        1280: {
          slidesPerView: 7
        },
        1400: {
          slidesPerView: 9
        }
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="item in 18">
        <article
          class="text-sm flex flex-col items-center gap-2 rounded-lg border dark:bg-[#2B2B2B] border-[#F0F0F0] dark:border-[#33323B] py-4 w-full"
        >
          <img src="/crypto/RUB.svg" alt="RUB" class="size-8" />
          <h5 class="!font-sans">روبل روسیه</h5>
          (RUB)
        </article>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
</script>
