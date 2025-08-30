<template>
    <Dialog v-model:visible="showForm" style="height: auto" @after-hide="step = 1"
        pt:root="!rounded-t-10 !text-black !w-3/4 !max-w-[480px] !hidden lg:!block !bg-white"
        pt:header="!p-1 !border-b !border-[#F0F0F0]" pt:content="!px-0 !pb-0">
        <template #header>
            <h4 class="absolute left-1/2 -translate-x-1/2 top-3 text-xs md:text-sm">ورود و ثبت نام</h4>
        </template>
        <AuthInsertData v-if="step == 1" @toStepTwo="step = 2" />
        <AuthInsertPass v-else-if="step == 2" @toStepThree="step = 3" />
        <AuthInsertOtp v-else-if="step == 3" @toStepOne="step = 1" />
        <p class="text-center text-[#00000666] text-2sm md:text-xs mb-4" v-if="step != 3"> لورم ایپسوم متن ساختگی با
            تولید سادگی
            نامفهوم</p>
    </Dialog>
</template>

<script setup>
let showForm = inject('showForm')

let step = ref(1);
</script>