<template>
  <div class="hidden lg:flex items-center gap-3">
    <button
      to="/"
      class="bg-primary rounded-full px-3 py-2 text-white hidden lg:flex items-center gap-2 cursor-pointer"
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
    <div v-else class="flex gap-3">
      <Button
        unstyled
        type="button"
        @click="toggleWallet"
        aria-haspopup="true"
        pt:root="!size-10 !bg-[#F7F7F7] dark:!bg-maindark !rounded-full !flex !justify-center !items-center !cursor-pointer"
        aria-controls="overlay_menu"
      >
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M6 8h4"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.5"
                d="M22 10.5c0-.077 0-.533-.002-.565c-.036-.501-.465-.9-1.005-.933C20.959 9 20.918 9 20.834 9h-2.602C16.446 9 15 10.343 15 12s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032.002-.488.002-.565"
              />
              <circle cx="18" cy="12" r="1" fill="currentColor" />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.5"
                d="M13 4c3.771 0 5.657 0 6.828 1.172c.809.808 1.06 1.956 1.137 3.828M10 20h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828M9 4c-3.114.01-4.765.108-5.828 1.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828c.653.654 1.528.943 2.828 1.07"
              />
            </g>
          </svg>
        </template>
      </Button>
      <Button
        unstyled
        type="button"
        @click="toggleAccount"
        aria-haspopup="true"
        pt:root="!size-10 !bg-[#F7F7F7] dark:!bg-maindark !rounded-full !flex !justify-center !items-center !cursor-pointer"
        aria-controls="overlay_menu"
      >
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
            />
          </svg>
        </template>
      </Button>
      <Button
        unstyled
        type="button"
        @click="toggleNotif"
        aria-haspopup="true"
        pt:root="!size-10 !bg-[#F7F7F7] dark:!bg-maindark !rounded-full !flex !justify-center !items-center !cursor-pointer"
        aria-controls="overlay_menu"
      >
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15.5 18a3.5 3.5 0 1 1-7 0m10.731 0H4.77a1.769 1.769 0 0 1-1.25-3.02l.602-.603A3 3 0 0 0 5 12.256V9.5a7 7 0 0 1 14 0v2.756a3 3 0 0 0 .879 2.121l.603.603a1.77 1.77 0 0 1-1.25 3.02"
            />
          </svg>
        </template>
      </Button>
    </div>
    <div class="hidden lg:block">
      <button
        class="flex-center bg-[#F7F7F7] size-10 rounded-full cursor-pointer dark:!hidden"
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
        @click="switchLight"
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
    <Menu
      ref="walletMenu"
      id="overlay_menu"
      :model="walletItems"
      :popup="true"
      pt:root="!w-[220px] !border-none !rounded-10 !p-1"
      pt:list="!max-h-[500px] !overflow-auto"
      pt:submenuLabel="!hidden"
      pt:separator="!my-1"
    >
    </Menu>
    <Menu
      ref="accountMenu"
      id="overlay_menu"
      :model="accountItems"
      :popup="true"
      pt:root="!w-[250px] !border-none !rounded-10 !p-1"
      pt:submenuLabel="!hidden"
      pt:start="!p-1"
      pt:separator="!my-1"
      pt:itemLink="hover:!bg-maindark/70"
    >
      <template #start>
        <NuxtLink
          to="/"
          class="text-black dark:text-white flex justify-between items-center p-2 hover:bg-transparent/70 rounded"
        >
          <span style="direction: ltr">0990****180</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m14 7l-5 5l5 5"
            />
          </svg>
        </NuxtLink>
      </template>
    </Menu>
    <Menu
      ref="notifMenu"
      id="overlay_menu"
      :model="notifItems"
      :popup="true"
      pt:root="w-[400px] !border-none !rounded-10 !p-1"
      pt:list="!max-h-[500px] !overflow-auto"
      pt:submenuLabel="!hidden"
    >
      <template #start>
        <div class="flex justify-between p-3">
          پیام‌ها
          <NuxtLink to="/" class="text-primary text-sm">نمایش همه</NuxtLink>
        </div>
      </template>
      <template #item v-for="item in notifItems">
        <div class="p-2">
          <h4 class="text-lg font-bold mb-1">{{ item[0] }}</h4>
          <p class="text-sm">{{ item[1] }}</p>
        </div>
      </template>
    </Menu>
    <AuthMobileCompleteAuth />
    <AuthMonitorCompleteAuth />
  </div>
</template>

<script setup>
let userLogged = ref(true)
let showAuth = ref(true)

function switchDark () {
  localStorage.setItem('dark', JSON.stringify(true))
  document.documentElement.classList.add('dark')
}

function switchLight () {
  localStorage.removeItem('dark')
  document.documentElement.classList.remove('dark')
}

const walletMenu = ref()
const walletItems = ref([
  {
    items: [
      {
        label: 'دارایی ها',
        icon: 'pi pi-wallet'
      }
    ]
  },
  {
    separator: true
  },
  {
    items: [
      {
        label: 'دارایی ها',
        icon: 'pi pi-wallet'
      },
      {
        label: 'دارایی ها',
        icon: 'pi pi-wallet'
      }
    ]
  },
  {
    separator: true
  },
  {
    items: [
      {
        label: 'دارایی ها',
        icon: 'pi pi-wallet'
      },
      {
        label: 'دارایی ها',
        icon: 'pi pi-wallet'
      }
    ]
  },
  {
    separator: true
  },
  {
    items: [
      {
        label: 'دارایی ها',
        icon: 'pi pi-wallet'
      },
      {
        label: 'دارایی ها',
        icon: 'pi pi-wallet'
      },
      {
        label: 'دارایی ها',
        icon: 'pi pi-wallet'
      }
    ]
  }
])
const toggleWallet = event => {
  walletMenu.value.toggle(event)
}

const notifMenu = ref()
const notifItems = ref([
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ],
  [
    'title',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis vero quaerat ipsam, ratione velit quam animi asperiores est! Corporis?'
  ]
])

const toggleNotif = event => {
  notifMenu.value.toggle(event)
}

const accountMenu = ref()
const accountItems = ref([
  {
    separator: true
  },
  {
    items: [
      {
        label: 'احراز هویت',
        icon: 'pi pi-id-card',
        command: () => {
          showAuth.value = true
        }
      },
      {
        label: 'دارایی ها',
        icon: 'pi pi-wallet'
      },
      {
        label: 'دارایی ها',
        icon: 'pi pi-wallet'
      }
    ]
  }
])

const toggleAccount = event => {
  accountMenu.value.toggle(event)
}

provide('showAuth', showAuth)

// onMounted(() => {
//   userLogged.value = JSON.parse(localStorage.getItem('auth'))
// })
</script>
