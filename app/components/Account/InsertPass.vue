<template>
  <div class="border-b border-[#F0F0F0] dark:border-secdark px-2 pb-3 lg:px-4">
    <p class="text-center font-bold md:text-lg mt-3 mb-5">
      رمز عبور خود را وارد کنید
    </p>
    <div class="text-xs">
      <label for="email-phone" class="text-xs">رمز عبور</label>
      <div class="relative">
        <input
          :type="showPass ? 'text' : 'password'"
          id="email-phone"
          class="bg-[#EFEFEF] dark:bg-secdark block w-full mt-2 rounded-10 p-3"
          placeholder="رمز عبور خود را وارد کنید"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          v-if="!showPass"
          @click="showPass = true"
          class="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
          >
            <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
            <path
              d="M2 12c1.6-4.097 5.336-7 10-7s8.4 2.903 10 7c-1.6 4.097-5.336 7-10 7s-8.4-2.903-10-7"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          v-if="showPass"
          @click="showPass = false"
          class="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1"
          >
            <path
              stroke-linejoin="round"
              d="M10.73 5.073A11 11 0 0 1 12 5c4.664 0 8.4 2.903 10 7a11.6 11.6 0 0 1-1.555 2.788M6.52 6.519C4.48 7.764 2.9 9.693 2 12c1.6 4.097 5.336 7 10 7a10.44 10.44 0 0 0 5.48-1.52m-7.6-7.6a3 3 0 1 0 4.243 4.243"
            />
            <path d="m4 4l16 16" />
          </g>
        </svg>
      </div>
    </div>
    <button
      class="text-primary flex gap-2 items-center text-xs mt-3 cursor-pointer"
      @click="$emit('changePassword')"
    >
      فراموشی رمز عبور
    </button>
  </div>
  <div class="px-2 py-3 lg:px-4">
    <Button
      label="ثبت و ادامه"
      pt:root="!text-sm !w-full !text-white"
      @click="$emit('toStepThree')"
    />
  </div>
</template>
<script setup>
let emit = defineEmits(['toStepThree', 'changePassword'])

let showPass = ref(false)
</script>
