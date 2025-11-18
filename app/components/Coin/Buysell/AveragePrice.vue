<template>
  <section class="bg-white p-3 rounded-10 mb-5">
    <h3 class="font-bold">میانگین متحرک (EMA) روبل روسیه</h3>
    <div class="grid grid-cols-2 mt-3 text-sm">
      <div class="text-center">
        <h4 class="bg-[#FAFAFA] p-3 rounded-10 mb-3">اندیکاتور</h4>
        <ul>
          <li
            class="border-b border-stroke pb-3 mb-3 last:border-none last:p-0 last:m-0"
            v-for="item in 6"
          >
            میانگین متحرک (EMA)
          </li>
        </ul>
      </div>
      <div class="">
        <div class="bg-[#FAFAFA] p-3 rounded-10 mb-3 flex justify-between">
          <h4 class="">بازه زمانی</h4>
          <h4 class="">مقدار</h4>
        </div>
        <ul>
          <li
            class="flex justify-between border-b border-stroke pb-3 mb-3 last:border-none last:p-0 last:m-0"
            v-for="item in 6"
          >
            <span>5 روز</span>
            13.127
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
