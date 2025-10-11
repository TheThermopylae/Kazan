<template>
  <main
    class="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 flex flex-col items-center"
  >
    <img src="/404.svg" alt="404-img" />
    <h1 class="font-bold text-2xl my-4">صفحه مورد نظر پیدا نشد!</h1>
    <div class="text-center text-[#00000099] mb-6">
      <p>آدرس این صفحه اشتباه است و یا دیگر وجود ندارد.</p>
      <p>می‌توانید از صفحه خانه شروع کنید.</p>
    </div>
    <button
      class="bg-[#171D26] w-3/5 rounded-lg text-white p-3 font-bold"
      @click="clearError({ redirect: '/' })"
    >
      بازگشت به خانه
    </button>
  </main>
  <SupportButton />
</template>

<script setup>
useHead({
  title: '404 - صفحه مورد نظر یافت نشد | کازان'
})
</script>
