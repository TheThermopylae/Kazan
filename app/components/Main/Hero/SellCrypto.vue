<template>
  <div>
    <span>تبدیل از</span>
    <div class="grid grid-cols-2">
      <Select
        :key="selectedFrom.name"
        :pt="{
          option: ({ context }) => ({
            class: context.selected ? '!bg-transparent !text-primary' : ''
          }),
          root: '!rounded-l-none !rounded-r-[5px] !border-[#D2D2D2] !items-center',
          label: '!py-0 !text-sm'
        }"
        v-model="selectedFrom"
        :options="filteredFromOptions"
        filter
        optionLabel="name"
        placeholder="ارز مورد نظر را انتخاب کنید"
        class="w-full"
      >
        <template #value="slotProps">
          <div v-if="slotProps.value" class="flex items-center">
            <img
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
            <img
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
        :key="selectedFrom.name + '-input'"
        type="text"
        :placeholder="'مقدار به ' + selectedFrom.name"
        class="border border-[#D2D2D2] px-3 py-3.5 rounded-l-[5px]"
        v-model="fromValue"
      />
    </div>
    <svg
      @click="changeCrypto"
      class="m-auto my-5 cursor-pointer"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7.05556L7.89121 2.03706C7.92125 2.01235 7.96063 2 8 2M13 7.05556L8.10879 2.03706C8.07875 2.01235 8.03937 2 8 2M8 2V16M12 16.9444L16.8912 21.9629C16.9213 21.9876 16.9606 22 17 22M22 16.9444L17.1088 21.9629C17.0787 21.9876 17.0394 22 17 22M17 22V8"
        stroke="#282930"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
    <span>تبدیل به</span>
    <div class="grid grid-cols-2">
      <Select
        :key="selectedTo.name"
        :pt="{
          option: ({ context }) => ({
            class: context.selected ? '!bg-transparent !text-primary' : ''
          }),
          root: '!rounded-l-none !rounded-r-[5px] !border-[#D2D2D2] !items-center',
          label: '!py-0 !text-sm'
        }"
        v-model="selectedTo"
        :options="filteredToOptions"
        filter
        optionLabel="name"
        placeholder="ارز مورد نظر را انتخاب کنید"
        class="w-full"
      >
        <template #value="slotProps">
          <div v-if="slotProps.value" class="flex items-center">
            <img
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
            <img
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
        :key="selectedTo.name + '-input'"
        type="text"
        :placeholder="'مقدار به ' + selectedTo.name"
        class="border border-[#D2D2D2] px-3 py-3.5 rounded-l-[5px]"
        v-model="toValue"
      />
    </div>
    <p class="text-center text-2sm my-3 text-secdark">
      1 {{ selectedTo.name }} = 111.46 {{ selectedFrom.name }}
    </p>
    <button
      class="bg-[#F65555] text-white rounded-lg w-full p-3.5 text-xs cursor-pointer"
      @click="buyCryptoFunc"
    >
      شروع فروش
    </button>
    <Toast />
  </div>
</template>

<script setup>
let { showToast } = useToastComp()

const selectedFrom = ref({ name: 'RUB' })
const selectedTo = ref({ name: 'BTC' })

const fromValue = ref('')
const toValue = ref('')

const crypto = ref([
  { name: 'RUB' },
  { name: 'BTC' },
  { name: 'USDT' },
  { name: 'EURO' }
])

const filteredToOptions = computed(() => {
  return crypto.value.filter(c => c.name !== selectedFrom.value?.name)
})

const filteredFromOptions = computed(() => {
  return crypto.value.filter(c => c.name !== selectedTo.value?.name)
})

function changeCrypto () {
  let from = selectedFrom.value
  let to = selectedTo.value

  selectedFrom.value = to
  selectedTo.value = from
}

function buyCryptoFunc () {
  if (!fromValue.value || !toValue.value)
    showToast('warn', 'اخطار', 'باید مقادیر را وارد کنید')
  else showToast('خرید با موفقیت انجام شد')
}
</script>

<style scoped>
span {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

input {
  text-align: left;
  font-size: 14px;
}

input::placeholder {
  text-align: left;
  font-size: 14px;
}
</style>
