<template>
  <section class="bg-white p-3">
    <div class="flex justify-between text-sm mb-8">
      <button
        class="text-center block text-secondary relative"
        :class="{ '!text-primary': view == 0 }"
        @click="view = 0"
      >
        دیدبان
        <div
          class="h-[3px] w-full bg-primary rounded-t-[50px] mt-3 absolute left-1/2 -translate-x-1/2"
          v-if="view == 0"
        ></div>
      </button>
      <button
        class="text-center block text-secondary relative"
        :class="{ '!text-primary': view == 1 }"
        @click="view = 1"
      >
        جدیدترین
        <div
          class="h-[3px] w-full bg-primary rounded-t-[50px] mt-3 absolute left-1/2 -translate-x-1/2"
          v-if="view == 1"
        ></div>
      </button>
      <button
        class="text-center block text-secondary relative"
        :class="{ '!text-primary': view == 2 }"
        @click="view = 2"
      >
        پرسود ترین
        <div
          class="h-[3px] w-full bg-primary rounded-t-[50px] mt-3 absolute left-1/2 -translate-x-1/2"
          v-if="view == 2"
        ></div>
      </button>
      <button
        class="text-center block text-secondary relative"
        :class="{ '!text-primary': view == 3 }"
        @click="view = 3"
      >
        بیشترین معامله
        <div
          class="h-[3px] w-full bg-primary rounded-t-[50px] mt-3 absolute left-1/2 -translate-x-1/2"
          v-if="view == 3"
        ></div>
      </button>
    </div>
    <AppWatchSection v-if="view == 0" />
    <AppNewestCrypto v-if="view == 1" />
  </section>
</template>

<script setup>
let view = ref(0)
</script>
