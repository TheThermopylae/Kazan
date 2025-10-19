<template>
  <section class="py-5 lg:py-32">
    <div
      class="container flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-10"
    >
      <div class="lg:hidden mobile">
        <swiper
          :pagination="{
            clickable: true
          }"
          :modules="modules"
          class="mySwiper !pb-12 !w-fll"
        >
          <swiper-slide class="!w-full">
            <div class="flex flex-col items-center">
              <h3 class="text-xl xl:text-3xl mb-2">خرید و فروش روبل روسیه</h3>
              <p class="text-sm mb-8 text-center">
                بهترین نرخ روز روبل روسیه در صرافی کازان، اولین صرافی ایرانی در
                روسیه.
              </p>
              <NuxtLink
                to="/app"
                class="primary p-3 text-sm rounded-md block w-fit"
                >شروع معامله روبل</NuxtLink
              >
            </div>
          </swiper-slide>
          <swiper-slide class="!w-full">
            <div class="flex flex-col items-center">
              <h3 class="text-xl xl:text-3xl mb-2">
                حواله بانکی مطمئن ایران ↔ روسیه
              </h3>
              <p class="text-sm mb-8 text-center">
                انتقال امن پول بین ایران و روسیه با پشتیبانی بانکی و پردازش
                سریع.
              </p>
              <NuxtLink
                to="/app"
                class="primary p-3 text-sm rounded-md block w-fit"
                >ارسال حواله بانکی</NuxtLink
              >
            </div>
          </swiper-slide>
          <swiper-slide class="!w-full">
            <div class="flex flex-col items-center">
              <h3 class="text-xl xl:text-3xl mb-2">
                پل مالی شما بین ایران، روسیه و جهان
              </h3>
              <p class="text-sm mb-8 text-center">
                دسترسی به خدمات بانکی و دیجیتال در یک پلتفرم یکپارچه، هرجا که
                باشید.
              </p>
              <NuxtLink
                to="/app"
                class="primary p-3 text-sm rounded-md block w-fit"
                >شروع انتقال بین المللی</NuxtLink
              >
            </div>
          </swiper-slide>
          <swiper-slide class="!w-full">
            <div class="flex flex-col items-center">
              <h3 class="text-xl xl:text-3xl mb-2">
                دوستانت را دعوت کن، پاداش بگیر
              </h3>
              <p class="text-sm mb-8 text-center">
                با معرفی دوستان به صرافی کازان، روبل پاداش بگیر؛ اولین معامله
                دوستانت = سود برای تو.
              </p>
              <NuxtLink
                to="/app"
                class="primary p-3 text-sm rounded-md block w-fit"
                >دریافت لینک دعوت</NuxtLink
              >
            </div>
          </swiper-slide>
          <swiper-slide class="!w-full">
            <div class="flex flex-col items-center">
              <h3 class="text-xl xl:text-3xl mb-2">
                به‌جای پول نقد، ارز نگه دار
              </h3>
              <p class="text-sm mb-8 text-center">
                ارز بین‌المللی مثل روبل یا یورو بخر، ارزش پولت حفظ میشه؛ هر وقت
                خواستی هم به تومان تبدیل کن و برداشت بزن.
              </p>
              <NuxtLink
                to="/app"
                class="primary p-3 text-sm rounded-md block w-fit"
                >شروع نگهداری امن پول</NuxtLink
              >
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="hidden lg:block desktop">
        <swiper
          :direction="'vertical'"
          :pagination="{
            clickable: true
          }"
          :modules="modules"
          class="mySwiper !max-h-48 !m-0 !pr-14"
        >
          <swiper-slide>
            <h3 class="text-xl xl:text-3xl mb-2">خرید و فروش روبل روسیه</h3>
            <p class="leading-8 text-sm mb-10">
              بهترین نرخ روز روبل روسیه در صرافی کازان، اولین صرافی ایرانی در
              روسیه.
            </p>
            <NuxtLink
              to="/app"
              class="primary p-3 text-sm rounded-md block w-fit"
              >شروع معامله روبل</NuxtLink
            >
          </swiper-slide>
          <swiper-slide>
            <h3 class="text-xl xl:text-3xl mb-2">
              حواله بانکی مطمئن ایران ↔ روسیه
            </h3>
            <p class="leading-8 text-sm mb-10">
              انتقال امن پول بین ایران و روسیه با پشتیبانی بانکی و پردازش سریع.
            </p>
            <NuxtLink
              to="/app"
              class="primary p-3 text-sm rounded-md block w-fit"
              >ارسال حواله بانکی</NuxtLink
            >
          </swiper-slide>
          <swiper-slide>
            <h3 class="text-xl xl:text-3xl mb-2">
              پل مالی شما بین ایران، روسیه و جهان
            </h3>
            <p class="leading-8 text-sm mb-10">
              دسترسی به خدمات بانکی و دیجیتال در یک پلتفرم یکپارچه، هرجا که
              باشید.
            </p>
            <NuxtLink
              to="/app"
              class="primary p-3 text-sm rounded-md block w-fit"
              >شروع انتقال بین المللی</NuxtLink
            >
          </swiper-slide>
          <swiper-slide>
            <h3 class="text-xl xl:text-3xl mb-2">
              دوستانت را دعوت کن، پاداش بگیر
            </h3>
            <p class="leading-8 text-sm mb-10">
              با معرفی دوستان به صرافی کازان، روبل پاداش بگیر؛ اولین معامله
              دوستانت = سود برای تو.
            </p>
            <NuxtLink
              to="/app"
              class="primary p-3 text-sm rounded-md block w-fit"
              >دریافت لینک دعوت</NuxtLink
            >
          </swiper-slide>
          <swiper-slide>
            <h3 class="text-xl xl:text-3xl mb-2">
              به‌جای پول نقد، ارز نگه دار
            </h3>
            <p class="leading-8 text-sm mb-10">
              ارز بین‌المللی مثل روبل یا یورو بخر، ارزش پولت حفظ میشه؛ هر وقت
              خواستی هم به تومان تبدیل کن و برداشت بزن.
            </p>
            <NuxtLink
              to="/app"
              class="primary p-3 text-sm rounded-md block w-fit"
              >شروع نگهداری امن پول</NuxtLink
            >
          </swiper-slide>
        </swiper>
      </div>
      <MainHeroCalculateCrypto />
    </div>
  </section>
  <Toast />
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

let modules = [Pagination]
</script>

<style scoped>
.py-5 {
  background: url('/main/candle.svg') center/cover;
}

:deep(.swiper-pagination-bullet) {
  background: #a7c2ff;
  width: 12px !important;
  height: 12px !important;
  opacity: 1;
  transition: all 0.2s;
}
:deep(.mobile .swiper-pagination-bullet-active) {
  background: #0057ff;
  width: 24px !important;
  /* height: 24px !important; */
  border-radius: 9999px;
  transition: all 0.2s;
}

:deep(.desktop .swiper-pagination-bullet-active) {
  background: #0057ff;
  /* width: 12px !important; */
  height: 24px !important;
  border-radius: 9999px;
  transition: all 0.2s;
}
</style>
