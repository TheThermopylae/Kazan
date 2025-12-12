<template>
  <div class="border-b border-[#F0F0F0] dark:border-secdark px-3 pb-3 lg:px-4">
    <div class="text-xs">
      <label for="first-name" class="text-xs">نام</label>
      <input
        type="text"
        id="first-name"
        class="bg-[#EFEFEF] dark:bg-secdark block w-full mt-2 rounded-10 p-3"
        placeholder="نام را وارد کنید"
        v-model="name"
      />
      <p v-if="!validName && name" class="mt-2 text-red-500">
        نام خود را باید به شکل فارسی و بدون عدد وارد کنید
      </p>
    </div>
    <div class="text-xs mt-3">
      <label for="first-name" class="text-xs">نام خانوادگی</label>
      <input
        type="text"
        id="first-name"
        class="bg-[#EFEFEF] dark:bg-secdark block w-full mt-2 rounded-10 p-3"
        placeholder="نام خانوادگی را وارد کنید"
        v-model="family"
      />
      <p v-if="!validFamily && family" class="mt-2 text-red-500">
        نام خانوادگی خود را باید به شکل فارسی و بدون عدد وارد کنید
      </p>
    </div>
    <div class="text-xs my-3">
      <label for="codemeli" class="text-xs">کد ملی</label>
      <input
        type="text"
        id="codemeli"
        class="bg-[#EFEFEF] dark:bg-secdark block w-full mt-2 rounded-10 p-3 border border-[#EFEFEF]"
        :class="{ 'border-red-500': validNationalId === false }"
        placeholder="کد ملی را وارد کنید"
        v-model="codeMeli"
      />
    </div>
  </div>
  <div class="px-2 py-3 lg:px-4">
    <Button
      label="ثبت و ادامه"
      pt:root="!text-sm !w-full !text-white"
      @click="stepNextFunc"
    />
  </div>
  <Toast />
</template>
<script setup>
import {
  verifyIranianNationalId,
  isPersian
} from '@persian-tools/persian-tools'
let emit = defineEmits(['toStepTwo'])

let { authForm } = AuthLvlTwo()

let { showToast } = useToastComp()

let codeMeli = ref('')
let name = ref('')
let family = ref('')

let validNationalId = ref('')
let validName = ref('')
let validFamily = ref('')

function stepNextFunc () {
  if (
    !codeMeli.value ||
    !name.value ||
    !validNationalId.value ||
    !validName.value
  )
    showToast(
      'warn',
      'اخطار',
      'باید تمامی فیلد ها را کامل و به شکل صحیح پر کنید'
    )
  else {
    authForm.value.name = name.value
    authForm.value.family = family.value
    authForm.value.national_code = codeMeli.value

    emit('toStepTwo')
  }
}

watch(codeMeli, () => {
  validNationalId.value = verifyIranianNationalId(codeMeli.value)
})

watch(name, () => {
  validName.value = isPersian(name.value)
})

watch(family, () => {
  validFamily.value = isPersian(family.value)
})
</script>
