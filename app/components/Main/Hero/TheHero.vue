<template>
  <section class="mt-5 py-5 lg:py-32">
    <div
      class="container flex flex-col lg:flex-row justify-between items-center gap-10"
    >
      <div>
        <h1 class="text-xl xl:text-3xl mb-2">
          خرید ارز دیجیتال با نهایت سرعت و سهولت
        </h1>
        <p class="leading-8 text-sm mb-10">
          در پلتفرم کازان تنها با سه کلیک، سریع و آسان معامله کنید.
        </p>
        <NuxtLink to="/" class="primary p-3 text-sm rounded-md"
          >شروع معامله آسان</NuxtLink
        >
      </div>
      <MainHeroCalculateCrypto />
    </div>
  </section>
  <Toast />
</template>

<style scoped>
.py-5 {
  background: url('/main/candle.svg') center/cover;
}
</style>
