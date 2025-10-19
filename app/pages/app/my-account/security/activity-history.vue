<template>
  <UserPanelSecurityActivityHistory />
</template>

<script setup>
definePageMeta({
  layout: 'myaccount-layout',
  title: 'دستگاه های متصل'
})

useHead({
  title: 'دستگاه های متصل |'
})

let width = ref(0)

function updateWidth () {
  width.value = window.innerWidth
  if (width.value >= 1024) return navigateTo('/app/my-account/security')
}

onMounted(() => {
  updateWidth()
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>
