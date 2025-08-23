<template>
  <div class="flex items-center gap-4 lg:gap-10">
    <HeaderTheDrawer />
    <NuxtLink to="/" class="flex items-center gap-4 font-bold text-sm">
      <NuxtImg src="/logo.svg" class="size-[27px]"></NuxtImg>
      <h3>صرافی <span class="text-primary">کازان</span></h3>
    </NuxtLink>
    <div class="hidden lg:flex gap-8">
      <Button type="button" label="خرید ارز" @mouseenter="toggleBuy" @mouseleave="toggleBuy" aria-haspopup="true"
        aria-controls="overlay_menu" unstyled pt:root="flex items-center gap-3 flex-row-reverse cursor-pointer">
        <template #icon>
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.15175 7.47309C4.10825 7.43071 3.92225 7.2707 3.76925 7.12165C2.807 6.24781 1.232 3.96822 0.75125 2.77509C0.674 2.59389 0.5105 2.13578 0.5 1.89101C0.5 1.65648 0.554 1.4329 0.6635 1.21956C0.8165 0.953605 1.05725 0.740258 1.3415 0.623356C1.53875 0.5481 2.129 0.431198 2.1395 0.431198C2.78525 0.314296 3.8345 0.25 4.994 0.25C6.09875 0.25 7.10525 0.314296 7.76075 0.41001C7.77125 0.420969 8.50475 0.537871 8.756 0.665733C9.215 0.900268 9.5 1.35838 9.5 1.84864V1.89101C9.48875 2.2103 9.20375 2.88176 9.19325 2.88176C8.71175 4.01059 7.214 6.23758 6.21875 7.13261C6.21875 7.13261 5.963 7.38468 5.80325 7.49428C5.57375 7.66525 5.2895 7.75 5.00525 7.75C4.688 7.75 4.3925 7.65429 4.15175 7.47309Z"
              fill="#999999" />
          </svg>
        </template>
      </Button>
      <Menu ref="menuBuy" id="overlay_menu" :model="itemsBuy" :popup="true" pt:submenuLabel="!hidden" />
      <Button type="button" label="قیمت ارز" @mouseenter="togglePrice" @mouseleave="togglePrice" aria-haspopup="true"
        aria-controls="overlay_menu" unstyled pt:root="flex items-center gap-3 flex-row-reverse cursor-pointer">
        <template #icon>
          <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.2832 1.27637L6.10202 4.45755C5.72633 4.83324 5.11156 4.83324 4.73587 4.45755L1.55469 1.27637"
              stroke="#3C3C3C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </template>
      </Button>
      <Menu ref="menuPrice" id="overlay_menu" :model="itemsPrice" :popup="true" pt:submenuLabel="!hidden" />
      <NuxtLink to="/">راهنمای کامل</NuxtLink>
      <Button type="button" label="سایر" @mouseenter="toggleOther" @mouseleave="toggleOther" aria-haspopup="true"
        aria-controls="overlay_menu" unstyled pt:root="flex items-center gap-3 flex-row-reverse cursor-pointer">
        <template #icon>
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.15175 7.47309C4.10825 7.43071 3.92225 7.2707 3.76925 7.12165C2.807 6.24781 1.232 3.96822 0.75125 2.77509C0.674 2.59389 0.5105 2.13578 0.5 1.89101C0.5 1.65648 0.554 1.4329 0.6635 1.21956C0.8165 0.953605 1.05725 0.740258 1.3415 0.623356C1.53875 0.5481 2.129 0.431198 2.1395 0.431198C2.78525 0.314296 3.8345 0.25 4.994 0.25C6.09875 0.25 7.10525 0.314296 7.76075 0.41001C7.77125 0.420969 8.50475 0.537871 8.756 0.665733C9.215 0.900268 9.5 1.35838 9.5 1.84864V1.89101C9.48875 2.2103 9.20375 2.88176 9.19325 2.88176C8.71175 4.01059 7.214 6.23758 6.21875 7.13261C6.21875 7.13261 5.963 7.38468 5.80325 7.49428C5.57375 7.66525 5.2895 7.75 5.00525 7.75C4.688 7.75 4.3925 7.65429 4.15175 7.47309Z"
              fill="#999999" />
          </svg>
        </template>
      </Button>
      <Menu ref="menuOther" id="overlay_menu" :model="itemsOther" :popup="true" pt:submenuLabel="!hidden" />
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
