<template>
  <section>
    <h2>دارایی های شما</h2>
    <button
      class="border border-stroke dark:border-darkstroke text-sm rounded-full p-2.5 my-4 transition"
    >
      عدم نمایش دارایی خرد
    </button>
    <div class="flex justify-between text-2sm mb-2">
      کوین / تعداد دارایی
      <span class="text-secondary">ارزش / تغییرات 24 ساعت اخیر</span>
    </div>
    <div>
      <article
        class="flex justify-between items-center gap-3 mb-3 pb-3 border-b border-stroke dark:border-darkstroke last:m-0 last:p-0 last:border-none"
        v-for="item in 10"
      >
        <div class="flex items-center gap-1">
          <NuxtImg
            src="/userpanel/wallet/toman.png"
            alt="toman"
            class="size-7"
          />
          <div>
            <h4 class="text-sm mt-1 text-black dark:text-white">
              تومان
              <span class="text-secondary dark:text-textdark">(TMN)</span>
            </h4>
            <h5 class="text-secondary dark:text-textdark text-2sm mt-1">
              9999
            </h5>
          </div>
        </div>
        <span class="text-sm">9.999</span>
      </article>
    </div>
  </section>
</template>
