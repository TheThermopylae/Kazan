<template>
  <section class="bg-white rounded p-7 my-5">
    <div class="flex justify-between items-center mb-6">
      <h2 class="font-bold">خرید و فروش آنی</h2>
      <NuxtLink to="/" class="text-sm text-primary">همه</NuxtLink>
    </div>
    <swiper
      :breakpoints="{
        1024: {
          slidesPerView: 5
        },
        1280: {
          slidesPerView: 7
        },
        1536: {
          slidesPerView: 8
        }
      }"
      :spaceBetween="10"
      class="mySwiper"
    >
      <swiper-slide v-for="item in 12">
        <article class="border border-[#F0F0F0] rounded-lg p-1 pb-3">
          <span
            class="bg-[#E1E1E1] text-[#00000666] rounded text-2sm p-0.5 block w-fit -mb-2" :class="{'invisible' : item > 2}"
            >جدید</span
          >
          <div class="flex flex-col items-center gap-1">
            <img src="/crypto/RUB.svg" alt="crypto" class="size-7" />
            <h4 class="text-xs">روبل روسیه</h4>
            <p class="text-sm">
              0.00154 <span class="text-secondary">-تتر</span>
            </p>
            <span class="text-[#039874] text-2sm">+0.35%</span>
          </div>
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
