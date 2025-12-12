<template>
  <ClientOnly>
    <div
      class="border-b border-[#F0F0F0] dark:border-secdark px-3 pb-3 lg:px-4"
    >
      <div class="text-xs mb-3">
        <label for="country-select" class="text-xs">کشور صادر کننده</label>
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
          optionLabel="name"
          placeholder="ارز مورد نظر را انتخاب کنید"
          class="w-full"
        >
          <template #value="slotProps">
            <div v-if="slotProps.value" class="flex items-center">
              <img :src="`/app/iran.png`" class="ml-2" style="width: 18px" />
              <div>{{ slotProps.value.name }}</div>
            </div>
            <span v-else>{{ slotProps.placeholder }}</span>
          </template>
          <template #option="slotProps">
            <div class="flex items-center">
              <img :src="`/app/iran.png`" class="ml-2" style="width: 18px" />
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </Select>
      </div>

      <div class="text-xs mb-3">
        <label for="bank-select" class="text-xs">نام بانک</label>
        <Select
          :pt="{
            option: ({ context }) => ({
              class: context.selected ? '!bg-transparent !text-primary' : ''
            }),
            root: '!rounded-10 !border-none !bg-[#EFEFEF] !items-center !shadow-none dark:!bg-darkbg !h-10 !mt-2',
            label: '!py-3 !text-sm'
          }"
          v-model="bank"
          :options="bankOptions"
          editable
          optionLabel="name"
          placeholder="نام بانک را انتخاب یا تایپ کنید"
          class="w-full"
          @change="handleBankChange"
        >
          <template #value="slotProps">
            <div
              v-if="slotProps.value && typeof slotProps.value === 'object'"
              class="flex items-center"
            >
              <i
                v-if="
                  slotProps.value.nickname &&
                  slotProps.value.nickname !== 'other'
                "
                :class="`ibl32 ibl-${slotProps.value.nickname}`"
              ></i>
              <div>{{ slotProps.value.name }}</div>
            </div>

            <div
              v-else-if="slotProps.value && typeof slotProps.value === 'string'"
              class="flex items-center"
            >
              <div>{{ slotProps.value }}</div>
            </div>

            <span v-else>
              {{ slotProps.placeholder }}
            </span>
          </template>

          <template #option="slotProps">
            <div class="flex items-center">
              <i
                v-if="slotProps.option.nickname !== 'other'"
                :class="`ibl32 ibl-${slotProps.option.nickname}`"
              ></i>
              <span
                v-else
                class="size-[32px] flex items-center justify-center font-bold text-lg ml-1"
                >...</span
              >
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>

          <template #emptyfilter>نتیجه ای پیدا نشد.</template>
        </Select>
      </div>

      <div v-if="bank">
        <div class="text-xs">
          <label class="text-xs mb-2 block">شماره کارت بانکی</label>
          <div class="relative">
            <input
              type="number"
              class="bg-[#EFEFEF] dark:bg-secdark block w-full rounded-10 p-3"
              placeholder="6219000000000000"
              style="direction: ltr"
              v-model="cardNumber"
            />
            <img
              v-if="cardInfo"
              :src="cardInfo?.logo"
              class="size-[18px] absolute top-1/2 -translate-y-1/2 right-3"
            />
          </div>
        </div>
        <div class="text-xs my-3">
          <label class="text-xs">شماره شبا</label>
          <InputMask
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
    </div>

    <div class="px-2 py-3 lg:px-4">
      <Button
        label="ثبت و ادامه"
        pt:root="!text-sm !w-full !text-white"
        @click="stepTwoFunc"
      />
    </div>
  </ClientOnly>
</template>

<script setup>
import 'iranianbanklogos/dist/ibl.css'
import { getBankByCardNumber } from 'iran-bank-detector'
import { isShebaValid } from '@persian-tools/persian-tools'

let emit = defineEmits(['toStepTwo', 'showError'])

let { showToast } = useToastComp()

const country = ref({ name: 'تومان ایران' })

// فرض: دیتا درست فچ شده
let { data } = await useFetch('/api/db/banks/get')

// ساختن یک لیست جدید که گزینه "دیگر" رو تهش داشته باشه
const bankOptions = computed(() => {
  if (!data.value) return []
  return [
    ...data.value,
    { name: 'دیگر(نام بانک خود را بنویسید)', nickname: 'other' } // گزینه جدید
  ]
})

const countries = ref([
  { name: 'تومان ایران' },
  { name: 'روبل روسیه' },
  { name: 'درهم امارات' }
])

let { cardForm } = cardFormComp()

let cardNumber = ref('')
let cardSheba = ref('760570077700012402748001')
let cardInfo = ref('')
let validSheba = ref('')

let bank = ref('')

// لاجیک هندل کردن گزینه دیگر
const handleBankChange = event => {
  if (bank.value && bank.value.nickname === 'other') {
    setTimeout(() => {
      bank.value = null // یا ''
    }, 50)
  }
}

function stepTwoFunc () {
  console.log(cardNumber.value,cardInfo.value)
  if (!cardNumber.value || !cardSheba.value || !country.value || !bank.value)
    showToast('warn', 'اخطار', 'باید تمامی فیلد ها را پر کنید')
  else if (bank.value.name != cardInfo.value.bankName)
    showToast(
      'warn',
      'اخطار',
      'شماره کارت وارد شده با بانک انتخاب شده مطابقت ندارد'
    )
  else if (!validSheba.value)
    showToast('warn', 'اخطار', 'شماره شبای وارد شده معبتر نیست')
  else {
    cardForm.value.card_number = cardNumber.value
    cardForm.value.bank_logo_image = cardInfo.value.logo
    cardForm.value.bank_name = bank.value.name
    emit('toStepTwo')
  }
}

watch(cardNumber, () => {
  cardInfo.value = getBankByCardNumber(String(cardNumber.value))
})

watch(cardSheba, () => {
  let sheba = `IR${cardSheba.value}`
  validSheba.value = isShebaValid(sheba)
})
</script>
