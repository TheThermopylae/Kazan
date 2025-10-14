<template>
  <section>
    <div class="mb-5">
      <label class="font-bold text-sm block mb-2">انتخاب ارز</label>
      <UserPanelWalletWithdrawFiatSelectCurrency />
    </div>
    <UserPanelWalletWithdrawSelectCard />
    <UserPanelWalletWithdrawValue :label="'مقدار برداشت'" />
    <UserPanelWalletWithdrawTypeWithdraw />
    <div class="text-xs">
      <div class="flex justify-between">
        <h4>کارمزد برداشت:</h4>
        0.6 روبل
      </div>
      <div class="flex justify-between my-4">
        <h4>مقدار دریافتی شما:</h4>
        0.6 روبل
      </div>
      <Button label="درخواست برداشت" pt:root="!w-full !rounded-lg !p-3" />
    </div>
  </section>
</template>
