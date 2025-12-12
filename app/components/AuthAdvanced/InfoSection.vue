<template>
  <div class="px-3 lg:px-4">
    <section
      class="bg-[#F2F8FF] dark:bg-secdark rounded-10 p-3 text-xs flex flex-col gap-3"
    >
      <div
        class="flex gap-3 items-center text-primary font-bold"
        v-for="item in infos"
        :key="item"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_3596_555)">
            <path
              d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6025 18.3332 10.0001C18.3332 5.39771 14.6022 1.66675 9.99984 1.66675C5.39746 1.66675 1.6665 5.39771 1.6665 10.0001C1.6665 14.6025 5.39746 18.3334 9.99984 18.3334Z"
              fill="#4774C3"
              fill-opacity="0.2"
            />
            <path
              d="M9.99984 7.08341V11.2501M10.0082 13.3334H9.99985M18.3332 10.0001C18.3332 14.6025 14.6022 18.3334 9.99984 18.3334C5.39746 18.3334 1.6665 14.6025 1.6665 10.0001C1.6665 5.39771 5.39746 1.66675 9.99984 1.66675C14.6022 1.66675 18.3332 5.39771 18.3332 10.0001Z"
              stroke="#0057FF"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3596_555">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {{ item }}
      </div>
    </section>
  </div>
  <div
    class="px-3 py-3 lg:px-4 border-t border-[#F0F0F0] dark:border-secdark mt-3"
  >
    <Button
      label="ادامه"
      pt:root="!text-sm !w-full !text-white"
      @click="$emit('toStepThree')"
    />
    <Toast />
  </div>
</template>
<script setup>
let emit = defineEmits(['toStepComplete'])

let infos = ref([
  'مدت زمان ضبط ویدیو حداکثر 35 ثانیه میباشد',
  'برای ضبط در نور مناسب قرار بگیرید تا تصویر کاملا روشن و واضح باشد',
  'با صدایی رسا و شفاف صحبت کنید',
  'در محلی ثابت بایستید یا بشینید با پشت زمینه سفید',
  'برای انتخاب ویدیو حجم آن حداکثر 40 مگابایت باشد'
])
</script>
