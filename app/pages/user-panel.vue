<template>
  <NuxtPage />
</template>

<script setup>
definePageMeta({
  layout: 'user-panel',
  redirect: '/user-panel/home'
})

useHead({
  titleTemplate: 'پنل کاربری %s'
})
</script>
