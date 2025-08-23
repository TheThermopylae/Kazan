<template>
  <Drawer v-model:visible="visible" position="full">
    <template #header>
      <div class="flex items-center gap-2">
        <NuxtImg src="/logo.svg" class="size-6" />
        <p class="font-bold">صرافی <span class="text-primary">کازان</span></p>
        <button>ثبت نام</button>
      </div>
    </template>
  </Drawer>
  <Button unstyled @click="visible = true" pt:root="lg:!hidden">
    <template #icon>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 6H22M2 12H22M2 18H22"
          stroke="#282930"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </template>
  </Button>
</template>

<script setup>
let visible = ref(false)
</script>
