<template>
  <section class="pt-6 lg:p-0">
    <p class="text-xs text-center mb-2.5">
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
    <UserPanelWalletDepositFiatSelectCurrency :data="data" />
    <UserPanelWalletDepositFiatOriginCard :data="data" class="mb-6" />
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
    <UserPanelWalletDepositWhatsappAccordion />
  </section>
</template>

<script setup>
let value = ref(10000000)

let btnValues = ref([10000000, 25000000, 50000000, 100000000])

let data = reactive({
  currency: '',
  bank: ''
})
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
