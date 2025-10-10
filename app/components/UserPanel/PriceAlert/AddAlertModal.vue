<template>
  <Dialog
    v-model:visible="visible"
    modal
    style="width: 375px"
    pt:header="ltr-dir !p-3"
    pt:content="!p-3"
  >
    <template #header>
      <div
        class="tooltip tooltip-right !text-red-500"
        data-tip="به محض رسیدن قیمت ارز به قیمت هدف، به شما اطلاع‌رسانی خواهد شد"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="cursor-pointer"
        >
          <path
            d="M12 8.5V13.5M12.01 16H12M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="#252525"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <h3 class="absolute left-1/2 -translate-x-1/2">گوش به زنگ جدید</h3>
    </template>
    <template #closebutton>
      <button
        @click="visible = false"
        class="size-8 rounded-10 flex-center bg-[#F9F9F9] hover:bg-[#0000000d] transition"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16699 4.16699L15.8337 15.8337M15.8337 4.16699L4.16699 15.8337"
            stroke="#252525"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </template>
    <div>
      <Select
        :pt="{
          option: ({ context }) => ({
            class: context.selected ? '!bg-transparent !text-primary' : ''
          }),
          root: '!rounded-lg !border-stroke dark:!border-secdark !items-center !shadow-none dark:!bg-darkbg',
          label: '!py-2 !text-sm'
        }"
        v-model="selectedFrom"
        :options="crypto"
        filter
        optionLabel="name"
        placeholder="ارز مورد نظر را انتخاب کنید"
        class="w-full"
      >
        <template #value="slotProps">
          <div v-if="slotProps.value" class="flex items-center">
            <NuxtImg
              :alt="slotProps.value.label"
              :src="`/crypto/${slotProps.value.name}.svg`"
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
            <NuxtImg
              alt="test"
              :src="`/crypto/${slotProps.option.name}.svg`"
              class="ml-2"
              style="width: 18px"
            />
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
        <template #emptyfilter>نتیجه ای پیدا نشد.</template>
      </Select>
      <input
        type="number"
        class="my-2 border border-stroke w-full rounded-lg py-2 px-3 text-sm placeholder:text-sm"
        placeholder="قیمت هدف"
      />
      <p class="bg-[#F5F6F7] text-2sm py-1 px-2">
        قیمت فعلی 11.540.285.351 تومان
      </p>
    </div>
    <div
      class="bg-[#ECECEC] dark:bg-secdark rounded-full text-sm p-0.5 grid grid-cols-2 my-8"
    >
      <button
        class="p-2 rounded-full cursor-pointer transition"
        :class="{ 'bg-white dark:bg-maindark shadow': value == 0 }"
        @click="value = 0"
      >
        فقط یکبار اطلاع بده
      </button>
      <button
        class="p-2 rounded-full cursor-pointer transition"
        :class="{ 'bg-white dark:bg-maindark shadow': value == 1 }"
        @click="value = 1"
      >
        هربار اطلاع بده
      </button>
    </div>
    <div class="text-sm mb-5">
      <div class="flex items-center gap-2">
        <Checkbox v-model="notif" binary disabled />
        اعلان(notification)
      </div>
      <div class="flex items-center gap-2 my-3">
        <Checkbox v-model="email" binary />
        ایمیل
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="telegram" binary />
        تلگرام
      </div>
    </div>
    <Button label="فعال کردن گوش به زنگ" pt:root="!w-full" />
  </Dialog>
</template>

<script setup>
const visible = inject('visible')

const selectedFrom = ref({ name: 'RUB' })
const crypto = ref([
  { name: 'RUB' },
  { name: 'BTC' },
  { name: 'USDT' },
  { name: 'EURO' }
])

let value = ref(0)

let notif = ref(true)
let email = ref(false)
let telegram = ref(false)
</script>
