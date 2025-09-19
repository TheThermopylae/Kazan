<template>
  <section class="bg-white rounded p-3">
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
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
      طراحان گرافیک است
    </p>
    <NuxtLink to="/" class="text-primary text-left block mt-10"
      >اطلاعات بیشتر</NuxtLink
    >
  </section>
</template>

<script setup>
let value = ref(0)
</script>
