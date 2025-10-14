<template>
  <div class="xl:w-3/4 m-auto">
    <UserPanelWalletNavigateDeposite />
    <h1 class="my-3 font-bold hidden lg:block">واریز ارز بانکی به کیف پول</h1>
    <div class="grid lg:grid-cols-2 gap-6">
      <UserPanelWalletDepositeFiatDepositForm />
      <UserPanelWalletDesSection />
      <div class="hidden lg:block">
        <UserPanelWalletDepositeFiatQuestionsSection />
      </div>
      <UserPanelWalletWarnSection />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'panel-layout',
  title: 'واریز ارز بانکی'
})

useHead({
  title: 'واریز ارز بانکی |'
})
</script>
