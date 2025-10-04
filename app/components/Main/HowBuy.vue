<template>
  <section class="mt-10 lg:mt-20 mb-10">
    <p
      class="text-sm lg:text-lg font-bold text-center lg:text-right mb-8 lg:m-0"
    >
      چگونه روبل روسیه بخریم؟
    </p>
    <div class="md:flex items-center justify-between">
      <NuxtImg
        src="/main/questions.png"
        alt="questions"
        class="md:w-1/2 block m-auto mb-8 md:m-0 relative"
        quality="50"
        format="webp"
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
        <h3
          class="text-sm md:text-[16px] lg:text-xl font-bold mb-6"
          v-if="currentTab == 1"
        >
          دریافت رسید
        </h3>
        <h3
          class="text-sm md:text-[16px] lg:text-xl font-bold mb-6"
          v-else-if="currentTab == 2"
        >
          ورود به بازار ارزهای بانکی و دیجیتال و ثبت سفارش
        </h3>
        <h3
          class="text-sm md:text-[16px] lg:text-xl font-bold mb-6"
          v-else-if="currentTab == 3"
        >
          مدیریت کیف پول و دریافت وجه
        </h3>
        <h3
          class="text-sm md:text-[16px] lg:text-xl font-bold mb-6"
          v-else-if="currentTab == 4"
        >
          تکمیل مراحل احراز هویت (KYC)
        </h3>
        <ul class="w-fit text-xs md:text-sm" v-if="currentTab == 1">
          <li class="mb-3">
            راهی مطمئن برای ورودی مطمئن به بازارهای بدون مرز جهانی
          </li>
          <li class="mb-3">شفافیت و غیرمتمرکز بودن بازار رمزارزها</li>
          <li class="mb-3">
            حفظ ارزش دارایی در برابر تورم و بحران‌های اقتصادی
          </li>
          <li>تراکنش‌های سریع با کمترین کارمزد</li>
        </ul>
        <p v-else-if="currentTab == 2" class="md:w-2/5 text-xs md:text-sm">
          برای خرید و فروش ارزهای بانکی از جمله روبل روسیه، یوان چین و یورو، یا
          ارزهای دیجیتال مانند بیت‌کوین و تتر کافی است به بازار اختصاصی هر ارز
          وارد شوید و سفارش خود را ثبت کنید.
        </p>
        <p v-else-if="currentTab == 3" class="md:w-2/5 text-xs md:text-sm">
          با کیف پول اختصاصی صرافی کازان می‌توانید سرمایه خود را به‌صورت امن
          نگهداری کرده، برای سرمایه‌گذاری یا ترید استفاده کنید یا موجودی خود را
          به کارت بانکی و ولت شخصی منتقل کنید
        </p>
        <p v-else-if="currentTab == 4" class="md:w-2/5 text-xs md:text-sm">
          انجام مراحل احراز هویت پیشرفته، دسترسی کامل به تمام امکانات پلتفرم‌ را
          برای شما فراهم می‌کند.
        </p>
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
        v-show="currentTab == 1"
        src="/main/bank.svg"
        alt="bank"
        class="size-[250px] md:size-[400px] block m-auto mb-8 md:m-0 mt-5 md:mt-0"
        quality="80"
        format="webp"
      />
      <NuxtImg
        v-show="currentTab == 2"
        src="/main/Enter-To-Market.svg"
        alt="market"
        class="size-[250px] md:size-[400px] block m-auto mb-8 md:m-0 mt-5 md:mt-0"
        quality="80"
        format="webp"
      />
      <NuxtImg
        v-show="currentTab == 3"
        src="/main/Manage-Wallet.svg"
        alt="wallet"
        class="size-[250px] md:size-[400px] block m-auto mb-8 md:m-0 mt-5 md:mt-0"
        quality="80"
        format="webp"
      />
      <NuxtImg
        v-show="currentTab == 4"
        src="/main/KYC.svg"
        alt="kyc"
        class="size-[250px] md:size-[400px] block m-auto mb-8 md:m-0 mt-5 md:mt-0"
        quality="80"
        format="webp"
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
