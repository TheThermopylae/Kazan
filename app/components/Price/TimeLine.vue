<template>
  <section
    class="bg-white border border-stroke rounded-10 p-3 flex justify-between items-center gap-14"
  >
    <div
      class="size-[190px] rounded-10 bg-gradient-to-bl from-[#013CAF] to-[#0155FB] flex-shrink-0 hidden md:block"
    ></div>
    <div class="w-full">
      <p class="text-sm font-bold">
        میزان بازدهی با 10 میلیون تومان سرمایه گذاری.
      </p>
      <div
        class="rounded-full bg-[#F6F6F6] border border-stroke p-1 grid grid-cols-4 my-4 text-sm"
      >
        <button
          @click="tab = 0"
          class="p-1.5 rounded-full transition"
          :class="{ 'bg-white shadow': tab == 0 }"
        >
          1 ساعت
        </button>
        <button
          @click="tab = 1"
          class="p-1.5 rounded-full transition"
          :class="{ 'bg-white shadow': tab == 1 }"
        >
          1 روز
        </button>
        <button
          @click="tab = 2"
          class="p-1.5 rounded-full transition"
          :class="{ 'bg-white shadow': tab == 2 }"
        >
          1 هفته
        </button>
        <button
          @click="tab = 3"
          class="p-1.5 rounded-full transition"
          :class="{ 'bg-white shadow': tab == 3 }"
        >
          1 سال
        </button>
      </div>
      <div
        class="rounded-10 py-2 px-3 bg-failbg flex justify-between items-center"
      >
        <div class="flex items-center gap-2 text-bar text-xs">
          <span class="text-black font-bold text-[16px]">10,000,000</span>
          روبل روسیه
        </div>
        <span class="flex items-center bg-[#FFDCDC] text-fail py-1 px-2 rounded">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8093 5.55925C10.8912 5.47722 10.9372 5.36602 10.9372 5.25008C10.9372 5.13415 10.8912 5.02295 10.8093 4.94092H3.19094C3.10901 5.02295 3.06299 5.13415 3.06299 5.25008C3.06299 5.36602 3.10901 5.47722 3.19094 5.55925L6.69094 9.05925C6.77297 9.14118 6.88417 9.1872 7.0001 9.1872C7.11604 9.1872 7.22724 9.14118 7.30927 9.05925L10.8093 5.55925Z"
              fill="#F65555"
            />
          </svg>
          1.19%
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
let tab = ref('')
</script>
