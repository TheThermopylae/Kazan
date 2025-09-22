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
    </NuxtLink>
    <HeaderSwitchTheme />
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
