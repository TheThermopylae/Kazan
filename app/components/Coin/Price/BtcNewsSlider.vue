<template>
  <swiper
    :space-between="10"
    :slides-per-view="3"
    :pagination="true"
    :modules="modules"
    class="mySwiper !h-full"
  >
    <SwiperSlide v-for="item in 10" :key="item">
      <article class="p-4 bg-white border border-[#EFEFEF] rounded-10 h-full text-sm">
        <div class="rounded-10 w-full bg-primary h-[180px]" alt="banner" />
        <h4 class="font-bold mt-3 mb-5">
          شوک دوباره ترامپ به بازار با تعرفه ۱۰۰ درصدی علیه چین؛‌ سقوط همه رمزارزها
        </h4>
        <p class="text-bar border-b border-stroke pb-3 mb-3">
          در روز دهم اکتبر ۲۰۲۵، اعلام تعرفه‌های سنگین‌تر آمریکا علیه چین باعث
        </p>
        <NuxtLink to="/" class="text-[#0088FF] block text-center">خواندن</NuxtLink>
      </article>
    </SwiperSlide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

let modules = [Pagination];
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
