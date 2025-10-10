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
    <div class="flex">
      <div class="dropdown dropdown-end dropdown-hover">
        <div class="w-10 h-18 flex justify-end items-center">
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
          tabindex="0"
          class="dropdown-content menu bg-white dark:bg-darkbg rounded-box z-1 w-[275px] max-h-[80vh] overflow-auto flex-nowrap p-2 shadow-sm"
        >
          <li class="mt-1">
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
          <li class="mt-1" v-for="item in 10">
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
          </li>
        </ul>
      </div>
      <div class="dropdown dropdown-end dropdown-hover">
        <div class="w-10 h-18 flex justify-end items-center">
          <NuxtLink to="/app/my-account">
            <div class="size-[30px] bg-blue-100 flex-center rounded-full">
              <svg
                tabindex="0"
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
          tabindex="0"
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
          <li class="mt-1" v-for="item in 6">
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
          </li>
        </ul>
      </div>
      <div class="dropdown dropdown-end dropdown-hover">
        <div class="w-10 flex justify-end">
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
