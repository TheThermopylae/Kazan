<template>
  <div
    class="lg:p-3 rounded-10 lg:bg-white shadow-md flex flex-col lg:flex-row justify-between gap-2 mt-3 lg:mt-0"
  >
    <UserPanelReferralRefCode />
    <UserPanelReferralRefStatus />
  </div>
  <UserPanelReferralHowToGetReward />
  <UserPanelReferralMyRefCodes />
  <UserPanelReferralRefsAndRewards />
  <UserPanelReferralShareLink />
</template>

<script setup>
definePageMeta({
  layout: 'myaccount-layout',
  title: 'دعوت از دوستان'
})

useHead({
  title: 'دعوت از دوستان |'
})
</script>
