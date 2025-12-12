<template>
  <div class="px-3 lg:px-4">
    <Camera @videoRecorded="handleVideoSelect" />

    <div
      v-if="authForm.video"
      class="mt-2 text-center text-xs text-green-600 bg-green-50 p-2 rounded-lg border border-green-200"
    >
      ویدیو با موفقیت انتخاب شد ✅
    </div>
  </div>

  <div
    class="px-3 py-3 lg:px-4 border-t border-[#F0F0F0] dark:border-secdark mt-3"
  >
    <Button
      label="ثبت و ادامه"
      pt:root="!text-sm !w-full !text-white"
      @click="submit"
      :loading="loading"
    />
    <Toast />
  </div>
</template>

<script setup>
let emit = defineEmits(['toStepComplete'])

let { authForm } = AuthLvlOne()
let { showToast } = useToastComp()

let loading = ref(false)

// تابعی که وقتی کاربر ویدیو رو تایید کرد اجرا میشه
function handleVideoSelect (file) {
  authForm.value.video = file
  // showToast('success', 'تایید', 'ویدیو با موفقیت ذخیره شد')
}

async function submit () {
  // اعتبارسنجی ویدیو هم اضافه شد
  if (!authForm.value.video)
    showToast(
      'warn',
      'اخطار',
      'لطفا تمام مدارک و ویدیوی احراز هویت را وارد کنید'
    )
  else {
    try {
      loading.value = true

      let formData = new FormData()
      formData.append('name', authForm.value.name)
      formData.append('family', authForm.value.family)
      formData.append('national_code', authForm.value.national_code)
      formData.append('video', authForm.value.video)

      let data = await $fetch('/api/auth/authLvlTwo', {
        credentials: 'include',
        method: 'POST',
        body: formData
      })

      console.log(data)
      emit('toStepComplete')
    } catch (err) {
      console.log(err)
      showToast('error', 'خطا', 'مشکلی در ارسال اطلاعات پیش آمد')
    } finally {
      loading.value = false
    }
  }
}
</script>
