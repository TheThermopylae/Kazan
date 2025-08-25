<template>
    <div class="border-b border-[#F0F0F0] px-2 pb-3 lg:px-4">
        <p class="text-center font-bold text-lg mt-3 mb-5">رمز عبور خود را وارد کنید</p>
        <div class="text-xs mb-3">
            <label for="email-phone" class="text-xs">رمز عبور جدید</label>
            <input type="password" id="email-phone" class="bg-[#EFEFEF] block w-full mt-2 rounded-10 p-3"
                placeholder="رمز عبور جدید را وارد کنید">
        </div>
        <div class="text-xs">
            <label for="email-phone" class="text-xs">تکرار رمز عبور جدید</label>
            <input type="password" id="email-phone" class="bg-[#EFEFEF] block w-full mt-2 rounded-10 p-3"
                placeholder="تکرار رمز عبور خود را وارد کنید">
        </div>
        <div class="my-3 flex flex-col gap-3 text-[#686868]">
            <p v-for="item in items" class="flex items-center gap-2 text-xs">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 5.875V9.625M9.00751 11.5H9.00001M16.5 8.5C16.5 12.6421 13.1421 16 9 16C4.85786 16 1.5 12.6421 1.5 8.5C1.5 4.35786 4.85786 1 9 1C13.1421 1 16.5 4.35786 16.5 8.5Z"
                        stroke="#686868" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                {{ item }}
            </p>
        </div>
        <div class="flex items-center gap-3 bg-[#FDF8EB] rounded-10 p-4 text-[#C39A47] text-xs">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.06594 19.7772L11.5471 3.75025C11.7445 3.41658 12.2555 3.41658 12.4529 3.75025L21.9341 19.7772C22.1259 20.1015 21.8762 20.5 21.4812 20.5H2.51883C2.1238 20.5 1.8741 20.1015 2.06594 19.7772Z"
                    fill="#C39A47" fill-opacity="0.2" />
                <path
                    d="M12 9.7962V14.6616M12.0104 17.0942H12M11.5471 3.75025L2.06594 19.7772C1.8741 20.1015 2.1238 20.5 2.51883 20.5H21.4812C21.8762 20.5 22.1259 20.1015 21.9341 19.7772L12.4529 3.75025C12.2555 3.41658 11.7445 3.41658 11.5471 3.75025Z"
                    stroke="#C39A47" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
        </div>
    </div>
    <div class="px-2 py-3 lg:px-4">
        <div class="flex items-center gap-2 mb-3">
            <Checkbox v-model="checked" binary />
            <p class="text-xs text-[#686868]">
                <NuxtLink to="/" class="text-primary">قوانین و مقررات</NuxtLink>
                صرافی کازان را خوانده و می‌پذیرم.
            </p>
        </div>
        <Button label="ثبت و ادامه" pt:root="!w-full !text-white" @click="$emit('passwordChanged')" />
    </div>
</template>
<script setup>
let emit = defineEmits(["passwordChanged"])

let items = ref(
    ['حداقل ۸ کارکتر باشد.', 'شامل اعداد و حروف باشد.', 'شامل حروف بزرگ و کوچک باشد.']
)
const checked = ref(false);
</script>