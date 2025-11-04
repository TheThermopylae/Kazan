<template>
  <section class="mb-3 bg-white dark:bg-maindark rounded-10 p-4 mt-9">
    <div class="flex gap-2">
      <button
        class="border border-stroke dark:border-darkstroke rounded-full py-1.5 px-2 text-sm text-secondary dark:text-textdark transition"
        :class="{
          'bg-selected dark:bg-selected/20 !text-primary': table == 0
        }"
        @click="table = 0"
      >
        دعوت شده ها
      </button>
      <button
        class="border border-stroke dark:border-darkstroke rounded-full py-1.5 px-2 text-sm text-secondary dark:text-textdark transition"
        :class="{
          'bg-selected dark:bg-selected/20 !text-primary': table == 1
        }"
        @click="table = 1"
      >
        پاداش ها
      </button>
    </div>
    <div class="flex flex-col items-center text-center">
      <img src="/userpanel/referral/reward.svg" />
      <p class="mt-3 mb-10 font-bold">هنوز پاداشی دریافت نکرده‌اید!</p>
      <p class="text-sm w-2/5 mb-8">
        برای دریافت پاداش دوستانتان را دعوت کنید تا پس از ثبت‌نام و انجام معامله
        در والکس بخشی از کارمزد معامله را به صورت پاداش دریافت کنید.
      </p>
      <Button pt:root="!bg-[#171D26] !w-2/5 !border-none !rounded-lg">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.28041 8.33366C6.82265 7.8222 6.15741 7.50033 5.41699 7.50033C4.03628 7.50033 2.91699 8.61961 2.91699 10.0003C2.91699 11.381 4.03628 12.5003 5.41699 12.5003C6.15741 12.5003 6.82265 12.1785 7.28041 11.667M7.28041 8.33366C7.67628 8.77596 7.91699 9.36003 7.91699 10.0003C7.91699 10.6406 7.67628 11.2247 7.28041 11.667M7.28041 8.33366L12.2259 5.00033M7.28041 11.667L12.2259 15.0003M12.2259 15.0003C12.1338 15.261 12.0837 15.5415 12.0837 15.8337C12.0837 17.2144 13.2029 18.3337 14.5837 18.3337C15.9644 18.3337 17.0837 17.2144 17.0837 15.8337C17.0837 14.4529 15.9644 13.3337 14.5837 13.3337C13.4951 13.3337 12.5691 14.0293 12.2259 15.0003ZM12.2259 5.00033C12.1338 4.73968 12.0837 4.45919 12.0837 4.16699C12.0837 2.78628 13.2029 1.66699 14.5837 1.66699C15.9644 1.66699 17.0837 2.78628 17.0837 4.16699C17.0837 5.5477 15.9644 6.66699 14.5837 6.66699C13.4951 6.66699 12.5691 5.97132 12.2259 5.00033Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>

        اشتراک گذاری لینک دعوت
      </Button>
    </div>
  </section>
</template>

<script setup>
let route = useRoute()
let table = ref(0)
</script>
