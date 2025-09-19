<template>
  <section>
    <div class="bg-white rounded p-3">
      <div class="flex justify-between items-center">
        <h2>لورم ایپسوم متن</h2>
        <div class="bg-[#ECECEC] rounded-full text-xs p-1 flex">
          <button
            class="px-2 py-1.5 rounded-full cursor-pointer transition"
            :class="{ 'bg-white shadow': value == 0 }"
            @click="value = 0"
          >
            تومان
          </button>
          <button
            class="px-2 py-1.5 rounded-full cursor-pointer transition"
            :class="{ 'bg-white shadow': value == 1 }"
            @click="value = 1"
          >
            روبل
          </button>
        </div>
      </div>
      <div class="bg-[#F5F6F7] rounded p-2 my-5">
        <div class="flex justify-between text-xs text-[#00000666]">
          <h3>لورم ایپسوم متن</h3>
          ثابت
        </div>
        <div
          class="flex justify-between items-center text-xs text-[#00000666] mt-2.5"
        >
          <span class="primary px-1.5 py-1 rounded-full">سطح 1</span>
          %0.35
        </div>
      </div>
      <div class="flex justify-between text-sm mb-4">
        <p>لورم ایپسوم متن ساختگی با</p>
        0
      </div>
      <p class="text-sm text-[#00000666]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است
      </p>
      <NuxtLink to="/" class="text-primary text-left block mt-10"
        >اطلاعات بیشتر</NuxtLink
      >
    </div>
    <NuxtLink
      to="/"
      class="bg-white rounded p-3 mt-1.5 flex items-center justify-between text-sm"
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
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 6L8.5594 11.8586C8.4802 11.9367 8.4802 12.0633 8.5594 12.1414L14.5 18"
          stroke="#252525"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </NuxtLink>
  </section>
</template>

<script setup>
let value = ref(0)
</script>
