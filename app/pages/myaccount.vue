<template>
  <NuxtPage />
</template>

<script setup>
definePageMeta({
  layout: 'user-panel',
  redirect: '/myaccount/state'
})

useHead({
  titleTemplate: 'پنل کاربری %s'
})
</script>
