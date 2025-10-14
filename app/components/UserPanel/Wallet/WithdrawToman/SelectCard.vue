<template>
  <Select
    v-model="selectedCard"
    :options="cards"
    optionLabel="name"
    placeholder="کارت خود را انتخاب کنید"
    class="w-full"
    :pt="{
      option: ({ context }) => ({
        class: context.selected ? '!bg-transparent !txt-white !rounded-xl' : ''
      }),
      root: '!border-stroke !rounded-10 !p-1',
      dropdownIcon: '!text-black',
      overlay: '!rounded-10',
      label: '!text-sm !text-black'
    }"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center">
        <img
          :alt="slotProps.value.sheba"
          src="/userpanel/wallet/blu.png"
          class="ml-2 size-6"
        />
        <div class="text-sm">
          {{ slotProps.value.sheba }}
        </div>
      </div>
      <span v-else>
        {{ slotProps.placeholder }}
      </span>
    </template>
    <template #option="slotProps">
      <div class="flex items-center">
        <img
          :alt="slotProps.option.sheba"
          src="/userpanel/wallet/blu.png"
          class="ml-2 size-6"
        />
        <div class="text-sm">
          <p class="text-xs mb-1">حساب به حساب سامان (معمولا سریعتر)</p>
          {{ slotProps.option.sheba }}
        </div>
      </div>
    </template>
  </Select>
</template>

<script setup>
const selectedCard = ref({ sheba: 'IR03200003313135135131' })
const cards = ref([
  { sheba: 'IR03200003313135135131' },
  { sheba: 'IR03200003313135135132' }
])
</script>
