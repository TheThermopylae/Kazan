<template>
  <Dialog
    v-model:visible="showAuth"
    style="height: auto"
    @after-hide="step = 1"
    pt:root="!rounded-t-10 !text-black !w-3/4 !max-w-[480px] !hidden lg:!block !bg-white dark:!bg-maindark dark:!text-white !overflow-auto !border-none"
    pt:header="!p-1 !border-b !border-[#F0F0F0] dark:!border-secdark"
    pt:content="!px-0 !pb-0"
  >
    <template #header>
      <h4 class="absolute left-1/2 -translate-x-1/2 top-3 text-xs md:text-sm">
        احراز هویت پایه
      </h4>
    </template>
    <div class="text-center w-2/3 m-auto">
      <p
        class="font-bold lg:text-xl mt-3 mb-1.5"
        v-text="
          step != 'complete'
            ? 'احراز هویت پایه خود را تکمیل کنید'
            : 'عالی بود! یک قدم تا پیوستن به ما.'
        "
      />
      <p
        class="text-xs leading-6"
        v-text="
          step != 'complete'
            ? 'برای واریز تومان و انجام معامله ثبت نام خود را تکمیل کنید.'
            : 'اطلاعاتت به دست ما رسید. کارشناسان ما دارن مدارکت رو بررسی می‌کنن تا هرچه زودتر به جمع ما اضافه بشی. این کار تا ۱۰ دقیقه دیگه تمومه.'
        "
      />
    </div>
    <section
      class="flex justify-center items-center gap-3 my-8"
      v-if="step != 'complete'"
    >
      <div class="flex items-center gap-3">
        <span
          class="text-sm block size-6 flex-center text-white rounded-md"
          :class="{ 'bg-primary': step == 1, 'bg-[#00D018]': step == 2 }"
          >1</span
        >
        اطلاعات فردی
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 6L9 12L15 18"
          stroke="#252525"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="flex items-center gap-3">
        <span
          class="text-sm block size-6 flex-center text-white rounded-md"
          :class="{
            'bg-[#D7DADF] dark:text-black': step == 1,
            'bg-primary': step == 2
          }"
          >2</span
        >
        آپلود مدارک
      </div>
    </section>
    <AuthInsertData v-if="step == 1" @toStepTwo="step = 2" />
    <AuthInsertFiles v-if="step == 2" @toStepComplete="step = 'complete'" />
    <AuthCompleteAuth v-if="step == 'complete'" />
  </Dialog>
</template>

<script setup>
let showAuth = inject('showAuth')

let step = ref(1)
</script>
