<template>
  <section class="text-sm">
    <div class="flex justify-between text-[#505050]">
      <h4>نام ارز</h4>
      <div class="flex gap-5">
        <h4>قیمت</h4>
        <h4>24H</h4>
      </div>
    </div>
    <div class="mt-5">
      <div
        class="flex justify-between items-center mb-5 last:m-0"
        v-for="item in 10"
        :key="item"
      >
        <div class="flex items-center gap-2">
          <img src="/crypto/RUB.svg" class="size-6" />
          <div>
            <h4 class="mb-1">RUB / <span class="text-secondary">TMN</span></h4>
            <h5 class="text-2sm">
              <span class="text-secondary">تومان</span> / روبل
            </h5>
          </div>
        </div>
        <div class="flex items-center gap-5">
          <div class="text-left">
            51.2155
            <span class="text-2sm text-secondary block">تومان</span>
          </div>
          <span class="text-[#F65555]">1%-</span>
        </div>
      </div>
    </div>
  </section>
</template>
