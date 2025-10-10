<template>
  <UserPanelSecurityLoginMethod />
  <UserPanelSecurityChangePassword />
  <UserPanelSecurityConnectedDevice />
  <UserPanelSecurityActivityHistory />
</template>

<script setup>
definePageMeta({
  layout: 'myaccount-layout',
  title: 'امنیت حساب کاربری'
})

useHead({
  title: 'امنیت حساب کاربری |'
})
</script>
