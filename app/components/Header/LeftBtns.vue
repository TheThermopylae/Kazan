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
    <NuxtLink
      to="/user-panel"
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
    </NuxtLink>
    <!-- <div v-else class="flex gap-3">
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
    </div> -->
    <HeaderSwitchTheme />
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
let emit = defineEmits(['showLogForm'])

let userLogged = ref(true)
let showAuth = ref(false)

const walletMenu = ref()
const walletItems = ref([
  {
    items: [
      {
        label: 'دارایی ها',
        icon: 'pi pi-wallet',
        command: () => {
          emit('showLogForm')
        }
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
