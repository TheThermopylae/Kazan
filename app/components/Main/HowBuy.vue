<template>
  <section class="mt-10 lg:mt-20 mb-10">
    <p
      class="text-sm lg:text-lg font-bold text-center lg:text-right mb-8 lg:m-0"
    >
      چگونه روبل روسیه بخریم؟
    </p>
    <div class="md:flex items-center justify-between">
      <NuxtImg
        src="/main/questions.svg"
        alt="questions"
        class="md:w-1/2 block m-auto mb-8 md:m-0"
      />
      <div class="flex-grow">
        <h3 class="text-sm md:text-[16px] lg:text-xl font-bold mb-6">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </h3>
        <ul class="w-fit text-xs md:text-sm">
          <li class="mb-3">
            راهی مطمئن برای ورودی مطمئن به بازارهای بدون مرز جهانی
          </li>
          <li class="mb-3">شفافیت و غیرمتمرکز بودن بازار رمزارزها</li>
          <li class="mb-3">
            حفظ ارزش دارایی در برابر تورم و بحران‌های اقتصادی
          </li>
          <li>تراکنش‌های سریع با کمترین کارمزد</li>
          <li class="flex justify-end">
            <NuxtLink
              to="/"
              class="primary text-sm md:text-sm flex items-center w-fit p-2 gap-3 rounded-tl-[50px] rounded-tr-lg rounded-br-[20px] rounded-bl-[50px]"
            >
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6852 9.79577L13.75 0.945401C13.745 0.896474 13.7206 0.850141 13.6852 0.814781M4.70423 0.814781L13.5546 0.75C13.6035 0.755032 13.6499 0.77942 13.6852 0.814781M13.6852 0.814781L1.25 13.25"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              ورود یا ثبت نام
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="md:flex justify-between mt-10 relative">
      <div class="flex-grow">
        <h3 class="text-sm md:text-[16px] lg:text-xl font-bold mb-6">
          دریافت رسید
        </h3>
        <ul class="w-fit text-xs md:text-sm">
          <li class="mb-3">
            راهی مطمئن برای ورودی مطمئن به بازارهای بدون مرز جهانی
          </li>
          <li class="mb-3">شفافیت و غیرمتمرکز بودن بازار رمزارزها</li>
          <li class="mb-3">
            حفظ ارزش دارایی در برابر تورم و بحران‌های اقتصادی
          </li>
          <li>تراکنش‌های سریع با کمترین کارمزد</li>
        </ul>
        <div class="absolute bottom-10 hidden md:flex gap-5">
          <button
            v-for="item in 4"
            class="size-8 lg:size-[42px] text-xs rounded-full flex-center cursor-pointer"
            :class="{ primary: currentTab == item }"
            @click="currentTab = item"
          >
            {{ item }}
          </button>
        </div>
      </div>
      <NuxtImg
        src="/main/receipt.svg"
        alt="receipt"
        class="md:w-1/2 block m-auto mb-8 md:m-0"
      />
      <div class="flex md:hidden justify-center gap-5 relative bottom-5">
        <button
          v-for="item in 4"
          class="size-8 lg:size-[42px] text-xs rounded-full flex-center cursor-pointer"
          :class="{ primary: currentTab == item }"
          @click="currentTab = item"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
let currentTab = ref(1)
</script>
