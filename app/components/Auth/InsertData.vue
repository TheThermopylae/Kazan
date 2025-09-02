<template>
  <div class="border-b border-[#F0F0F0] px-3 lg:px-4">
    <p class="text-center font-bold md:text-lg mt-3 mb-5">
      به صرافی کازان خوش آمدید
    </p>
    <div class="text-xs">
      <label for="email-phone" class="text-xs">نام</label>
      <input
        type="text"
        id="email-phone"
        class="bg-[#EFEFEF] block w-full mt-2 rounded-10 p-3"
        placeholder="نام را وارد کنید"
      />
    </div>
    <div class="text-xs my-3">
      <label for="email-phone" class="text-xs">نام خانوادگی</label>
      <input
        type="text"
        id="email-phone"
        class="bg-[#EFEFEF] block w-full mt-2 rounded-10 p-3"
        placeholder="نام خانوادگی را وارد کنید"
      />
    </div>
    <div class="text-xs my-3">
      <label for="email-phone" class="text-xs">کد ملی</label>
      <input
        type="number"
        id="email-phone"
        class="bg-[#EFEFEF] block w-full mt-2 rounded-10 p-3"
        placeholder="کد ملی را وارد کنید"
      />
    </div>
    <div class="text-xs">
      <label for="email-phone" class="text-xs mb-2 block">تاریخ تولد</label>
      <date-picker-ir
        v-model="date"
        format="YYYY-MM-DD"
        display-format="jYYYY-jMM-jDD"
      />
    </div>
  </div>
  <div class="px-2 py-3 lg:px-4">
    <Button
      label="ثبت و ادامه"
      pt:root="!text-sm !w-full !text-white"
      @click="$emit('toStepTwo')"
    />
  </div>
</template>
<script setup>
let date = ref('')

let emit = defineEmits(['toStepTwo'])
</script>
