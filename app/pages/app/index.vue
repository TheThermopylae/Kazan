<template>
  <div class="container hidden lg:block">
    <AppStepSection />
    <AppMainLinks />
    <AppSliderSection />
    <div class="grid xl:grid-cols-3 gap-2.5 my-5">
      <AppKazanLevel />
      <UserPanelWalletStats />
    </div>
    <AppBuyCrypto />
    <AppTradingMarkets />
  </div>
  <div class="lg:hidden">
    <div class="mt-5 container">
      <AppThreeStepsMobile />
      <AppBuyCrypto />
    </div>
    <AppSliderSection />
    <div class="container">
      <AppMainLinks />
      <AppReceiveCredit />
      <AppCurrencySlider />
      <AppRubPrice />
    </div>
    <AppCryptoSectionMobile />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'خانه |'
})
</script>
