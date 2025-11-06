<template>
  <section>
    <div class="grid grid-cols-2 gap-1">
      <article class="border border-[#F5F6F7]" v-for="item in 6" :key="item">
        <div class="flex justify-between items-center p-1">
          <div class="flex items-center gap-2">
            <img src="/crypto/RUB.svg" class="size-6" />
            <div>
              <h4 class="text-sm mb-1">
                RUB / <span class="text-secondary">TMN</span>
              </h4>
              <h5 class="text-2sm">
                <span class="text-secondary">تومان</span> / روبل
              </h5>
            </div>
          </div>
          <input type="checkbox" class="checkbox checkbox-primary" />
        </div>
        <div
          class="border-t border-[#F5F6F7] mt-3 px-1 py-3 text-sm flex justify-between items-center"
        >
          51.2155
          <span class="text-secondary text-2sm">تومان</span>
        </div>
      </article>
    </div>
  </section>
</template>
