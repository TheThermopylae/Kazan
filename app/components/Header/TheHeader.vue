<template>
  <header
    class="p-3 flex justify-between items-center fixed w-full top-0 bg-white dark:bg-darkbg transition-all z-50 duration-300"
    :class="{ 'h-16 shadow': scrolled, 'h-20': !scrolled }"
  >
    <div class="flex items-center gap-10">
      <div class="flex items-center gap-4 font-bold text-sm">
        <NuxtImg src="/logo.svg" class="size-[27px]"></NuxtImg>
        <h3>صرافی <span class="text-primary">کازان</span></h3>
      </div>
      <div class="flex gap-6">
        <Button
          type="button"
          label="خرید ارز"
          @mouseenter="toggleBuy"
          @mouseleave="toggleBuy"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          unstyled
          pt:root="flex items-center gap-3 flex-row-reverse cursor-pointer"
        >
          <template #icon>
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
          </template>
        </Button>
        <Menu
          ref="menuBuy"
          id="overlay_menu"
          :model="itemsBuy"
          :popup="true"
          pt:submenuLabel="!hidden"
        />
        <Button
          type="button"
          label="قیمت ارز"
          @mouseenter="togglePrice"
          @mouseleave="togglePrice"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          unstyled
          pt:root="flex items-center gap-3 flex-row-reverse cursor-pointer"
        >
          <template #icon>
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
          </template>
        </Button>
        <Menu
          ref="menuPrice"
          id="overlay_menu"
          :model="itemsPrice"
          :popup="true"
          pt:submenuLabel="!hidden"
        />
      </div>
      <NuxtLink to="/">راهنمای کامل</NuxtLink>
      <Button
        type="button"
        label="سایر"
        @mouseenter="toggleOther"
        @mouseleave="toggleOther"
        aria-haspopup="true"
        aria-controls="overlay_menu"
        unstyled
        pt:root="flex items-center gap-3 flex-row-reverse cursor-pointer"
      >
        <template #icon>
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
        </template>
      </Button>
      <Menu
        ref="menuOther"
        id="overlay_menu"
        :model="itemsOther"
        :popup="true"
        pt:submenuLabel="!hidden"
      />
    </div>
    <div class="flex items-center gap-5">
      <NuxtLink
        to="/"
        class="bg-primary rounded-full px-3 py-2 text-white flex items-center gap-2"
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
      </NuxtLink>
      <button
        class="flex-center bg-white size-10 rounded-full cursor-pointer dark:!hidden"
        @click="switchDark"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z"
          />
        </svg>
      </button>
      <button
        class="!hidden flex-center bg-maindark text-white size-10 rounded-full cursor-pointer dark:!flex"
        @click="switchDark"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0M12 6.75a5.25 5.25 0 1 0 0 10.5a5.25 5.25 0 0 0 0-10.5M5.25 12a6.75 6.75 0 1 1 13.5 0a6.75 6.75 0 0 1-13.5 0m-4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-2.102 6.148a.75.75 0 0 1 1.06 0l.393.393a.75.75 0 1 1-1.06 1.06l-.393-.393a.75.75 0 0 1 0-1.06m-12.296 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 1 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.061 0M12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </header>
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

function switchDark () {
  document.documentElement.classList.toggle('dark')
}

let scrolled = ref(false)
onMounted(() => {
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) scrolled.value = true
    else scrolled.value = false
  })
})
</script>
