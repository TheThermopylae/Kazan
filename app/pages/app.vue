<template>
  <div class="container">
    <AppStepSection />
    <AppMainLinks />
    <AppSliderSection />
    <div class="grid xl:grid-cols-3 gap-2.5 my-5">
      <AppKazanLevel />
      <AppWalletStats />
    </div>
    <AppBuyCrypto />
    <AppTradingMarkets />
  </div>
</template>

<script setup>
useHead({
  title: '| خانه'
})
</script>
