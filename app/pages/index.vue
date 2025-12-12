<template>
  <MainHeroTheHero />
  <MainAbilitySection />
  <div class="container">
    <MainOptionsSection />
  </div>
  <div class="container">
    <MainWhyKazan />
    <MainBuyCrypto />
    <MainHowBuy />
    <MainBottomOptionsSection />
  </div>
  <MainYourComments />
  <div class="container">
    <MainFirstStep />
    <MainBlogSection />
    <Camera @videoRecorded="handleVideoFile" />
  </div>
</template>

<script setup>
useHead({
  title: 'صفحه اصلی |'
})

function handleVideoFile(file) {
  // فایل رو میگیریم و میریزیم تو فرم
  console.log('Video File Received:', file)
  cardForm.value.identity_video = file
}
</script>
