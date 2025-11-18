<template>
  <article class="bg-white rounded-10 p-3 shadow-md mb-2 last:m-0 select-none">
    <div
      class="flex justify-between items-center text-sm cursor-pointer"
      @click="isOpen = !isOpen"
    >
      قیمت بیت کوین چگونه تعیین میشود ؟
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        v-if="!isOpen"
      >
        <path
          d="M5 12H19M12 5V19"
          stroke="#282930"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        v-else
      >
        <path
          d="M5 12H19"
          stroke="#282930"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <p class="text-sm mt-8" v-if="isOpen">
      بیت کوین یک ارز دیجیتال غیرمتمرکز در جهان است که قیمت آن بر اساس قدرت
      خریداران و فروشندگان (به صورت لحظه‌ای) در بازار تعیین می‌شود. بنابراین
      هیچ‌گونه نهاد متمرکزی در قیمت بیت کوین دخالت ندارد.
    </p>
  </article>
</template>

<script setup>
let isOpen = ref(false)
</script>
