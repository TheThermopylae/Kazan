<template>
  <section class="bg-white p-3 rounded-10">
    <label to="/payment" class="text-sm">پرداخت میکنم</label>
    <div class="mt-2">
      <div class="bg-[#E5E5E52B] rounded-10 p-2.5 flex justify-between">
        <div class="dropdown dropdown-start border-l border-stroke pl-3">
          <div
            tabindex="0"
            role="button"
            class="flex items-center gap-2 text-sm cursor-pointer"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 5.54175L6.9175 9.0071C6.96307 9.0533 7.03693 9.0533 7.0825 9.0071L10.5 5.54175"
                stroke="#282930"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <img
              class="size-6"
              :src="`/crypto/${currency}.svg`"
              :alt="`${currency} Icon`"
            />
            {{ currency }}
          </div>
          <ul
            tabindex="-1"
            class="dropdown-content menu bg-base-100 rounded-box z-1 w-[100px] p-2 shadow-sm text-black"
          >
            <li onclick="document.activeElement.blur()">
              <a class="flex items-center gap-2" @click="currency = 'RUB'">
                RUB
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  v-if="currency == 'RUB'"
                >
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    points="2.75 8.75 6.25 12.25 13.25 4.75"
                  />
                </svg>
              </a>
            </li>
            <li onclick="document.activeElement.blur()">
              <a class="flex items-center gap-2" @click="currency = 'USDT'">
                USDT
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  v-if="currency == 'USDT'"
                >
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    points="2.75 8.75 6.25 12.25 13.25 4.75"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <input
          type="number"
          class="flex-grow"
          v-model="paymentValue"
          style="direction: ltr"
        />
      </div>
      <div class="grid grid-cols-4 gap-1.5 mt-1 text-bar">
        <button
          class="text-xs border border-stroke p-1 rounded-full"
          v-for="item in prices"
          :key="item"
          @click="paymentValue = item"
        >
          {{ item }}
        </button>
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="m-auto my-5 cursor-pointer"
        @click="$emit('changeType')"
      >
        <path
          d="M2.5 7.05556L7.39121 2.03706C7.42125 2.01235 7.46063 2 7.5 2M12.5 7.05556L7.60879 2.03706C7.57875 2.01235 7.53937 2 7.5 2M7.5 2V16M11.5 16.9444L16.3912 21.9629C16.4213 21.9876 16.4606 22 16.5 22M21.5 16.9444L16.6088 21.9629C16.5787 21.9876 16.5394 22 16.5 22M16.5 22V8"
          stroke="#282930"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <label to="/recive" class="text-sm">دریافت میکنم</label>
    <div class="bg-[#E5E5E52B] rounded-10 p-2.5 flex justify-between">
      <div class="flex items-center gap-2 pl-2 border-l border-stroke">
        <img class="size-6" src="/crypto/BTC.svg" alt="BTC Icon" />
        BTC
      </div>
      <input
        type="number"
        class="flex-grow"
        v-model="paymentValue"
        style="direction: ltr"
      />
    </div>
    <!-- </div> -->
    <div class="flex justify-between text-2sm text-secondary my-3">
      <h3>قیمت بیت کوین</h3>
      1 BTC = 11.34163483846 IRT
    </div>
    <button
      class="bg-success-c text-white text-center p-3 block rounded w-full transition text-sm relative"
    >
      خرید بیت کوین
      <span
        class="bg-[#EFBD3E] rounded-tr rounded-bl-10 text-black absolute top-0 right-0 py-0.5 px-2"
        >بدون کارمزد</span
      >
    </button>
  </section>
</template>

<script setup>
let prices = ref([5_000_000, 10_000_000, 15_000_000, 25_000_000])

let currency = ref('RUB')
let paymentValue = ref('')
</script>
