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
