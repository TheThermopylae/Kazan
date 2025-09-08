<template>
  <div class="border-b border-[#F0F0F0] dark:border-secdark px-3 pb-3 lg:px-4">
    <div class="text-xs">
      <label for="email-phone" class="text-xs">نام</label>
      <input
        type="text"
        id="email-phone"
        class="bg-[#EFEFEF] dark:bg-secdark block w-full mt-2 rounded-10 p-3"
        placeholder="نام را وارد کنید"
      />
    </div>
    <div class="text-xs my-3">
      <label for="email-phone" class="text-xs">نام خانوادگی</label>
      <input
        type="text"
        id="email-phone"
        class="bg-[#EFEFEF] dark:bg-secdark block w-full mt-2 rounded-10 p-3"
        placeholder="نام خانوادگی را وارد کنید"
      />
    </div>
    <div class="text-xs my-3">
      <label for="email-phone" class="text-xs">کد ملی</label>
      <input
        type="number"
        id="email-phone"
        class="bg-[#EFEFEF] dark:bg-secdark block w-full mt-2 rounded-10 p-3"
        placeholder="کد ملی را وارد کنید"
      />
    </div>
    <div class="text-xs">
      <label for="email-phone" class="text-xs mb-2 block">تاریخ تولد</label>
      <date-picker-ir v-model="date" max="1404/12/29" simple />
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
