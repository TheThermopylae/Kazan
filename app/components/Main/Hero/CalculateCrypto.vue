<template>
  <div class="bg-white text-black rounded-10 w-[415px] hidden lg:block">
    <div class="grid grid-cols-3 text-[#252525] text-sm">
      <span
        class="text-center border-b py-3 cursor-pointer"
        :class="{
          'border-[#D2D2D2]': type !== 'buy',
          'border-[#039874] border-b-2': type === 'buy'
        }"
        @click="type = 'buy'"
        >خرید</span
      >
      <span
        class="text-center border-b py-3 cursor-pointer"
        :class="{
          'border-[#D2D2D2]': type !== 'sell',
          'border-[#F65555] border-b-2': type === 'sell'
        }"
        @click="type = 'sell'"
        >فروش</span
      >
      <span
        class="text-center border-b py-3 cursor-pointer"
        :class="{
          'border-[#D2D2D2]': type !== 'exchange',
          'border-primary border-b-2': type === 'exchange'
        }"
        @click="type = 'exchange'"
        >تبدیل</span
      >
    </div>
    <div class="p-5">
      <MainHeroBuyCrypto v-if="type == 'buy'" />
      <MainHeroSellCrypto v-if="type == 'sell'" />
      <MainHeroExchangeCrypto v-if="type == 'exchange'" />
    </div>
  </div>
</template>

<script setup>
let type = ref('buy')
</script>
