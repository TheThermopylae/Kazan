<template>
  <section
    class="bg-gradient-to-b from-primary to-[#003499] text-white flx-grow p-3 rounded-10"
  >
    <div class="flex items-center gap-3 mb-3">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 12C21 16.714 21 19.071 19.682 20.535C18.364 21.999 16.242 22 12 22C7.758 22 5.636 22 4.318 20.535C3 19.072 3 16.714 3 12C3 7.286 3 4.929 4.318 3.464C5.636 1.999 7.758 2 12 2C16.242 2 18.364 2 19.682 3.464C20.558 4.438 20.852 5.807 20.95 8"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M7 8C7 7.535 7 7.303 7.051 7.112C7.11919 6.85787 7.25303 6.62614 7.43909 6.44009C7.62514 6.25403 7.85687 6.12019 8.111 6.052C8.304 6 8.536 6 9 6H15C15.465 6 15.697 6 15.888 6.051C16.1421 6.11919 16.3739 6.25303 16.5599 6.43909C16.746 6.62514 16.8798 6.85687 16.948 7.111C17 7.304 17 7.536 17 8C17 8.464 17 8.697 16.949 8.888C16.8808 9.14213 16.747 9.37386 16.5609 9.55991C16.3749 9.74597 16.1431 9.87981 15.889 9.948C15.697 10 15.464 10 15 10H9C8.535 10 8.303 10 8.112 9.949C7.85787 9.88081 7.62614 9.74697 7.44009 9.56091C7.25403 9.37486 7.12019 9.14313 7.052 8.889C7 8.696 7 8.464 7 8Z"
          stroke="white"
          stroke-width="1.5"
        />
        <path
          d="M8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z"
          fill="white"
        />
        <path
          d="M8 18C8.55228 18 9 17.5523 9 17C9 16.4477 8.55228 16 8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18Z"
          fill="white"
        />
        <path
          d="M12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z"
          fill="white"
        />
        <path
          d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z"
          fill="white"
        />
        <path
          d="M16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12C15.4477 12 15 12.4477 15 13C15 13.5523 15.4477 14 16 14Z"
          fill="white"
        />
        <path
          d="M16 18C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16C15.4477 16 15 16.4477 15 17C15 17.5523 15.4477 18 16 18Z"
          fill="white"
        />
      </svg>
      <div>
        <h2 class="font-bold !text-white">ماشین حساب بیت کوین</h2>
        <p class="text-xs mt-2">تبدیل بیت کوین و دلار</p>
      </div>
    </div>
    <div>
      <div class="bg-[#E5E5E52B] rounded-10 p-2.5 flex justify-between">
        <div class="dropdown dropdown-start">
          <div
            tabindex="0"
            role="button"
            class="flex items-center gap-2 text-sm cursor-pointer"
          >
            <img
              class="size-6"
              :src="`/crypto/${currency}.svg`"
              :alt="`${currency} Icon`"
            />
            {{ currency }}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9.5L11.8586 15.4406C11.9367 15.5198 12.0633 15.5198 12.1414 15.4406L18 9.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
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
          class="text-white flex-grow"
          style="direction: ltr"
        />
      </div>
      <div class="my-2.5 bg-[#E5E5E52B] rounded-10 p-2.5 flex justify-between">
        <div class="flex items-center gap-2 text-sm">
          <img class="size-6" src="/crypto/BTC.svg" alt="BTC Icon" />
          BTC
        </div>
        <input
          type="number"
          class="text-white flex-grow"
          style="direction: ltr"
        />
      </div>
    </div>
    <div class="text-xs mb-3">
      <p class="mb-3">قیمت بیت کوین به تومان برابر است با: 11.261.564.151</p>
      <p>قیمت بیت کوین به تتر برابر است با: 108.232</p>
    </div>
    <button
      class="bg-white text-primary text-center p-3 block rounded-10 w-full hover:opacity-95 transition"
    >
      خرید آسان بیت کوین
    </button>
  </section>
</template>

<script setup>
let currency = ref('RUB')
</script>
