<template>
  <div class="border-b border-[#F0F0F0] dark:border-secdark px-2 pb-3 lg:px-4">
    <p class="text-center font-bold md:text-lg mt-3 mb-5">
      کد تایید را وارد کنید
    </p>
    <p class="text-xs">کد تایید به شماره 09905457180 ارسال شد</p>
    <button
      class="text-primary flex gap-2 items-center text-xs mt-3 mb-6 cursor-pointer"
      @click="$emit('toStepOne')"
    >
      ویرایش شماره موبایل
    </button>
    <InputOtp
      integerOnly="true"
      v-model="value"
      pt:root="!grid !grid-cols-6"
      :length="6"
      style="direction: ltr"
    />
    <p class="mt-2 text-xs text-[#3B3B3B] dark:text-textdark">
      56 ثانیه تا ارسال مجدد کد
    </p>
  </div>
  <div class="px-2 py-3 lg:px-4">
    <Button
      label="ثبت و ادامه"
      pt:root="!text-sm !w-full !text-white"
      @click="finishAuth"
    />
  </div>
</template>
<script setup>
let emit = defineEmits(['toStepOne'])
let value = ref(null)

function finishAuth () {
  localStorage.setItem('auth', JSON.stringify(true))
}
</script>
<style scoped>
:deep(.p-inputotp-input) {
  border: none;
  background-color: #f5f6f7 !important;
  width: 100% !important;
}
</style>
