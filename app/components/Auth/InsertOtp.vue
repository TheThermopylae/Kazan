<template>
    <div class="border-b border-[#F0F0F0] px-2 pb-3 lg:px-4">
        <p class="text-center font-bold text-lg mt-3 mb-5">کد تایید را وارد کنید</p>
        <p class="text-xs">کد تایید به شماره 09905457180 ارسال شد</p>
        <button class="text-primary flex gap-2 items-center text-sm mt-3 mb-6 cursor-pointer"
            @click="$emit('toStepOne')">
            ویرایش شماره موبایل
        </button>
        <InputOtp v-model="value" pt:root="!grid !grid-cols-6" :length="6" style="direction: ltr;" />
        <p class="mt-2 text-xs text-[#3B3B3B]">56 ثانیه تا ارسال مجدد کد</p>
    </div>
    <div class="px-2 py-3 lg:px-4">
        <Button label="ثبت و ادامه" pt:root="!w-full" @click="$emit('toStepTwo')" />
    </div>
</template>
<script setup>
let emit = defineEmits(["toStepOne"])

let value = ref(null)
</script>
<style scoped>
:deep(.p-inputotp-input) {
    border: none;
    background-color: #F5F6F7 !important;
    width: 100% !important;
}
</style>