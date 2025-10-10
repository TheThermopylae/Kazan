<template>
  <div class="xl:w-3/4 m-auto">
    <UserPanelWalletNavigatePages />
    <h1 class="my-3 font-bold hidden lg:block">واریز تومان به کیف پول</h1>
    <div class="grid lg:grid-cols-2 gap-6">
      <UserPanelWalletDepositeTomanDepositForm />
      <div class="hidden lg:block">
        <UserPanelWalletDesSection />
        <UserPanelWalletDepositeTomanQuestionsSection />
        <UserPanelWalletWarnSection />
      </div>
      <Toast />
    </div>
  </div>
</template>

<script setup>
let { showToast } = useToastComp()
onMounted(() => {
  setTimeout(() => {
    showToast(
      'warn',
      'اخطار',
      'برای ساخت شناسه، نیاز است ابتدا احراز هویت خود را به سطح یک برسانید.'
    )
  })
})

definePageMeta({
  layout: 'panel-layout',
  title: 'واریز تومان'
})

useHead({
  title: 'واریز تومان |'
})
</script>
