<template>
  <div class="xl:w-3/4 m-auto">
    <UserPanelWalletNavigateDeposit />
    <h1 class="mt-3 mb-6 font-bold hidden lg:block">واریز ارز دیجیتال به کیف پول</h1>
    <div class="grid lg:grid-cols-2 gap-6">
      <UserPanelWalletDepositCryptoDepositForm />
      <div class="hidden lg:block">
        <UserPanelWalletDesSection />
        <UserPanelWalletDepositQuestionsSection />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'panel-layout',
  title: 'واریز ارز دیجیتال'
})

useHead({
  title: 'واریز ارز دیجیتال |'
})
</script>
