<template>
  <section class="col-span-2">
    <swiper :space-between="10" :slidesPerView="2.5" :pagination="true" :modules="modules" class="mySwiper !h-full">
      <SwiperSlide v-for="item in 10" :key="item">
        <CoinPriceAnalysisCard />
      </SwiperSlide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

let modules = [Pagination]
</script>
