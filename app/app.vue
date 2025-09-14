<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import Lenis from 'lenis'

useHead({
  titleTemplate: 'صرافی کازان %s'
})

onMounted(() => {
  if (JSON.parse(localStorage.getItem('dark')))
    document.documentElement.classList.add('dark')

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
