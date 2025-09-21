<template>
  <section>
    <div class="bg-white dark:bg-maindark rounded p-3">
      <div class="flex justify-between items-center">
        <h2>لورم ایپسوم متن</h2>
        <div class="bg-[#ECECEC] dark:bg-secdark rounded-full text-xs p-1 flex">
          <button
            class="px-2 py-1.5 rounded-full cursor-pointer transition"
            :class="{ 'bg-white dark:bg-maindark shadow': value == 0 }"
            @click="value = 0"
          >
            تومان
          </button>
          <button
            class="px-2 py-1.5 rounded-full cursor-pointer transition"
            :class="{ 'bg-white dark:bg-maindark shadow': value == 1 }"
            @click="value = 1"
          >
            روبل
          </button>
        </div>
      </div>
      <div
        class="bg-[#F5F6F7] dark:bg-secdark rounded p-2 my-5 text-[#00000666] dark:text-white"
      >
        <div class="flex justify-between text-xs">
          <h3>لورم ایپسوم متن</h3>
          ثابت
        </div>
        <div class="flex justify-between items-center text-xs mt-2.5">
          <span class="primary px-1.5 py-1 rounded-full">سطح 1</span>
          %0.35
        </div>
      </div>
      <div class="flex justify-between text-sm mb-4">
        <p>لورم ایپسوم متن ساختگی با</p>
        0
      </div>
      <p class="text-sm text-[#00000666] dark:text-white">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است
      </p>
      <NuxtLink to="/" class="text-primary text-left block mt-10"
        >اطلاعات بیشتر</NuxtLink
      >
    </div>
    <NuxtLink
      to="/"
      class="bg-white dark:bg-maindark rounded p-3 mt-1.5 flex items-center justify-between text-sm"
    >
      <div class="flex items-center gap-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="10" fill="#00B88A" fill-opacity="0.5" />
          <circle cx="10" cy="10" r="8" fill="#00B88A" />
        </svg>
        لورم ایپسوم متن ساختگی با تولید سادگی
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 1024 1024"
      >
        <path
          fill="currentColor"
          d="M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.59 30.59 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.59 30.59 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0"
        />
      </svg>
    </NuxtLink>
  </section>
</template>

<script setup>
let value = ref(0)
</script>
