<template>
  <header
    class="p-3 flex justify-between items-center fixed w-full top-0 bg-white dark:bg-darkbg transition-all z-50 duration-300"
    :class="{ 'h-16 shadow': scrolled, 'h-20': !scrolled }">
    <HeaderMenuList />
    <ClientOnly>
      <HeaderLeftBtns />
    </ClientOnly>
    <button class="bg-primary rounded-full p-3 text-white flex items-center gap-2 lg:hidden" @click="showFormFunc"
      v-if="!userLogged">
      ورود یا ثبت نام
      <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0.916626L6.38215 5.86713C6.44724 5.93313 6.55276 5.93313 6.61785 5.86713L11.5 0.916626"
          stroke="white" stroke-width="1.5" stroke-linecap="round" />
      </svg>
    </button>
    <AuthMobileForm :showForm="showForm" />
    <AuthMonitorForm :showForm="showForm" />
  </header>
</template>

<script setup>
let scrolled = ref(false)
let showForm = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) scrolled.value = true
    else scrolled.value = false
  })
})

function showFormFunc() {
  showForm.value = true
}

provide('showForm', showForm)
</script>
