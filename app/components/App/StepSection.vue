<template>
  <section class="hidden lg:block">
    <p class="mb-3 pt-3 font-bold">
      برای شروع سرمایه‌گذاری و تبادل پول بین ایران و کشورهای دیگر، گام به گام به
      جلو برو!
    </p>
    <Stepper value="1" linear class="w-full" pt:step="!p-0">
      <StepList>
        <Step value="1"></Step>
        <Step value="2"></Step>
        <Step value="3"></Step>
      </StepList>
    </Stepper>
    <div class="flex mt-3 gap-2">
      <div class="bg-[#E5F2FF] dark:bg-secdark w-[40%] rounded p-3">
        <h4 class="font-bold mb-1">تکمیل ثبت نام</h4>
        <p class="text-sm">در کمتر از 1 دقیق ثبت نام خود را تکمیل کنید</p>
        <Button
          label="تکمیل ثبت نام"
          pt:root="!text-sm !mt-5 !text-white"
          @click="showAuth = true"
        />
      </div>
      <div
        class="bg-white dark:bg-maindark rounded p-3 flex-grow relative opacity-50"
      >
        <h4 class="font-bold mb-1">واریز به کیف پول</h4>
        <svg
          class="text-gray-400 absolute bottom-3"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3M9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9z"
          />
        </svg>
        <Button
          label="تکمیل ثبت نام"
          pt:root="!text-sm !mt-5 !text-white"
          @click="showData = true"
        />
      </div>
      <div
        class="bg-white dark:bg-maindark rounded p-3 flex-grow relative opacity-50"
      >
        <h4 class="font-bold mb-1">اولین معامله</h4>
        <svg
          class="text-gray-400 absolute bottom-3"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3M9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9z"
          />
        </svg>
      </div>
    </div>
    <!-- <AuthMobileCompleteAuth />
    <AuthMonitorCompleteAuth />
    <DataMobileData />
    <DataMonitorData /> -->
  </section>
</template>

<script setup>
let showAuth = ref(false)
let showData = ref(false)

provide('showAuth', showAuth)
provide('showData', showData)
</script>
