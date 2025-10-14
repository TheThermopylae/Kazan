<template>
  <section>
    <div class="mb-5">
      <label class="text-sm block mb-2">انتخاب کوین</label>
      <UserPanelWalletWithdrawCryptoSelectCoin :data="data" />
    </div>
    <div class="mb-5">
      <label class="text-sm block mb-2">انتخاب شبکه</label>
      <UserPanelWalletWithdrawCryptoNetworkType :data="data" />
    </div>
    <UserPanelWalletWithdrawCryptoWalletAddress />
    <UserPanelWalletWithdrawValue :label="'مقدار برداشت'" />
    <UserPanelWalletWithdrawTypeWithdraw />
    <div class="text-xs">
      <div class="flex justify-between">
        <h4>کارمزد برداشت:</h4>
        3.5 تتر
      </div>
      <div class="flex justify-between my-4">
        <h4>مقدار دریافتی شما:</h4>
        118.5 تتر
      </div>
      <Button label="درخواست برداشت" pt:root="!w-full !rounded-lg !p-3" />
    </div>
  </section>
</template>

<script setup>
let data = reactive({ coin: '' })
</script>
