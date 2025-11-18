<template>
  <div class="container mt-8">
    <CoinTopLinks />
    <CoinBreadCrumbsLink />
    <CoinBuysellTopData />
    <CoinBuysellTitleSection />
    <div class="flex justify-between items-start gap-3">
      <div class="w-2/3 gap-3">
        <CoinBuysellLastPrice />
        <CoinBuysellAboutBtc />
        <CoinBuysellAccordionsSection />
        <CoinBuysellHowToBuy />
        <CoinPriceCommentsSection />
      </div>
      <div class="flex-grow">
        <CoinBuysellSellBtc v-if="sellType" @changeType="changeCalcType" />
        <CoinBuysellBuyBtc v-else @changeType="changeCalcType" />
        <CoinBuysellAddTo />
        <CoinBuysellCurrencyPrices />
        <CoinBuysellAveragePrice />
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'خرید بیت کوین با کارمزد صفر |'
})

let sellType = ref(true)

function changeCalcType () {
  sellType.value = !sellType.value
}
</script>
