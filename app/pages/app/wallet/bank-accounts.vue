<template>
  <UserPanelMyAccountBanksAccounts />
  <UserPanelMyAccountRequestHistory />
</template>

<script setup>
let width = ref(0)
let router = useRouter()

definePageMeta({
  layout: 'panel-layout',
  title: 'حساب های بانکی'
})

useHead({
  title: 'حساب های بانکی |'
})

function updateWidth () {
  width.value = window.innerWidth
  if (width.value >= 1024) router.push({ query: {} })
}

onMounted(() => {
  updateWidth()
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>
