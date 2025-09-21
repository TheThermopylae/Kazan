<template>
  <swiper
    :breakpoints="{
      320: {
        slidesPerView: 1.2,
        centeredSlides: true
      },
      1300: {
        slidesPerView: 3
      }
    }"
    :spaceBetween="10"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="h-[155px] w-full bg-primary rounded"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="h-[155px] w-full bg-primary rounded"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="h-[155px] w-full bg-primary rounded"></div>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

let modules = [Pagination]
</script>
