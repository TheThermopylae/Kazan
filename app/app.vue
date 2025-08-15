<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate : 'صرافی کازان %s'
})

onMounted(() => {
  if (JSON.parse(localStorage.getItem('dark')))
    document.documentElement.classList.add('dark')
})
</script>
