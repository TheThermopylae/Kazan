<template>
  <section class="mt-10">
    <div class="text-center mb-5">
      <h3 class="text-xl font-bold mb-2">سوالات متداول قیمت بیت کوین</h3>
      <p>اطلاعات مربوط به قیمت بیت کوین در این بخش جمع آوری شده</p>
    </div>
    <CoinPriceTheAccordion v-for="item in 5" />
  </section>
</template>

