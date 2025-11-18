<template>
  <section class="mt-10">
    <div class="flex justify-between items-center mb-5">
      <h3 class="flex items-center gap-2 font-bold">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 6L8.5594 11.8586C8.4802 11.9367 8.4802 12.0633 8.5594 12.1414L14.5 18"
            stroke="#0057FF"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        اخبار بیت کوین
      </h3>
      <NuxtLink
        to="/"
        class="border border-primary py-1.5 px-6 text-primary text-sm rounded hover:bg-primary hover:text-white transition"
        >دیدن همه خبر های بیت کوین</NuxtLink
      >
    </div>
    <CoinPriceBtcNewsSlider />
  </section>
</template>
