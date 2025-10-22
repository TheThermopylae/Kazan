<template>
  <UserPanelWalletDepositTomanBackBtn />
  <div class="lg:w-1/2 m-auto mt-4">
    <section class="mb-10">
      <h2 class="font-bold text-sm">کارت به کارت</h2>
      <p class="text-sm mt-1 mb-2">
        با استفاده از اطلاعات زیر مبلغ مورد نظرتان را به کیف پول خود در صرافی
        کازان انتقال دهید.کارت به کارت
      </p>
      <NuxtLink to="/" class="text-primary text-2sm flex items-center gap-1">
        راهنمای واریز تومانی در کازان
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.66699 4L5.70659 7.90572C5.65379 7.95779 5.65379 8.04221 5.70659 8.09428L9.66699 12"
            stroke="#0057FF"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </NuxtLink>
    </section>
    <UserPanelWalletDepositTomanSelectAccount />
    <UserPanelWalletDepositTomanDestinationAccount />
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
