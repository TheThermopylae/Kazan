<template>
  <div class="hidden lg:flex items-center gap-3">
    <button
      to="/"
      class="bg-primary rounded-lg px-3 py-2 text-white hidden lg:flex items-center gap-2 cursor-pointer text-sm"
      @click="$emit('showFormFuncEmit')"
      v-if="!userLogged"
    >
      ورود یا ثبت نام
      <svg
        width="13"
        height="7"
        viewBox="0 0 13 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 0.916626L6.38215 5.86713C6.44724 5.93313 6.55276 5.93313 6.61785 5.86713L11.5 0.916626"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </button>
    <!-- <NuxtLink
      to="/myaccount"
      v-else
      class="border border-primary rounded-lg px-3 py-2 text-primary hidden lg:flex items-center gap-2 cursor-pointer text-sm hover:bg-primary hover:text-white transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21px"
        height="21px"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m19.632 7.106l-6.466-4.018a2.23 2.23 0 0 0-2.359 0L4.341 7.106A2.23 2.23 0 0 0 3.33 9.33l1.669 10.016a2.225 2.225 0 0 0 2.226 1.858H9.76v-3.65a1.56 1.56 0 0 1 1.558-1.558h1.335a1.56 1.56 0 0 1 1.558 1.558v3.695h2.56a2.226 2.226 0 0 0 2.226-1.859l1.669-10.015a2.23 2.23 0 0 0-1.035-2.27M7.535 10.878h8.903"
        />
      </svg>
      داشبورد
    </NuxtLink> -->
    <div class="flex gap-3">
      <div class="dropdown dropdown-end dropdown-hover">
        <div class="h-18 flex justify-end items-center cursor-pointer">
          <div class="size-[30px] flex-center">
            <NuxtLink to="/app/wallet">
              <svg
                tabindex="0"
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" stroke-width="1">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M6 10h4"
                  />
                  <path
                    stroke-width="1.5"
                    d="M20.833 11h-2.602C16.446 11 15 12.343 15 14s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148c-.036-.501-.465-.9-1.005-.933c-.035-.002-.076-.002-.16-.002Z"
                  />
                  <path
                    stroke-width="1.5"
                    d="M20.965 11c-.078-1.872-.328-3.02-1.137-3.828C18.657 6 16.771 6 13 6h-3C6.229 6 4.343 6 3.172 7.172S2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="m6 6l3.735-2.477a3.24 3.24 0 0 1 3.53 0L17 6"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.991 14h.01"
                  />
                </g>
              </svg>
            </NuxtLink>
          </div>
        </div>
        <ul
          class="dropdown-content menu bg-white dark:bg-darkbg rounded-box z-1 w-[275px] max-h-[80vh] overflow-auto flex-nowrap p-2 shadow-sm"
        >
          <li class="border-b border-gray-200 dark:border-secdark pb-1">
            <NuxtLink to="/app/wallet" class="p-2 dark:hover:bg-secdark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" stroke-width="1">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M6 10h4"
                  />
                  <path
                    stroke-width="1.5"
                    d="M20.833 11h-2.602C16.446 11 15 12.343 15 14s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148c-.036-.501-.465-.9-1.005-.933c-.035-.002-.076-.002-.16-.002Z"
                  />
                  <path
                    stroke-width="1.5"
                    d="M20.965 11c-.078-1.872-.328-3.02-1.137-3.828C18.657 6 16.771 6 13 6h-3C6.229 6 4.343 6 3.172 7.172S2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="m6 6l3.735-2.477a3.24 3.24 0 0 1 3.53 0L17 6"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.991 14h.01"
                  />
                </g>
              </svg>
              دارایی ها
            </NuxtLink>
          </li>
          <li class="mt-1">
            <NuxtLink
              to="/app/wallet/money-withdraw"
              class="p-2 dark:hover:bg-secdark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M128 35.31V128a8 8 0 0 1-16 0V35.31L93.66 53.66a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32Zm64 88.31V96a16 16 0 0 0-16-16h-16a8 8 0 0 0 0 16h16v80.4a28 28 0 0 0-44.25 33.6l.24.38l22.26 34a8 8 0 0 0 13.39-8.76l-22.13-33.79A12 12 0 0 1 166.4 190c.07.13.15.26.23.38l10.68 16.31a8 8 0 0 0 14.69-4.38V144a74.84 74.84 0 0 1 24 54.69V240a8 8 0 0 0 16 0v-41.35a90.89 90.89 0 0 0-40-75.03M80 80H64a16 16 0 0 0-16 16v104a8 8 0 0 0 16 0V96h16a8 8 0 0 0 0-16"
                />
              </svg>
              برداشت تومان
            </NuxtLink>
          </li>
          <li class="mt-1">
            <NuxtLink
              to="/app/wallet/fiat-withdraw"
              class="p-2 dark:hover:bg-secdark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path
                    d="M9.75 23.25H22.5m-11.25-7.5v7.5m3-7.5v7.5m3.75-7.5v7.5m3-7.5v7.5m2.25-7.5H9l6.575-4.32a.93.93 0 0 1 1.1 0z"
                  />
                  <path d="M5.737 21.347a11.254 11.254 0 1 1 17.49-10.1" />
                  <path
                    d="M6.844 13.493a26.3 26.3 0 0 1 .232-5.928A16.3 16.3 0 0 1 9.289 1.08M.775 11.25H6.75M2.482 6h19.036M1.686 16.5H6m8.711-15.42a17.06 17.06 0 0 1 2.312 7.2"
                  />
                </g>
              </svg>
              برداشت ارز بین المللی
            </NuxtLink>
          </li>
          <li class="border-b border-gray-200 dark:border-secdark pb-1 mt-1">
            <NuxtLink
              to="/app/wallet/crypto-withdraw"
              class="p-2 dark:hover:bg-secdark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
                  <path
                    d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-1.8-1M12 7v10"
                  />
                </g>
              </svg>
              برداشت ارز دیجیتال
            </NuxtLink>
          </li>
          <li class="mt-1">
            <NuxtLink
              to="/app/wallet/money-deposit"
              class="p-2 dark:hover:bg-secdark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M128 35.31V128a8 8 0 0 1-16 0V35.31L93.66 53.66a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32Zm64 88.31V96a16 16 0 0 0-16-16h-16a8 8 0 0 0 0 16h16v80.4a28 28 0 0 0-44.25 33.6l.24.38l22.26 34a8 8 0 0 0 13.39-8.76l-22.13-33.79A12 12 0 0 1 166.4 190c.07.13.15.26.23.38l10.68 16.31a8 8 0 0 0 14.69-4.38V144a74.84 74.84 0 0 1 24 54.69V240a8 8 0 0 0 16 0v-41.35a90.89 90.89 0 0 0-40-75.03M80 80H64a16 16 0 0 0-16 16v104a8 8 0 0 0 16 0V96h16a8 8 0 0 0 0-16"
                />
              </svg>
              واریز تومان
            </NuxtLink>
          </li>
          <li class="mt-1">
            <NuxtLink
              to="/app/wallet/fiat-deposit"
              class="p-2 dark:hover:bg-secdark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path
                    d="M9.75 23.25H22.5m-11.25-7.5v7.5m3-7.5v7.5m3.75-7.5v7.5m3-7.5v7.5m2.25-7.5H9l6.575-4.32a.93.93 0 0 1 1.1 0z"
                  />
                  <path d="M5.737 21.347a11.254 11.254 0 1 1 17.49-10.1" />
                  <path
                    d="M6.844 13.493a26.3 26.3 0 0 1 .232-5.928A16.3 16.3 0 0 1 9.289 1.08M.775 11.25H6.75M2.482 6h19.036M1.686 16.5H6m8.711-15.42a17.06 17.06 0 0 1 2.312 7.2"
                  />
                </g>
              </svg>
              واریز ارز بین المللی
            </NuxtLink>
          </li>
          <li class="border-b border-gray-200 dark:border-secdark pb-1 mt-1">
            <NuxtLink
              to="/app/wallet/crypto-deposit"
              class="p-2 dark:hover:bg-secdark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
                  <path
                    d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-1.8-1M12 7v10"
                  />
                </g>
              </svg>
              واریز ارز دیجیتال
            </NuxtLink>
          </li>
          <li class="mt-1">
            <NuxtLink
              to="/app/wallet/bank-accounts"
              class="p-2 dark:hover:bg-secdark"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 16H6M14 16H12.5M2 10H22"
                  stroke="#0057FF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M2 12C2 8.229 2 6.343 3.172 5.172C4.344 4.001 6.229 4 10 4H14C17.771 4 19.657 4 20.828 5.172C21.999 6.344 22 8.229 22 12C22 15.771 22 17.657 20.828 18.828C19.656 19.999 17.771 20 14 20H10C6.229 20 4.343 20 3.172 18.828C2.001 17.656 2 15.771 2 12Z"
                  stroke="#252525"
                  stroke-width="1.5"
                />
              </svg>
              حساب های بانکی
            </NuxtLink>
          </li>
          <!-- <li class="mt-1" v-for="item in 10">
            <NuxtLink to="/" class="p-2 dark:hover:bg-secdark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.947-.664l-2.668 1.135l-1.865-3.25l2.306-1.739q-.045-.27-.073-.558q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626L3.258 9.126l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.732l.361 2.912q.575.202 1.016.463t.909.654l2.725-1.115l1.865 3.211l-2.382 1.796q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.393-.94.673t-.985.445L13.866 21zM11 20h1.956l.369-2.708q.756-.2 1.36-.549q.606-.349 1.232-.956l2.495 1.063l.994-1.7l-2.189-1.644q.125-.427.166-.786q.04-.358.04-.72q0-.38-.04-.72t-.166-.747l2.227-1.683l-.994-1.7l-2.552 1.07q-.454-.499-1.193-.935q-.74-.435-1.4-.577L13 4h-1.994l-.312 2.689q-.756.161-1.39.52q-.633.358-1.26.985L5.55 7.15l-.994 1.7l2.169 1.62q-.125.336-.175.73t-.05.82q0 .38.05.755t.156.73l-2.15 1.645l.994 1.7l2.475-1.05q.589.594 1.222.953q.634.359 1.428.559zm.973-5.5q1.046 0 1.773-.727T14.473 12t-.727-1.773t-1.773-.727q-1.052 0-1.776.727T9.473 12t.724 1.773t1.776.727M12 12"
                />
              </svg>
              تنظیمات
            </NuxtLink>
          </li> -->
        </ul>
      </div>
      <div class="dropdown dropdown-end dropdown-hover">
        <div class="h-18 flex justify-end items-center">
          <NuxtLink to="/app/my-account">
            <div class="size-[30px] bg-blue-100 flex-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                class="flex items-center gap-3 text-blue-900"
              >
                <path
                  fill="currentColor"
                  d="M12 7q-.633 0-1.066-.434Q10.5 6.133 10.5 5.5t.434-1.066Q11.367 4 12 4t1.066.434T13.5 5.5t-.434 1.066Q12.633 7 12 7m.002 13q-.416 0-.709-.292Q11 19.417 11 19v-8.23q0-.418.291-.709q.291-.292.707-.292t.709.292t.293.708V19q0 .417-.291.708q-.291.292-.707.292"
                />
              </svg>
            </div>
          </NuxtLink>
        </div>
        <ul
          onclick="document.activeElement.blur()"
          class="dropdown-content menu bg-white dark:bg-darkbg rounded-box z-1 w-[275px] max-h-[80vh] overflow-auto flex-nowrap p-2 shadow-sm"
        >
          <li>
            <NuxtLink
              to="/app/my-account"
              class="font-bold flex justify-between items-center p-3"
            >
              <span style="direction: ltr">0990****180</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.59 30.59 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.59 30.59 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0"
                />
              </svg>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="p-1.5 dark:hover:bg-secdark block">
              <div
                class="border border-gray-300 dark:border-secdark w-full p-1.5 rounded-md flex items-center gap-2"
              >
                <div class="size-12 bg-red-500 rounded-full"></div>
                <div>
                  <h4 class="text-sm">سطح 1 - پایه بازار تومان</h4>
                  <p class="text-2sm mt-0.5 text-secondary dark:text-textdark">
                    کارمزد تیکر 0/3% - کارمزد میکر 0/25%
                  </p>
                </div>
              </div>
            </NuxtLink>
          </li>
          <li class="border-b border-gray-200 dark:border-secdark pb-1">
            <NuxtLink to="/" class="p-2 justify-between dark:hover:bg-secdark">
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14.154 12.462h4.077v-1h-4.077zm0-2.77h4.077v-1h-4.077zm-8.385 5.616h6.616v-.166q0-.875-.88-1.355t-2.428-.48t-2.429.48t-.879 1.355zm3.308-3.616q.633 0 1.066-.433q.434-.434.434-1.067t-.434-1.066t-1.066-.434t-1.066.434t-.434 1.066t.434 1.067t1.066.433M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1h14.769q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616v10.769q0 .23.192.423t.423.192M4 18V6z"
                  />
                </svg>
                احراز هویت
              </div>
              <span
                class="py-1 px-1.5 rounded bg-[#0000000D] dark:bg-maindark text-2sm"
                >احراز نشده</span
              >
            </NuxtLink>
          </li>
          <li class="mt-1">
            <NuxtLink
              to="/app/my-account/bank-accounts"
              class="p-2 dark:hover:bg-secdark"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 16H6M14 16H12.5M2 10H22"
                  stroke="#0057FF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M2 12C2 8.229 2 6.343 3.172 5.172C4.344 4.001 6.229 4 10 4H14C17.771 4 19.657 4 20.828 5.172C21.999 6.344 22 8.229 22 12C22 15.771 22 17.657 20.828 18.828C19.656 19.999 17.771 20 14 20H10C6.229 20 4.343 20 3.172 18.828C2.001 17.656 2 15.771 2 12Z"
                  stroke="#252525"
                  stroke-width="1.5"
                />
              </svg>
              حساب های بانکی
            </NuxtLink>
          </li>
          <li class="mt-1">
            <NuxtLink
              to="/app/my-account/security"
              class="p-2 dark:hover:bg-secdark"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V8"
                  stroke="#0057FF"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M12 13.5C12.8284 13.5 13.5 14.1716 13.5 15C13.5 15.8284 12.8284 16.5 12 16.5C11.1716 16.5 10.5 15.8284 10.5 15C10.5 14.1716 11.1716 13.5 12 13.5Z"
                  fill="#0057FF"
                  stroke="#0057FF"
                />
                <path
                  d="M4 13C4 11.114 4 10.172 4.586 9.586C5.172 9 6.114 9 8 9H16C17.886 9 18.828 9 19.414 9.586C20 10.172 20 11.114 20 13V15C20 17.828 20 19.243 19.121 20.121C18.243 21 16.828 21 14 21H10C7.172 21 5.757 21 4.879 20.121C4 19.243 4 17.828 4 15V13Z"
                  stroke="#252525"
                  stroke-width="1.5"
                />
              </svg>
              امنیت
            </NuxtLink>
          </li>
          <li class="border-b border-gray-200 dark:border-secdark pb-1">
            <NuxtLink
              to="/app/my-account/settings"
              class="p-2 dark:hover:bg-secdark"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8874 12.5313L21.2434 13.7388C21.4938 13.9478 21.6612 14.2395 21.7151 14.5611C21.769 14.8828 21.706 15.2131 21.5374 15.4923L19.9024 18.2853C19.7756 18.4991 19.5945 18.6756 19.3774 18.7968C19.1579 18.9183 18.9114 18.9828 18.6604 18.9843C18.5048 18.9853 18.3499 18.962 18.2014 18.9153L16.4659 18.3423C16.1619 18.5373 15.8459 18.7118 15.5179 18.8658L15.1534 20.6253C15.086 20.949 14.9058 21.2382 14.6449 21.4413C14.3808 21.6481 14.0533 21.7573 13.7179 21.7503H10.3324C9.99706 21.7573 9.66959 21.6481 9.40545 21.4413C9.14516 21.2379 8.9655 20.9488 8.89845 20.6253L8.53245 18.8658C8.20875 18.7097 7.89468 18.5344 7.59195 18.3408L5.85045 18.9153C5.70195 18.962 5.5471 18.9853 5.39145 18.9843C5.14103 18.9825 4.89506 18.9181 4.67595 18.7968C4.4591 18.676 4.278 18.5001 4.15095 18.2868L2.45745 15.4923C2.28139 15.2106 2.21412 14.8743 2.26824 14.5465C2.32236 14.2188 2.49416 13.922 2.75145 13.7118L4.10595 12.0003V11.4693L2.74995 10.2618C2.49954 10.0529 2.33223 9.76114 2.2783 9.43949C2.22437 9.11784 2.28739 8.78752 2.45595 8.50831L4.14945 5.71531C4.27629 5.50151 4.45741 5.32505 4.67445 5.20381C4.89356 5.08257 5.13953 5.01811 5.38995 5.01631C5.5442 5.00658 5.69902 5.02075 5.84895 5.05831L7.55595 5.65831C7.86095 5.46331 8.17695 5.28881 8.50395 5.13481L8.86995 3.37531C8.937 3.05186 9.11666 2.76271 9.37694 2.55931C9.64109 2.35253 9.96856 2.24337 10.3039 2.25031H13.6609C13.9963 2.24337 14.3238 2.35253 14.5879 2.55931C14.8504 2.76481 15.0304 3.05431 15.0949 3.37531L15.4609 5.13481C15.7859 5.28981 16.0994 5.46481 16.4014 5.65981L18.1444 5.08681C18.3379 5.02388 18.5423 5.00179 18.7447 5.02193C18.9471 5.04207 19.1432 5.104 19.3204 5.20381C19.5379 5.32681 19.7179 5.50381 19.8454 5.71381L21.5374 8.50831C21.7159 8.78764 21.7866 9.12236 21.7363 9.44999C21.6861 9.77761 21.5184 10.0758 21.2644 10.2888L19.8874 11.4618V12.5313Z"
                  stroke="#252525"
                  stroke-width="1.5"
                />
                <path
                  d="M15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75C11.0054 15.75 10.0516 15.3549 9.34835 14.6517C8.64509 13.9484 8.25 12.9946 8.25 12C8.25 11.0054 8.64509 10.0516 9.34835 9.34835C10.0516 8.64509 11.0054 8.25 12 8.25C12.9946 8.25 13.9484 8.64509 14.6517 9.34835C15.3549 10.0516 15.75 11.0054 15.75 12Z"
                  stroke="#0057FF"
                  stroke-width="1.5"
                />
              </svg>
              تنظیمات
            </NuxtLink>
          </li>
          <li class="mt-1">
            <NuxtLink
              to="/app/my-account/price-alert"
              class="p-2 dark:hover:bg-secdark"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2684 21.0001C10.4439 21.3042 10.6964 21.5566 11.0004 21.7321C11.3044 21.9077 11.6493 22.0001 12.0004 22.0001C12.3514 22.0001 12.6963 21.9077 13.0003 21.7321C13.3043 21.5566 13.5568 21.3042 13.7324 21.0001M13.9164 2.31415C13.0138 2.01002 12.0519 1.9251 11.11 2.06642C10.1682 2.20774 9.27353 2.57124 8.50001 3.12685C7.7265 3.68246 7.09635 4.41423 6.66169 5.26164C6.22703 6.10905 6.00034 7.04776 6.00036 8.00015C6.00036 12.4991 4.58936 13.9561 3.26036 15.3271C3.12993 15.4705 3.04397 15.6486 3.01292 15.8399C2.98187 16.0312 3.00707 16.2274 3.08547 16.4047C3.16386 16.5819 3.29207 16.7325 3.45449 16.8383C3.61692 16.944 3.80656 17.0002 4.00036 17.0001H20.0004C20.1942 17.0002 20.3838 16.944 20.5462 16.8383C20.7086 16.7325 20.8369 16.5819 20.9152 16.4047C20.9936 16.2274 21.0188 16.0312 20.9878 15.8399C20.9567 15.6486 20.8708 15.4705 20.7404 15.3271C20.5346 15.1152 20.3393 14.8933 20.1554 14.6621"
                  stroke="#252525"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8C15 9.65685 16.3431 11 18 11Z"
                  fill="#0057FF"
                  stroke="#0057FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              گوش به زنگ ها
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="dropdown dropdown-end dropdown-hover">
        <div class="w10 flex justify-end">
          <svg
            tabindex="0"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            class="cursor-pointer flex items-center gap-3 h-18"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                d="M19 18V9.5a7 7 0 1 0-14 0V18m15.5 0h-17"
              />
              <path
                d="M13.5 20a1.5 1.5 0 0 1-1.5 1.5M10.5 20a1.5 1.5 0 0 0 1.5 1.5m0 0V20"
              />
            </g>
          </svg>
        </div>
        <ul
          tabindex="0"
          class="relative dropdown-content menu pt-0 bg-white dark:bg-darkbg rounded-box z-1 w-[400px] max-h-[80vh] overflow-auto flex-nowrap p-2 shadow-sm"
        >
          <li class="sticky top-0 bg-white dark:bg-darkbg z-10 py-0">
            <a
              class="p-3 justify-between items-center w-full text-center text-[16px] font-bold hover:bg-transparent cursor-default relative"
            >
              <button onclick="document.activeElement.blur()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
                  />
                </svg>
              </button>
              <h4 class="absolute left-1/2 -translate-x-1/2">پیام ها</h4>
              <ClientOnly>
                <NuxtLink to="/" class="text-end text-sm text-primary"
                  >مشاهده همه</NuxtLink
                >
              </ClientOnly>
            </a>
          </li>
          <li v-for="item in 10">
            <NuxtLink
              to="/"
              class="p-3 flex flex-col items-start dark:hover:bg-secdark gap-1.5"
            >
              <span class="text-secondary dark:text-textdark text-xs"
                >1404/01/01</span
              >
              <h4 class="text-sm">لورم ایپسوم نمیدونم چی چی</h4>
              <p class="text-secondary dark:text-textdark text-xs">
                با هر حدس درست، دو برابر تتر ببر.
              </p>
              <span class="text-sm">بیشتر بدانید</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <HeaderSwitchTheme />
  </div>
</template>

<script setup>
let emit = defineEmits(['showLogForm'])

let userLogged = ref(true)
let showAuth = ref(false)

provide('showAuth', showAuth)

// onMounted(() => {
//   userLogged.value = JSON.parse(localStorage.getItem('auth'))
// })
</script>
