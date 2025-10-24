<template>
  <div class="xl:w-11/12 m-auto">
    <UserPanelWalletWithdrawBackBtn />
    <div class="xl:bg-white xl:p-5 rounded-10">
      <UserPanelWalletNavigateWithdraw />
      <div class="grid lg:grid-cols-2 gap-10 mt-4 lg:mt-8">
        <UserPanelWalletWithdrawFiatWithdrawForm />
        <UserPanelWalletDesSection />
      </div>
    </div>
    <UserPanelWalletWithdrawLastWithdraw
      :title="'آخرین برداشت های ارز بین المللی'"
    />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'panel-layout',
  title: 'برداشت ارز دیجیتال'
})

useHead({
  title: 'برداشت ارز دیجیتال |'
})
</script>
