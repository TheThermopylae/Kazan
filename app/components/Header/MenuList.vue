<template>
  <div class="flex items-center gap-4 lg:gap-10">
    <HeaderTheDrawer />
    <NuxtLink to="/" class="flex items-center gap-2 font-bold text-sm">
      <NuxtImg src="/logo.svg" class="size-[27px]"></NuxtImg>
      <h3>صرافی <span class="text-primary">کازان</span></h3>
    </NuxtLink>
    <div class="hidden lg:flex gap-8 items-center">
      <div class="dropdown dropdown-hover">
        <div
          tabindex="0"
          role="button"
          class="cursor-pointer flex items-center gap-3 h-18"
        >
          خرید ارز
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.15175 7.47309C4.10825 7.43071 3.92225 7.2707 3.76925 7.12165C2.807 6.24781 1.232 3.96822 0.75125 2.77509C0.674 2.59389 0.5105 2.13578 0.5 1.89101C0.5 1.65648 0.554 1.4329 0.6635 1.21956C0.8165 0.953605 1.05725 0.740258 1.3415 0.623356C1.53875 0.5481 2.129 0.431198 2.1395 0.431198C2.78525 0.314296 3.8345 0.25 4.994 0.25C6.09875 0.25 7.10525 0.314296 7.76075 0.41001C7.77125 0.420969 8.50475 0.537871 8.756 0.665733C9.215 0.900268 9.5 1.35838 9.5 1.84864V1.89101C9.48875 2.2103 9.20375 2.88176 9.19325 2.88176C8.71175 4.01059 7.214 6.23758 6.21875 7.13261C6.21875 7.13261 5.963 7.38468 5.80325 7.49428C5.57375 7.66525 5.2895 7.75 5.00525 7.75C4.688 7.75 4.3925 7.65429 4.15175 7.47309Z"
              fill="#999999"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-white dark:bg-darkbg rounded-box z-1 w-[750px] p-2 shadow-sm grid grid-cols-4 gap-2"
        >
          <li v-for="item in 15">
            <NuxtLink
              to="/"
              class="p-3 flex items-center dark:hover:bg-secdark"
            >
              <NuxtImg src="/crypto/RUB.svg" class="size-5" />
              خرید روبل
              <span class="text-textlight">RUB</span>
            </NuxtLink>
          </li>
          <li class="flex justify-center">
            <NuxtLink to="/" class="text-primary p-3 flex items-center gap-3"
              >خرید ارز های دیجیتال
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.59 30.59 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.59 30.59 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0"
                /></svg
            ></NuxtLink>
          </li>
        </ul>
      </div>
      <div class="dropdown dropdown-hover">
        <div
          tabindex="0"
          role="button"
          class="cursor-pointer flex items-center gap-3 h-18"
        >
          قیمت ارز
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.15175 7.47309C4.10825 7.43071 3.92225 7.2707 3.76925 7.12165C2.807 6.24781 1.232 3.96822 0.75125 2.77509C0.674 2.59389 0.5105 2.13578 0.5 1.89101C0.5 1.65648 0.554 1.4329 0.6635 1.21956C0.8165 0.953605 1.05725 0.740258 1.3415 0.623356C1.53875 0.5481 2.129 0.431198 2.1395 0.431198C2.78525 0.314296 3.8345 0.25 4.994 0.25C6.09875 0.25 7.10525 0.314296 7.76075 0.41001C7.77125 0.420969 8.50475 0.537871 8.756 0.665733C9.215 0.900268 9.5 1.35838 9.5 1.84864V1.89101C9.48875 2.2103 9.20375 2.88176 9.19325 2.88176C8.71175 4.01059 7.214 6.23758 6.21875 7.13261C6.21875 7.13261 5.963 7.38468 5.80325 7.49428C5.57375 7.66525 5.2895 7.75 5.00525 7.75C4.688 7.75 4.3925 7.65429 4.15175 7.47309Z"
              fill="#999999"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-white dark:bg-darkbg rounded-box z-1 w-[750px] p-2 shadow-sm grid grid-cols-4 gap-2"
        >
          <li v-for="item in 15">
            <NuxtLink
              to="/"
              class="p-3 flex items-center dark:hover:bg-secdark"
            >
              <NuxtImg src="/crypto/RUB.svg" class="size-5" />
              قیمت روبل
              <span class="text-textlight">RUB</span>
            </NuxtLink>
          </li>
          <li class="flex justify-center">
            <NuxtLink to="/" class="text-primary p-3 flex items-center gap-3"
              >خرید ارز های دیجیتال
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.59 30.59 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.59 30.59 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0"
                /></svg
            ></NuxtLink>
          </li>
        </ul>
      </div>
      <NuxtLink to="/">راهنمای کامل</NuxtLink>
      <div class="dropdown dropdown-hover">
        <div
          tabindex="0"
          role="button"
          class="cursor-pointer flex items-center gap-3 h-18"
        >
          قیمت ارز
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.15175 7.47309C4.10825 7.43071 3.92225 7.2707 3.76925 7.12165C2.807 6.24781 1.232 3.96822 0.75125 2.77509C0.674 2.59389 0.5105 2.13578 0.5 1.89101C0.5 1.65648 0.554 1.4329 0.6635 1.21956C0.8165 0.953605 1.05725 0.740258 1.3415 0.623356C1.53875 0.5481 2.129 0.431198 2.1395 0.431198C2.78525 0.314296 3.8345 0.25 4.994 0.25C6.09875 0.25 7.10525 0.314296 7.76075 0.41001C7.77125 0.420969 8.50475 0.537871 8.756 0.665733C9.215 0.900268 9.5 1.35838 9.5 1.84864V1.89101C9.48875 2.2103 9.20375 2.88176 9.19325 2.88176C8.71175 4.01059 7.214 6.23758 6.21875 7.13261C6.21875 7.13261 5.963 7.38468 5.80325 7.49428C5.57375 7.66525 5.2895 7.75 5.00525 7.75C4.688 7.75 4.3925 7.65429 4.15175 7.47309Z"
              fill="#999999"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-white dark:bg-darkbg rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <NuxtLink
              to="/"
              class="p-3 flex items-center dark:hover:bg-secdark"
            >
              تحلیل ارز دیجیتال
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/"
              class="p-3 flex items-center dark:hover:bg-secdark"
            >
              ماشین حساب ارز دیجیتال
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/"
              class="p-3 flex items-center dark:hover:bg-secdark"
            >
              دعوت از دوستان
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/"
              class="p-3 flex items-center dark:hover:bg-secdark"
            >
              مستندات API
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/"
              class="p-3 flex items-center dark:hover:bg-secdark"
            >
              راهنما
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/"
              class="p-3 flex items-center dark:hover:bg-secdark"
            >
              بلاگ
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const menuBuy = ref()
const menuPrice = ref()
const menuOther = ref()

const itemsBuy = ref([
  {
    items: [
      {
        label: 'Refresh'
      },
      {
        label: 'Export'
      }
    ]
  }
])
const itemsPrice = ref([
  {
    items: [
      {
        label: 'Refresh 2'
      },
      {
        label: 'Export 2'
      }
    ]
  }
])
const itemsOther = ref([
  {
    items: [
      {
        label: 'Refresh 3'
      },
      {
        label: 'Export 3'
      }
    ]
  }
])

const toggleBuy = event => {
  menuBuy.value.toggle(event)
}

const togglePrice = event => {
  menuPrice.value.toggle(event)
}

const toggleOther = event => {
  menuOther.value.toggle(event)
}
</script>
