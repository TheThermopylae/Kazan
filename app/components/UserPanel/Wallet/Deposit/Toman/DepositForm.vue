<template>
  <section class="pt-6 lg:p-0">
    <p class="text-xs text-center mb-6">
      بیش از 25هزار تراکنش واریز موفق تا این لحظه
    </p>
    <label class="font-bold text-xs mb-2 block" id="price">مبلغ واریز</label>
    <div class="relative">
      <InputNumber
        v-model="value"
        inputId="price"
        fluid
        @input="value = $event.value"
      />
      <span
        class="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-secondary"
        >تومان</span
      >
    </div>
    <div class="grid grid-cols-4 gap-1 md:gap-3 mt-3 mb-10 text-sm text-bar">
      <button
        class="border border-stroke rounded-full py-1.5 bg-white transition"
        :class="{ '!bg-selected': value == item }"
        v-for="item in btnValues"
        :key="item"
        @click="value = item"
      >
        {{ item.toLocaleString() }}
      </button>
    </div>
    <h2 class="font-bold text-xs mb-2">روش واریز</h2>
    <ul class="grid md:grid-cols-2 lg:grid-cols-1 gap-2.5">
      <li>
        <NuxtLink
          :to="
            '/app/wallet/money-deposit/card-to-card' ? value <= 10_000_000 : ''
          "
          class="flex justify-between items-center border border-[#00000633] rounded-10 px-4 py-4 h-[77px]"
          :class="{
            'bg-gradient-to-l from-[#D3F2FF] to-white': value <= 10_000_000,
            'disable-link': value > 10_000_000
          }"
        >
          <div class="flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.3457 16.1982L16.1747 3.36816M18.6317 11.0562L16.4317 13.2562M14.5547 15.1102L13.5757 16.0892"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3.175 16.141C2.80249 15.7686 2.50699 15.3265 2.30538 14.8399C2.10377 14.3533 2 13.8317 2 13.305C2 12.7783 2.10377 12.2567 2.30538 11.7701C2.50699 11.2835 2.80249 10.8414 3.175 10.469L10.469 3.175C10.8414 2.80249 11.2835 2.50699 11.7701 2.30538C12.2567 2.10377 12.7783 2 13.305 2C13.8317 2 14.3533 2.10377 14.8399 2.30538C15.3265 2.50699 15.7686 2.80249 16.141 3.175L20.825 7.859C21.1975 8.23139 21.493 8.67351 21.6946 9.16012C21.8962 9.64672 22 10.1683 22 10.695C22 11.2217 21.8962 11.7433 21.6946 12.2299C21.493 12.7165 21.1975 13.1586 20.825 13.531L13.531 20.825C13.1586 21.1975 12.7165 21.493 12.2299 21.6946C11.7433 21.8962 11.2217 22 10.695 22C10.1683 22 9.64672 21.8962 9.16012 21.6946C8.67351 21.493 8.23139 21.1975 7.859 20.825L3.175 16.141Z"
                stroke="black"
                stroke-width="1.5"
              />
              <path
                d="M4 22H20"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <div>
              <h3 class="text-sm">کارت به کارت</h3>
              <span class="text-2sm text-primary" v-if="value <= 10_000_000"
                >پیشنهاد کازان</span
              >
            </div>
          </div>
          <div class="flex items-center gap-4 text-xs">
            حداکثر 30 دقیقه
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.66699 4L5.70659 7.90572C5.65379 7.95779 5.65379 8.04221 5.70659 8.09428L9.66699 12"
                stroke="#282930"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/app/wallet/money-deposit/card-to-card"
          class="flex justify-between items-center border border-[#00000633] rounded-10 px-4 py-4 h-[77px]"
          :class="{
            'bg-gradient-to-l from-[#D3F2FF] to-white': value > 10_000_000
          }"
        >
          <div class="flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.262 3.6C13.196 2.532 12.662 2 12 2C11.338 2 10.804 2.533 9.738 3.6C9.098 4.24 8.464 4.536 7.552 4.536C6.756 4.536 5.622 4.382 5 5.009C4.382 5.632 4.536 6.761 4.536 7.552C4.536 8.464 4.239 9.098 3.599 9.738C2.533 10.804 2 11.338 2 12C2 12.662 2.533 13.196 3.6 14.262C4.316 14.979 4.536 15.442 4.536 16.448C4.536 17.244 4.382 18.378 5.009 19C5.632 19.617 6.761 19.464 7.552 19.464C8.523 19.464 8.992 19.654 9.685 20.347C10.275 20.937 11.066 22 12 22C12.934 22 13.725 20.937 14.315 20.347C15.009 19.654 15.477 19.464 16.448 19.464C17.239 19.464 18.368 19.618 18.991 19M18.991 19C19.618 18.378 19.464 17.244 19.464 16.448C19.464 15.442 19.684 14.979 20.4 14.262C21.467 13.196 22 12.662 22 12C22 11.338 21.467 10.804 20.401 9.738M18.991 19H19"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 9.5L12 13L21 3"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>
              <h3 class="text-sm">پایا و سانتا</h3>
              <span class="text-2sm text-primary" v-if="value > 10_000_000"
                >پیشنهاد کازان</span
              >
            </div>
          </div>
          <div class="flex items-center gap-4 text-xs">
            سیکل های پایا
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.66699 4L5.70659 7.90572C5.65379 7.95779 5.65379 8.04221 5.70659 8.09428L9.66699 12"
                stroke="#282930"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/app/wallet/money-deposit/card-to-card"
          class="flex justify-between items-center border border-[#00000633] rounded-10 px-4 py-4 h-[77px]"
          :class="{
            'bg-gradient-to-l from-[#D3F2FF] to-white': value > 10_000_000
          }"
        >
          <div class="flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8.57C2 7.373 2.482 6.64 3.48 6.084L7.59 3.797C9.743 2.6 10.82 2 12 2C13.18 2 14.257 2.6 16.41 3.797L20.52 6.084C21.517 6.64 22 7.373 22 8.57C22 8.894 22 9.057 21.965 9.19C21.779 9.89 21.144 10.001 20.531 10.001H3.469C2.856 10.001 2.222 9.891 2.035 9.19C2 9.056 2 8.894 2 8.57Z"
                stroke="black"
                stroke-width="1.5"
              />
              <path
                d="M11.9961 7H12.0051"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 10V18.5M8 10V18.5M16 10V18.5M20 10V18.5M19 18.5H5C4.20435 18.5 3.44129 18.8161 2.87868 19.3787C2.31607 19.9413 2 20.7044 2 21.5C2 21.6326 2.05268 21.7598 2.14645 21.8536C2.24021 21.9473 2.36739 22 2.5 22H21.5C21.6326 22 21.7598 21.9473 21.8536 21.8536C21.9473 21.7598 22 21.6326 22 21.5C22 20.7044 21.6839 19.9413 21.1213 19.3787C20.5587 18.8161 19.7956 18.5 19 18.5Z"
                stroke="black"
                stroke-width="1.5"
              />
            </svg>
            <h3 class="text-sm">سپرده به سپرده</h3>
          </div>
          <div class="flex items-center gap-4 text-xs">
            حداکثر 30 دقیقه
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.66699 4L5.70659 7.90572C5.65379 7.95779 5.65379 8.04221 5.70659 8.09428L9.66699 12"
                stroke="#282930"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </NuxtLink>
      </li>
      <li
        class="border border-[#00000633] rounded-10 px-4 py-4 h-[77px] flex justify-between items-center"
      >
        <div class="flex items-center gap-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.3457 16.1982L16.1747 3.36816M18.6317 11.0562L16.4317 13.2562M14.5547 15.1102L13.5757 16.0892"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3.175 16.141C2.80249 15.7686 2.50699 15.3265 2.30538 14.8399C2.10377 14.3533 2 13.8317 2 13.305C2 12.7783 2.10377 12.2567 2.30538 11.7701C2.50699 11.2835 2.80249 10.8414 3.175 10.469L10.469 3.175C10.8414 2.80249 11.2835 2.50699 11.7701 2.30538C12.2567 2.10377 12.7783 2 13.305 2C13.8317 2 14.3533 2.10377 14.8399 2.30538C15.3265 2.50699 15.7686 2.80249 16.141 3.175L20.825 7.859C21.1975 8.23139 21.493 8.67351 21.6946 9.16012C21.8962 9.64672 22 10.1683 22 10.695C22 11.2217 21.8962 11.7433 21.6946 12.2299C21.493 12.7165 21.1975 13.1586 20.825 13.531L13.531 20.825C13.1586 21.1975 12.7165 21.493 12.2299 21.6946C11.7433 21.8962 11.2217 22 10.695 22C10.1683 22 9.64672 21.8962 9.16012 21.6946C8.67351 21.493 8.23139 21.1975 7.859 20.825L3.175 16.141Z"
              stroke="black"
              stroke-width="1.5"
            />
            <path
              d="M4 22H20"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <h3 class="text-sm text-[#252525]/50">کارت بهپرداخت خودکار کارت</h3>
        </div>
        <div class="flex items-center gap-4 text-xs">
          <span class="bg-[#9E9E9E] rounded-full text-xs px-2 py-1.5"
            >غیرفعال</span
          >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.66699 4L5.70659 7.90572C5.65379 7.95779 5.65379 8.04221 5.70659 8.09428L9.66699 12"
              stroke="#282930"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
let value = ref(10_000_000)

let btnValues = ref([10000000, 25000000, 50000000, 100000000])

// watch(value, () => {
//   console.log(value.value)
// })
</script>

<style scoped>
:deep(.p-inputnumber-input) {
  border: 1px solid #00000636;
  font-size: 14px !important;
  color: #0000069e !important;
  padding: 12px;
  background: #f5f6f7 !important;
}

:deep(.p-inputnumber-input:focus) {
  border: 1px solid #00000636;
}

.disable-link {
  border-color: rgb(109, 109, 109) 00666 !important;
  color: #00000666 !important;
}
</style>
