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
          راهی مطمئن برای مدیریت دارایی‌های بین‌المللی
        </h3>
        <ul class="w-fit text-xs md:text-sm">
          <li class="mb-3">
            دسترسی آسان به روبل، یوان، پوند و دیگر ارزهای معتبر جهانی
          </li>
          <li class="mb-3">حفظ ارزش سرمایه در برابر تورم و نوسان‌های تومانی</li>
          <li class="mb-3">
            انتقال سریع به حساب بانکی در هر کشور با کنترل کامل روی دارایی
          </li>
          <li class="mb-3">
            حواله‌های تجاری یا پرداخت‌های بین‌المللی با حفظ ارزش دارایی
          </li>
          <li class="mb-3">تراکنش‌ها شفاف، مطمئن و بدون کارمزد</li>
          <li>ذخیره ارز برای شهریه دانشگاه</li>
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
        src="/main/bank.svg"
        alt="bank"
        class="md:w-1/3 block m-auto mb-8 md:m-0"
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
