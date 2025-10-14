<template>
  <div class="mb-5">
    <div class="flex text-sm justify-between items-center mb-2.5">
      <label class="font-bold" id="price">واریز به</label>
      <button class="flex-center gap-1 text-primary">
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
            d="M6.12078 3.34789C8.69901 3.06242 11.3009 3.06242 13.8791 3.34789C15.3066 3.50789 16.4583 4.63205 16.6258 6.06455C16.9313 8.67955 16.9313 11.3212 16.6258 13.9362C16.4583 15.3687 15.3066 16.4929 13.8791 16.6529C11.3009 16.9383 8.69901 16.9383 6.12078 16.6529C4.69328 16.4929 3.54161 15.3687 3.37411 13.9362C3.06866 11.3215 3.06866 8.68011 3.37411 6.06538C3.45883 5.36944 3.77609 4.72251 4.27447 4.22942C4.77285 3.73634 5.42314 3.42601 6.11994 3.34872M9.99994 5.83955C10.1657 5.83955 10.3247 5.9054 10.4419 6.02261C10.5591 6.13982 10.6249 6.29879 10.6249 6.46455V9.37538H13.5358C13.7015 9.37538 13.8605 9.44123 13.9777 9.55844C14.0949 9.67565 14.1608 9.83462 14.1608 10.0004C14.1608 10.1661 14.0949 10.3251 13.9777 10.4423C13.8605 10.5595 13.7015 10.6254 13.5358 10.6254H10.6249V13.5362C10.6249 13.702 10.5591 13.8609 10.4419 13.9782C10.3247 14.0954 10.1657 14.1612 9.99994 14.1612C9.83418 14.1612 9.67521 14.0954 9.558 13.9782C9.44079 13.8609 9.37494 13.702 9.37494 13.5362V10.6254H6.46411C6.29835 10.6254 6.13938 10.5595 6.02217 10.4423C5.90496 10.3251 5.83911 10.1661 5.83911 10.0004C5.83911 9.83462 5.90496 9.67565 6.02217 9.55844C6.13938 9.44123 6.29835 9.37538 6.46411 9.37538H9.37494V6.46455C9.37494 6.29879 9.44079 6.13982 9.558 6.02261C9.67521 5.9054 9.83418 5.83955 9.99994 5.83955Z"
            fill="#0057FF"
          />
        </svg>
        افزودن شماره کارت
      </button>
    </div>
    <Select
      v-model="selectedCard"
      :options="cards"
      optionLabel="name"
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
            :alt="slotProps.value.sheba"
            src="/userpanel/wallet/blu.png"
            class="ml-2 size-6"
          />
          <div class="text-sm ltr-dir">
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
          <div class="text-sm ltr-dir">
            {{ slotProps.option.sheba }}
          </div>
        </div>
      </template>
    </Select>
  </div>
</template>

<script setup>
const selectedCard = ref({ sheba: '6219 - 0000 - 0000 - 0000' })
const cards = ref([
  { sheba: '6219 - 0000 - 0000 - 0000' },
  { sheba: '6219 - 0000 - 0000 - 0001' }
])
</script>
