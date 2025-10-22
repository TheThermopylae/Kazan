<template>
  <div class="mb-5">
    <label class="text-sm block mb-2">انتخاب ارز</label>
    <Select
      v-model="props.data.currency"
      :options="coins"
      optionLabel="name"
      placeholder="انتخاب ارز"
      class="w-full"
      :pt="{
        option: ({ context }) => ({
          class: context.selected
            ? '!bg-transparent !txt-white !rounded-xl'
            : ''
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
            :alt="slotProps.value.code"
            :src="`/userpanel/wallet/deposit/${slotProps.value.code}.svg`"
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
            :alt="slotProps.option.code"
            :src="`/userpanel/wallet/deposit/${slotProps.option.code}.svg`"
            class="ml-2 size-6"
          />
          <div class="text-sm">
            {{ slotProps.option.name }}
          </div>
        </div>
      </template>
    </Select>
  </div>
</template>

<script setup>
let props = defineProps(['data'])

const coins = ref([
  { name: 'روبل روسیه', code: 'RUS' },
  { name: 'تومان ایران', code: 'IRN' }
])
</script>
