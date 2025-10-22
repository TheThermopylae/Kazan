<template>
  <section>
    <div class="flex justify-between text-sm mb-2">
      <h3>مبدأ مجاز</h3>
      <NuxtLink to="/" class="flex items-center gap-2 text-primary">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.12029 3.34789C8.69852 3.06242 11.3004 3.06242 13.8786 3.34789C15.3061 3.50789 16.4578 4.63205 16.6253 6.06455C16.9308 8.67955 16.9308 11.3212 16.6253 13.9362C16.4578 15.3687 15.3061 16.4929 13.8786 16.6529C11.3004 16.9383 8.69852 16.9383 6.12029 16.6529C4.69279 16.4929 3.54112 15.3687 3.37362 13.9362C3.06817 11.3215 3.06817 8.68011 3.37362 6.06538C3.45835 5.36944 3.7756 4.72251 4.27398 4.22942C4.77236 3.73634 5.42265 3.42601 6.11946 3.34872M9.99946 5.83955C10.1652 5.83955 10.3242 5.9054 10.4414 6.02261C10.5586 6.13982 10.6245 6.29879 10.6245 6.46455V9.37538H13.5353C13.701 9.37538 13.86 9.44123 13.9772 9.55844C14.0944 9.67565 14.1603 9.83462 14.1603 10.0004C14.1603 10.1661 14.0944 10.3251 13.9772 10.4423C13.86 10.5595 13.701 10.6254 13.5353 10.6254H10.6245V13.5362C10.6245 13.702 10.5586 13.8609 10.4414 13.9782C10.3242 14.0954 10.1652 14.1612 9.99946 14.1612C9.83369 14.1612 9.67472 14.0954 9.55751 13.9782C9.4403 13.8609 9.37446 13.702 9.37446 13.5362V10.6254H6.46362C6.29786 10.6254 6.13889 10.5595 6.02168 10.4423C5.90447 10.3251 5.83862 10.1661 5.83862 10.0004C5.83862 9.83462 5.90447 9.67565 6.02168 9.55844C6.13889 9.44123 6.29786 9.37538 6.46362 9.37538H9.37446V6.46455C9.37446 6.29879 9.4403 6.13982 9.55751 6.02261C9.67472 5.9054 9.83369 5.83955 9.99946 5.83955Z"
            fill="#0057FF"
          />
        </svg>
        افزودن کارت جدید
      </NuxtLink>
    </div>
    <Select
      :disabled="!props.data.currency"
      v-model="selectedCard"
      :options="banks"
      optionLabel="img"
      placeholder="کارت خود را انتخاب کنید"
      class="w-full"
      :pt="{
        option: ({ context }) => ({
          class: context.selected
            ? '!bg-transparent !txt-white !rounded-xl'
            : ''
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
            :alt="slotProps.value.number"
            :src="`/userpanel/wallet/${slotProps.value.img}`"
            class="ml-2 size-6"
          />
          <div class="text-sm">
            {{ slotProps.value.number }}
            <p class="text-secondary text-xs">
              {{ slotProps.value.des }}
            </p>
          </div>
        </div>
        <span v-else>
          {{ slotProps.placeholder }}
        </span>
      </template>
      <template #option="slotProps">
        <div class="flex items-center">
          <img
            :alt="slotProps.option.number"
            :src="`/userpanel/wallet/${slotProps.option.img}`"
            class="ml-2 size-6"
          />
          <div class="text-sm">
            {{ slotProps.option.number }}
            <p class="text-xs mb-1">{{ slotProps.option.des }}</p>
          </div>
        </div>
      </template>
    </Select>
  </section>
</template>

<script setup>
let props = defineProps(['data'])

const selectedCard = ref(null)
const cards = ref([
  {
    number: 'IR03200003313135135131',
    des: 'blu bank',
    img: 'blu.png',
    country: 'IRN'
  },
  {
    number: 'IR03200003313135135132',
    des: 'mirbusiness bank',
    img: 'mirbusiness.svg',
    country: 'RUS'
  }
])

let banks = computed(() => {
  return cards.value.filter(card => card.country == props.data.currency.code)
})

watch(props.data, () => {
  selectedCard.value = null
})
</script>
