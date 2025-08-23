<template>
    <div class="border-b border-[#F0F0F0] px-2 pb-3 lg:px-4">
        <p class="text-center font-bold text-lg mt-3 mb-5">به صرافی کازان خوش آمدید</p>
        <div class="text-xs">
        <label for="email-phone" class="text-xs">شماره موبایل یا ایمیل</label>
            <input type="text" id="email-phone" class="bg-[#EFEFEF] block w-full mt-2 rounded-10 p-3"
                placeholder="شماره موبایل یا ایمیل خود را وارد کنید">
        </div>
        <button class="text-primary flex gap-2 items-center text-sm mt-3 cursor-pointer" @click="showCode = !showCode">
            کد دعوت اختیاری
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="transition-all" :class="{ 'rotate-180': showCode }">
                <path d="M1 1.5L6.85858 7.4406C6.93668 7.5198 7.06332 7.5198 7.14142 7.4406L13 1.5" stroke="#0057FF"
                    stroke-width="1.5" stroke-linecap="round" />
            </svg>
        </button>
        <div class="mt-3 text-xs" v-if="showCode">
            <label for="email-phone">شماره موبایل یا ایمیل</label>
            <input type="text" id="email-phone" class="bg-[#EFEFEF] block w-full my-2 rounded-10 p-3"
                placeholder="کد دعوت را وارد کنید (اختیاری)">
            <p class="flex items-center gap-2 text-[#686868] text-2sm">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 5.875V9.625M9.00751 11.5H9.00001M16.5 8.5C16.5 12.6421 13.1421 16 9 16C4.85786 16 1.5 12.6421 1.5 8.5C1.5 4.35786 4.85786 1 9 1C13.1421 1 16.5 4.35786 16.5 8.5Z"
                        stroke="#686868" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </p>
        </div>
    </div>
    <div class="px-2 py-3 lg:px-4">
        <Button label="ثبت و ادامه" pt:root="!w-full" @click="$emit('toStepTwo')" />
    </div>
</template>
<script setup>
let showCode = ref(false)

let emit = defineEmits(["toStepTwo"])
</script>