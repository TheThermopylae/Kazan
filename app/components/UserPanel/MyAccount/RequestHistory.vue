<template>
  <section
    class="lg:bg-white lg:dark:bg-maindark p-4 rounded-10 mb-32"
    v-if="route.query.type == 'history' || width >= 1024"
  >
    <h2 class="text-xl font-bold mb-5 hidden lg:block">
      تاریخچه درخواست های ثبت کارت
    </h2>
    <div class="grid xl:grid-cols-2 gap-3">
      <UserPanelMyAccountBankCard v-for="item in 4" />
    </div>
  </section>
</template>

<script setup>
let width = ref(0)

let route = useRoute()

function updateWidth () {
  width.value = window.innerWidth
}

onMounted(() => {
  updateWidth()
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>
