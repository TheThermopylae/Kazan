<template>
  <section class="my-5">
    <swiper
      :slidesPerView="2"
      :breakpoints="{
        // 450: {
        // },
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
      :spaceBetween="8"
      class="mySwiper"
    >
      <swiper-slide v-for="item in 12">
        <article class="rounded-lg p-3 bg-white">
          <div class="flex flex-col items-center gap-1">
            <img src="/crypto/RUB.svg" alt="crypto" class="size-7" />
            <p class="text-center text-sm my-3 w-2/3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
          </div>
          <div class="grid grid-cols-2 gap-1.5 text-sm text-center">
            <NuxtLink to="/" class="bg-[#00B88A] rounded-r-full p-2 text-white"
              >صعودی</NuxtLink
            >
            <NuxtLink to="/" class="bg-[#F65555] rounded-l-full p-2 text-white"
              >نزولی</NuxtLink
            >
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
