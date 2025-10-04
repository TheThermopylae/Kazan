<template>
  <UserPanelWalletDepositeTomanQuestionsSection class="mt-3" />
</template>

<script setup>
definePageMeta({
  layout: 'panel-layout',
  title: 'پشتیبانی'
})

useHead({
  title: '| راهنمای واریز'
})

function checkWidth () {
  if (window.innerWidth >= 1024) return navigateTo('/app/wallet/money-deposit')
}

onMounted(() => {
  checkWidth()
  window.addEventListener('resize', checkWidth)
})
</script>
