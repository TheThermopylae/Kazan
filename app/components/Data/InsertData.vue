<template>
  <ClientOnly>
    <div
      class="border-b border-[#F0F0F0] dark:border-secdark px-3 pb-3 lg:px-4"
    >
      <div class="text-xs mb-3">
        <label for="email-phone" class="text-xs">نام</label>
        <Select
          :pt="{
            option: ({ context }) => ({
              class: context.selected ? '!bg-transparent !text-primary' : ''
            }),
            root: '!rounded-10 !border-none !bg-[#EFEFEF] !items-center !shadow-none dark:!bg-darkbg !h-10 !mt-2',
            label: '!py-3 !text-sm'
          }"
          v-model="country"
          :options="countries"
          filter
          optionLabel="name"
          placeholder="ارز مورد نظر را انتخاب کنید"
          class="w-full"
        >
          <template #value="slotProps">
            <div v-if="slotProps.value" class="flex items-center">
              <img
                :alt="slotProps.value.label"
                :src="`/app/iran.png`"
                class="ml-2"
                style="width: 18px"
              />
              <div>{{ slotProps.value.name }}</div>
            </div>
            <span v-else>
              {{ slotProps.placeholder }}
            </span>
          </template>
          <template #option="slotProps">
            <div class="flex items-center">
              <img
                alt="test"
                :src="`/app/iran.png`"
                class="ml-2"
                style="width: 18px"
              />
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
          <template #emptyfilter>نتیجه ای پیدا نشد.</template>
        </Select>
      </div>
      <div class="text-xs">
        <label for="email-phone" class="text-xs mb-2 block"
          >شماره کارت بانکی</label
        >
        <div class="relative">
          <input
            type="number"
            id="card-number"
            class="bg-[#EFEFEF] dark:bg-secdark block w-full rounded-10 p-3"
            placeholder="6219000000000000"
            style="direction: ltr"
            v-model="cardNumber"
          />
          <img
            v-if="cardInfo"
            :src="cardInfo?.logo"
            :alt="cardInfo?.id"
            class="size-[18px] absolute top-1/2 -translate-y-1/2 right-3"
          />
        </div>
      </div>
      <div class="text-xs my-3">
        <label for="sheba" class="text-xs">شماره شبا</label>
        <InputMask
          id="sheba"
          v-model="cardSheba"
          mask="999999999999999999999999"
          pt:root="!bg-[#EFEFEF] !border-[#EFEFEF] !block !p-3 !text-xs !w-full !rounded-10 !mt-2 ltr-dir"
          :class="{
            '!border-[#EFEFEF]': validSheba,
            '!border-red-500': validSheba === false
          }"
        />
      </div>
    </div>
    <div class="px-2 py-3 lg:px-4">
      <Button
        label="ثبت و ادامه"
        pt:root="!text-sm !w-full !text-white"
        @click="$emit('toStepTwo')"
      />
    </div>
  </ClientOnly>
</template>
<script setup>
import { getBankByCardNumber } from 'iran-bank-detector'
import { isShebaValid } from '@persian-tools/persian-tools'

let emit = defineEmits(['toStepTwo', 'showError'])

const country = ref({ name: 'تومان ایران' })

const countries = ref([
  { name: 'تومان ایران' },
  { name: 'روبل روسیه' },
  { name: 'درهم امارات' }
])

let cardNumber = ref('')
let cardSheba = ref('')

let cardInfo = ref('')
let validSheba = ref('')

watch(cardNumber, () => {
  cardInfo.value = getBankByCardNumber(String(cardNumber.value))
})

watch(cardSheba, () => {
  let sheba = `IR${cardSheba.value}`
  validSheba.value = isShebaValid(sheba)
})
</script>
