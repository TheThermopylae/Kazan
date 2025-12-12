<template>
  <div class="border-b border-[#F0F0F0] dark:border-secdark px-2 pb-3 lg:px-4">
    <p class="text-center font-bold md:text-lg mt-3 mb-5">
      کد تایید را وارد کنید
    </p>
    <p class="text-xs">کد تایید به شماره {{ form.phone }} ارسال شد</p>
    <button
      class="text-primary flex gap-2 items-center text-xs mt-3 mb-6 cursor-pointer"
      @click="$emit('toStepOne')"
    >
      ویرایش شماره موبایل
    </button>
    <InputOtp
      :integerOnly="true"
      v-model="otp"
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
      @click="submit"
      :loading="loading"
    />
  </div>
</template>
<script setup>
let emit = defineEmits(['toStepOne'])
let otp = ref('')

let showForm = inject('showForm')

let { showToast } = useToastComp()
let { form } = loginFormData()
let { userData } = userAuth()

let loading = ref(false)

let config = useRuntimeConfig()

async function submit () {
  if (otp.value.length < 5)
    showToast('warn', 'اخطار', 'کد تایید 5 رقمی را باید وارد کنید')
  else {
    try {
      console.log(form.value)

      loading.value = true

      let data = await $fetch(`/api/auth/otp`, {
        method: 'POST',
        body: {
          phone: form.value.phone,
          code: otp.value
        }
      })

      userData.value = data
      showForm.value = false
      return navigateTo('/app')
    } catch (err) {
      console.log(err)
    } finally {
      loading.value = false
    }
  }
}
</script>
<style scoped>
:deep(.p-inputotp-input) {
  border: none;
  background-color: #f5f6f7 !important;
  width: 100% !important;
}
</style>
