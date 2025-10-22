<template>
  <section class="mt-14 select-none">
    <h2 class="text-sm mb-3">دریافت حساب مقصد مجاز</h2>
    <UserPanelWalletDepositWhatsappAccordion />
    <div
      class="bg-white border border-stroke rounded-10 p-2 overflow-hidden transition-all"
      :class="{
        'h-[163px] md:h-[107px]': openTelegram,
        'h-[41px]': !openTelegram
      }"
    >
      <div
        class="flex justify-between items-center cursor-pointer"
        @click="openTelegram = !openTelegram"
      >
        <div class="flex items-center gap-2 text-sm">
          <NuxtImg src="/userpanel/wallet/telegram.svg" class="size-6" />
          شماره تلگرام فعال شما
        </div>
        <div class="flex items-center gap-2 text-xs">
          بزودی
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="transition"
            :class="{ 'rotate-180': !openTelegram }"
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
          placeholder="شماره تماس تلگرام و پیش شماره کشور را وارد کنید."
          disabled
        />
        <Button
          label="ارسال درخواست و ادامه"
          pt:root="!bg-[#9E9E9E] !rounded-10 !py-4 !text-xs !border-none"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
let openTelegram = ref(false)
</script>
