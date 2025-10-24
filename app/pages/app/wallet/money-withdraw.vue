<template>
  <div class="xl:w-11/12 m-auto">
    <UserPanelWalletWithdrawBackBtn />
    <div class="xl:bg-white xl:p-5 rounded-10">
      <UserPanelWalletNavigateWithdraw />
      <div class="grid lg:grid-cols-2 gap-10 mt-4 lg:mt-8">
        <UserPanelWalletWithdrawTomanWithdrawForm />
        <UserPanelWalletDesSection />
      </div>
    </div>
    <UserPanelWalletWithdrawTomanLastWithdrawToman />ّ
  </div>
  <Toast />
</template>

<script setup>
let { showToast } = useToastComp()
onMounted(() => {
  setTimeout(() => {
    showToast(
      'warn',
      'اخطار',
      'سطح کاربری شما برای دسترسی به این بخش کافی نیست, سطح کاربری شما : 0 , سطح کاربری مورد نیاز : 1'
    )
  })
})

definePageMeta({
  layout: 'panel-layout',
  title: 'برداشت تومان'
})

useHead({
  title: 'برداشت تومان |'
})
</script>
