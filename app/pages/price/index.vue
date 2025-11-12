<template>
  <div class="md:container mt-8">
    <PriceTopLinks />
  </div>
  <div class="container">
    <div class="lg:flex justify-between items-start gap-5">
      <div class="lg:w-[70%] xl:w-2/3">
        <PriceBreadCrumbsLink />
        <PriceLastPrice />
        <PriceTheCalculator class="lg:hidden" />
        <PriceChangesPrice />
        <PriceTimeLine />
      </div>
      <div class="sticky top-20 w-full lg:w-[30%] xl:w-1/3">
        <PriceTheCalculator class="hidden lg:block" />
        <PriceAlert />
      </div>
    </div>
    <div class="my-8 flex flex-col-reverse md:flex-row gap-5 md:items-start">
      <PriceCryptoAttrs />
      <PriceRealTimePrice />
    </div>
    <div class="grid lg:grid-cols-2 gap-2">
      <PriceExchangePerformance />
      <PriceCurrencyPerformance />
    </div>
    <PriceChangeCurrencies />
    <div class="grid md:grid-cols-3 gap-3">
      <h3 class="font-bold mb-5 h-[34px]">تحلیل هوش مصنوعی</h3>
      <div class="flex justify-between items-center mb-5 h-[34px] col-span-2">
        <h3 class="font-bold">تحلیل کاربران</h3>
        <div class="flex text-sm gap-6">
          <NuxtLink to="/" class="flex items-center gap-2 text-primary">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M12 5V19"
                stroke="#0057FF"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            اضافه کردن تحلیل
          </NuxtLink>
          <NuxtLink
            to="/"
            class="text-primary border border-primary px-6 py-1.5 rounded hover:bg-primary transition hover:text-white"
          >
            دیدن همه تحلیل های بیت کوین
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-3 gap-3">
      <PriceAiAnalysis />
      <PriceUserAnalysis />
    </div>
  </div>
</template>
