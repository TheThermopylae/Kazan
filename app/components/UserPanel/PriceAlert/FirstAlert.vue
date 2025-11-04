<template>
  <section
    class="bg-white p-4 rounded-10 py-7 flex flex-col items-center justify-center max-md:h-screen max-md:absolute max-md:top-0"
  >
    <div>
      <img src="/userpanel/alert/alert.svg" class="m-auto" />
      <h2 class="font-bold mt-2">گوش‌به‌زنگ‌ نوسانات بازار باشید.</h2>
    </div>
    <p class="text-sm text-center md:w-2/3 lg:w-1/2 xl:w-1/3 leading-6 my-5">
      به جای اینکه هر لحظه، قیمت ارزها را چک کنید، با ساخت گوش‌به‌زنگ‌، از رسیدن
      قیمت آن ها به قیمت دلخواهتان در لحظه با خبر شوید.
    </p>
    <button
      class="bg-[#171D26] p-2 rounded-lg flex-center gap-3 text-white w-full md:w-2/3 lg:w-1/2 xl:w-1/3"
      @click="visible = true"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.16699 10.0003H15.8337M10.0003 4.16699V15.8337"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      گوش به زنگ جدید
    </button>
  </section>
</template>

<script setup>
const visible = inject('visible')
</script>
