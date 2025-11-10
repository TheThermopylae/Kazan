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
    <div class="grid md:grid-cols-3">
      <PriceAiAnalysis />
    </div>
  </div>
</template>
