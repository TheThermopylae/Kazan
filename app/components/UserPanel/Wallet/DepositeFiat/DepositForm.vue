<template>
  <section>
    <p class="text-xs text-center my-6 lg:mt-0">
      بیش از 25هزار تراکنش واریز موفق تا این لحظه
    </p>
    <NuxtLink
      to="/"
      class="flex justify-center items-center gap-1 text-primary text-2sm mb-6"
    >
      راهنمای واریز ارزهای بانکی در کازان
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.167 4L6.20659 7.90572C6.15379 7.95779 6.15379 8.04221 6.20659 8.09428L10.167 12"
          stroke="#0057FF"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </NuxtLink>
    <label class="font-bold text-xs mb-2 block">انتخاب ارز</label>
    <div
      class="relative mb-6 bg-white rounded-10 border border-stroke py-4 px-2 flex justify-between items-center"
    >
      <div class="flex items-center gap-2 text-sm">
        <NuxtImg src="/userpanel/wallet/RUS.svg" class="size-6" />
        روبل روسیه
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9.5L11.8586 15.4406C11.9367 15.5198 12.0633 15.5198 12.1414 15.4406L18 9.5"
          stroke="#282930"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <UserPanelWalletDepositeFiatOriginCard class="mb-6" />
    <label class="font-bold text-xs mb-2 block" id="price">مقدار واریز</label>
    <div class="relative">
      <InputNumber v-model="value" inputId="price" fluid />
      <span
        class="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-secondary"
        >تومان</span
      >
    </div>
    <div class="grid grid-cols-4 gap-1 md:gap-3 mt-3 mb-10 text-sm text-bar">
      <button
        class="border border-stroke rounded-full py-1.5 bg-white transition"
        :class="{ '!bg-selected': value == item }"
        v-for="item in btnValues"
        :key="item"
        @click="value = item"
      >
        {{ item.toLocaleString() }}
      </button>
    </div>
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
let value = ref(10000000)

let btnValues = ref([10000000, 25000000, 50000000, 100000000])
let openWhatsapp = ref(true)
</script>

<style scoped>
:deep(.p-inputnumber-input) {
  border: 1px solid #00000636;
  font-size: 14px !important;
  color: #0000069e !important;
  padding: 12px;
  background: #f5f6f7 !important;
}

:deep(.p-inputnumber-input:focus) {
  border: 1px solid #00000636;
}
</style>
