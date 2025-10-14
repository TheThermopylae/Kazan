<template>
  <div class="xl:w-11/12 m-auto">
    <NuxtLink
      class="flex items-center gap-2 font-bold text-sm"
      to="/app/wallet"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0833 4.58301L17.4603 9.88182C17.4868 9.91437 17.5 9.95702 17.5 9.99967M12.0833 15.4163L17.4603 10.1175C17.4868 10.085 17.5 10.0423 17.5 9.99967M17.5 9.99967H2.5"
          stroke="#252525"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      مشاهده کیف پول
    </NuxtLink>
    <div class="xl:bg-white xl:p-5 rounded-10 mt-7">
      <UserPanelWalletNavigateWithdraw />
      <div class="grid lg:grid-cols-2 gap-10 mt-8">
        <UserPanelWalletWithdrawTomanWithdrawForm />
        <UserPanelWalletDesSection />
      </div>
    </div>
    <UserPanelWalletWithdrawTomanLastWithdrawToman />
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
