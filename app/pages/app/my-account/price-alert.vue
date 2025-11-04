<template>
  <UserPanelPriceAlertFirstAlert v-if="alerts.length <= 0" />
  <div v-else>
    <UserPanelPriceAlertAlertsTable />
    <UserPanelPriceAlertMobileAlerts />
  </div>
  <UserPanelPriceAlertAddAlertModal
    @success="showSuccessNotif"
    @error="showToast('error', 'خطا', 'باید قیمت را تعیین کنید!')"
  />
  <Toast />
</template>

<script setup>
definePageMeta({
  layout: 'myaccount-layout',
  title: 'گوش به زنگ'
})

useHead({
  title: 'گوش به زنگ ها |'
})

let { showToast } = useToastComp()

let visible = ref(false)

let alerts = ref([])

function showSuccessNotif () {
  showToast('گوش به زنگ شما با موفقیت اضافه شد!')
}

provide('visible', visible)
provide('alerts', alerts)
</script>
