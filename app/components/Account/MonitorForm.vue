<template>
  <Dialog
    v-model:visible="showForm"
    style="height: auto"
    @after-hide="step = 1"
    pt:root="!rounded-t-10 !w-3/4 !max-w-[480px] !hidden lg:!block !bg-white dark:!bg-maindark"
    pt:header="!p-1 !border-b !border-[#F0F0F0] dark:!border-secdark"
    pt:content="!px-0 !pb-0"
  >
    <template #header>
      <h4 class="absolute left-1/2 -translate-x-1/2 top-3 text-xs md:text-sm">
        ورود و ثبت نام
      </h4>
    </template>
    <AccountInsertData v-if="step == 1" @toStepTwo="step = 2" />
    <AccountInsertPass v-else-if="step == 2" @toStepThree="step = 3" />
    <AccountInsertOtp v-else-if="step == 3" @toStepOne="step = 1" />
    <div v-if="step == 1">
      <div class="flex items-center gap-2 text-secondary text-2sm mb-2">
        <div class="flex-grow h-[1px] bg-stroke"></div>
        <span>یا ادامه با</span>
        <div class="flex-grow h-[1px] bg-stroke"></div>
      </div>
      <AccountSocialAccounts />
    </div>
  </Dialog>
</template>

<script setup>
let showForm = inject('showForm')

let step = ref(1)
</script>
