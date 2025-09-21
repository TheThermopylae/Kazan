<template>
  <NuxtPage />
</template>

<script setup>
definePageMeta({
  layout: 'user-panel',
  redirect: '/user-panel/state'
})

useHead({
  titleTemplate: 'پنل کاربری %s'
})
</script>
