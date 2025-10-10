<template>
  <section class="bg-white dark:bg-maindark p-4 rounded">
    <div
      class="border-b border-stroke dark:border-darkstroke text-sm pb-3 mb-3"
    >
      <p>تعیین شیوه ورود به حساب کاربری</p>
      <p class="mt-3">
        از چه طریقی مایل به دریافت کد ورود به حساب کاربری هستید؟
      </p>
    </div>
    <div>
      <div class="mb-4">
        <div class="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="radio-1"
            class="radio"
            :class="{ 'radio-primary': value == 'sms' }"
            checked
            value="sms"
            v-model="value"
          />
          دریافت از طریق پیامک
        </div>
        <p class="text-xs text-[#0000069E] dark:text-textdark mt-2">
          به شماره 0991****000 ارسال خواهد شد.
        </p>
      </div>
      <div class="mb-4">
        <div class="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="radio-1"
            class="radio"
            :class="{ 'radio-primary': value == 'email' }"
            value="email"
            v-model="value"
          />
          دریافت از طریق ایمیل
        </div>
        <p class="text-xs text-[#0000069E] dark:text-textdark mt-2">
          هنوز ایمیلی را برای حساب کاربری تعیین نکرده‌اید.
        </p>
      </div>
      <div class="mb-4">
        <div class="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="radio-1"
            class="radio"
            :class="{ 'radio-primary': value == 'tel' }"
            value="tel"
            v-model="value"
          />
          دریافت از طریق بات تلگرام
        </div>
        <p class="text-xs text-[#0000069E] dark:text-textdark mt-2">
          از طریق بات تلگرام کد ورود را دریافت کنید.
        </p>
      </div>
      <div>
        <div class="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="radio-1"
            class="radio"
            :class="{ 'radio-primary': value == 'auth' }"
            value="auth"
            v-model="value"
          />
          دریافت از طریق اپلیکیشن رمزساز (مانند Google Authenticator)
        </div>
        <p class="text-xs text-[#0000069E] dark:text-textdark mt-2">
          برنامه‌ای را فعال نکرده‌اید.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
let value = ref('sms')
</script>
