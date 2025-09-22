<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <button
    to="/"
    class="primary rounded-lg px-5 flex items-center justify-between gap-2 fixed bottom-3 left-3 z-10 text-xs cursor-pointer w-[150px] h-[32px]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15px"
      height="15px"
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          d="M21 15v-3a9 9 0 1 0-18 0v3"
        />
        <path
          fill="currentColor"
          d="M3 15v-1H2v1zm0 1h3v-2H3zm3 0v3h2v-3zm-2 3v-4H2v4zm1 1a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm0-3h2a2 2 0 0 0-2-2zm15-1h1v-1h-1zm-3 1h3v-2h-3zm2-1v4h2v-4zm-2 4v-3h-2v3zm1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-2-5a2 2 0 0 0-2 2h2z"
        />
      </g>
    </svg>
    پشتیبانی کازان
    <div></div>
  </button>
</template>

<script setup>
import Lenis from 'lenis'

useHead({
  titleTemplate: 'صرافی کازان %s'
})

onMounted(() => {
  new Lenis({
    autoRaf: true
  })
})
</script>

<!-- <Select
  v-model="selectetType"
  :options="status"
  placeholder="وضعیت خط"
  class="w-full"
  :pt="{
    option: ({ context }) => ({
      class: context.selected ? '!bg-black !text-white !rounded-xl' : ''
    }),
    root: '!p-5 !bg-[#F8F8F8] !text-xs !rounded-2xl !mt-3',
    label: '!p-0',
    dropdownIcon: '!text-black',
    overlay: '!bg-[#F8F8F8] !text-xs !rounded-2xl !border-none'
  }"
/> -->

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
<!-- 
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
    <AuthMonitorCompleteAuth /> -->
