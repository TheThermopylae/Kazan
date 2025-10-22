<template>
  <section>
    <p class="text-xs text-center my-6 lg:mt-0">
      بیش از 25هزار تراکنش واریز موفق تا این لحظه
    </p>
    <div class="mb-5">
      <label class="text-sm block mb-2">انتخاب کوین</label>
      <UserPanelWalletWithdrawCryptoSelectCoin :data="data" />
    </div>
    <div class="mb-5">
      <label class="text-sm block mb-2">انتخاب شبکه</label>
      <UserPanelWalletWithdrawCryptoNetworkType :data="data" />
    </div>
    <UserPanelWalletWithdrawValue :label="'مقدار برداشت'" />
    <div
      class="bg-white border border-stroke rounded-10 p-2 overflow-hidden transition-all mb-2"
      :class="{
        'h-[163px] md:h-[107px]': openWhatsapp,
        'h-[41px]': !openWhatsapp
      }"
    >
      <div
        class="flex justify-between items-center cursor-pointer"
        @click="openWhatsapp = !openWhatsapp"
      >
        <div class="flex items-center gap-2 text-sm">
          <NuxtImg src="/userpanel/wallet/whatsapp.svg" class="size-6" />
          شماره واتساپ فعال شما
        </div>
        <div class="flex items-center gap-2 text-xs">
          حداکثر 30 دقیقه
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="transition"
            :class="{ 'rotate-180': !openWhatsapp }"
          >
            <path
              d="M4 9.6665L7.90572 5.7061C7.95779 5.6533 8.04221 5.6533 8.09428 5.7061L12 9.6665"
              stroke="#282930"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div class="mt-4 flex flex-col md:flex-row gap-2">
        <input
          type="text"
          class="bg-[#EFEFEF] flex-grow rounded-10 placeholder:text-xs text-xs p-4"
          placeholder="شماره تماس واتساپ و پیش شماره کشور را وارد کنید."
        />
        <Button label="درخواست واریز" pt:root="!rounded-10 !py-4 !text-xs" />
      </div>
    </div>
  </section>
</template>

<script setup>
let data = reactive({ coin: '' })

let openWhatsapp = ref(true)
</script>
