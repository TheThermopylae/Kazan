<template>
  <HeaderTheHeader />
  <main class="mt-16 lg:mt-16">
    <slot />
  </main>
  <FooterDesSection />
  <FooterTheFooter />
  <SpeedInsights />
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>