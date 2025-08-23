<template>
    <div class="border-b border-[#F0F0F0] px-2 pb-3 lg:px-4">
        <p class="text-center font-bold text-lg mt-3 mb-5">رمز عبور خود را وارد کنید</p>
        <div class="text-xs">
            <label for="email-phone" class="text-xs">رمز عبور</label>
        
        </div>
        <button class="text-primary flex gap-2 items-center text-sm mt-3 cursor-pointer">
           فراموشی رمز عبور
        </button>
    </div>
    <div class="px-2 py-3 lg:px-4">
        <Button label="ثبت و ادامه" pt:root="!w-full" @click="$emit('changePass')" />
    </div>
</template>
<script setup>
let emit = defineEmits(["changePass"])
</script>