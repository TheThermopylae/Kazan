<template>
  <UserPanelHomeStepSection />
  <UserPanelHomeMainLinks />
  <UserPanelHomeSliderSection />
  <div class="grid grid-cols-3 gap-2.5 my-5">
    <UserPanelHomeKazanLevel />
    <UserPanelHomeWalletStats />
  </div>
</template>

<script setup>
useHead({
  title: '| خانه'
})
</script>
