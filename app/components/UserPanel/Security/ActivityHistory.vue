<template>
  <section class="mb-3 bg-white dark:bg-maindark rounded p-4">
    <div>
      <h2 class="mb-5" v-if="route.path != '/app/my-account/security/activity-history'">تاریخچه فعالیت</h2>
      <div class="flex gap-2">
        <button
          class="border border-stroke dark:border-darkstroke rounded-full py-1.5 px-2 text-sm text-secondary dark:text-textdark transition"
          :class="{
            'bg-selected dark:bg-selected/20 !text-primary': table == 0
          }"
          @click="table = 0"
        >
          تاریخچه ورود
        </button>
        <button
          class="border border-stroke dark:border-darkstroke rounded-full py-1.5 px-2 text-sm text-secondary dark:text-textdark transition"
          :class="{
            'bg-selected dark:bg-selected/20 !text-primary': table == 1
          }"
          @click="table = 1"
        >
          تغییرات امنیتی
        </button>
      </div>
    </div>
    <div class="flex-grow overflow-auto">
      <UserPanelSecurityLoginHistory v-if="table == 0" />
      <UserPanelSecurityChangeSecurity v-else />
    </div>
  </section>
</template>

<script setup>
let route = useRoute()
let table = ref(0)
</script>
