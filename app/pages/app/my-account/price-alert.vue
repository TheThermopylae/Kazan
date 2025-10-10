<template>
  <p class="mb-5">وقتی که گوش به زنگی وجود نداره:</p>
  <UserPanelPriceAlertFirstAlert />
  <UserPanelPriceAlertAddAlertModal />
  <UserPanelPriceAlertAlertsTable />
</template>

<script setup>
definePageMeta({
  layout: 'myaccount-layout'
})

useHead({
  title: 'گوش به زنگ ها |'
})

let visible = ref(false)

provide('visible', visible)
</script>
