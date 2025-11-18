<template>
  <div class="md:container mt-8">
    <CoinTopLinks />
  </div>
  <div class="container">
    <div class="lg:flex justify-between items-start gap-5">
      <div class="lg:w-[70%] xl:w-2/3">
        <CoinBreadCrumbsLink />
        <CoinPriceLastPrice />
        <CoinPriceTheCalculator class="lg:hidden" />
        <CoinPriceChangesPrice />
        <CoinPriceTimeLine />
      </div>
      <div class="sticky top-20 w-full lg:w-[30%] xl:w-1/3">
        <CoinPriceTheCalculator class="hidden lg:block" />
        <CoinPriceAlert />
      </div>
    </div>
    <div class="my-8 flex flex-col-reverse md:flex-row gap-5 md:items-start">
      <CoinPriceCryptoAttrs />
      <CoinPriceRealTimePrice />
    </div>
    <div class="grid lg:grid-cols-2 gap-2">
      <CoinPriceExchangePerformance />
      <CoinPriceCurrencyPerformance />
    </div>
    <CoinPriceChangeCurrencies />
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
    <div class="flex justify-between gap-3">
      <CoinPriceAiAnalysis />
      <CoinPriceUserAnalysis />
    </div>
    <CoinPriceBtcNews />
    <CoinPriceCommentsSection />
    <CoinPriceCryptoSliders />
    <CoinPriceHowBuy />
    <CoinPriceFaqSection />
  </div>
</template>
