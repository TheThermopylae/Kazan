<template>
  <div class="hidden lg:block">
    <UserPanelSecurityLoginMethod />
    <UserPanelSecurityChangePassword />
    <UserPanelSecurityConnectedDevice />
    <UserPanelSecurityActivityHistory />
  </div>
  <UserPanelSecurityMobileLinks />
</template>

<script setup>
definePageMeta({
  layout: 'myaccount-layout',
  title: 'امنیت'
})

useHead({
  title: 'امنیت حساب کاربری |'
})
</script>
