<template>
  <section>
    <swiper
      :spaceBetween="20"
      :breakpoints="{
        320: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1400: {
          slidesPerView: 4
        }
      }"
      class="mySwiper !pb-2"
    >
      <swiper-slide v-for="item in 18">
        <article
          class="p-5 rounded-[22px] bg-white dark:bg-secdark hover:shadow-md transition"
        >
          <NuxtImg
            :src="`/main/img1.svg`"
            class="w-full rounded-[20px]"
          ></NuxtImg>
          <h4 class="my-3 text-center">نحوه کار با پنل اختصاصی کازان</h4>
          <p class="mb-3 text-sm text-center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <NuxtLink
            to="/"
            class="flex items-center gap-3 justify-center text-white bg-[#33323B] rounded-xl p-3 hover:bg-primary transition"
          >
            بیشتر
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.9375 4.5L6.22462 8.16161C6.17513 8.21043 6.17513 8.28957 6.22462 8.33839L9.9375 12"
                stroke="white"
                stroke-width="1.125"
                stroke-linecap="round"
              />
            </svg>
          </NuxtLink>
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
