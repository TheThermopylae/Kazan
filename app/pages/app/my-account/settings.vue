<template>
  <div class="lg:w-1/2">
    <UserPanelSettingsManageMessages />
    <UserPanelSettingsManageTrades />
    <section
      class="bg-white dark:bg-maindark rounded-10 flex justify-between items-center p-4"
    >
      <h3>انتخاب تم</h3>
      <HeaderSwitchTheme class="dark:border border-darkstroke" />
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'myaccount-layout',
  title: 'تنظیمات'
})

useHead({
  title: 'تنظیمات حساب کاربری |'
})
</script>
