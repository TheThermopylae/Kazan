<template>
  <UserPanelWalletNavigatePages />

  <div class="grid lg:grid-cols-2 gap-6">
    <UserPanelWalletDepositeInternationDepositForm />
    <UserPanelWalletDepositeInternationQuestionsSection class="hidden lg:block" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'panel-layout',
  title: 'واریز تومان'
})

useHead({
  title: '| واریز تومان'
})
</script>
