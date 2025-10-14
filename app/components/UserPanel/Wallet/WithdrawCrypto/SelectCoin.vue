<template>
  <Select
    v-model="props.data.coin"
    :options="coins"
    optionLabel="name"
    placeholder="انتخاب کوین"
    class="w-full"
    :pt="{
      option: ({ context }) => ({
        class: context.selected ? '!bg-transparent !txt-white !rounded-xl' : ''
      }),
      root: '!border-stroke !rounded-10 !p-1 h-[50px]',
      dropdownIcon: '!text-black',
      overlay: '!rounded-10',
      label: '!text-sm !text-black'
    }"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center">
        <img
          :alt="slotProps.value.name"
          :src="`/crypto/${slotProps.value.name}.svg`"
          class="ml-2 size-6"
        />
        <div class="text-sm">
          {{ slotProps.value.name }}
        </div>
      </div>
      <span v-else>
        {{ slotProps.placeholder }}
      </span>
    </template>
    <template #option="slotProps">
      <div class="flex items-center">
        <img
          :alt="slotProps.option.name"
          :src="`/crypto/${slotProps.option.name}.svg`"
          class="ml-2 size-6"
        />
        <div class="text-sm">
          {{ slotProps.option.name }}
        </div>
      </div>
    </template>
  </Select>
</template>

<script setup>
let props = defineProps(['data'])

const coins = ref([{ name: 'BTC' }, { name: 'USDT' }])
</script>
