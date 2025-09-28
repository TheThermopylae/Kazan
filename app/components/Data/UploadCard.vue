<template>
  <div>
    <input
      type="file"
      ref="fileInput"
      class="hidden"
      @change="handleFile"
      accept="image/*"
    />
    <button
      @click="triggerFileInput"
      class="cursor-pointer font-peydaB border border-[#EFEFEF] dark:border-secdark w-full h-[130px] bg-white dark:bg-secdark flex justify-center items-center flex-col p-10 gap-3 rounded text-xs"
    >
      <div>
        <svg
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="m-auto mb-2"
        >
          <path
            d="M17.7656 29.3332C21.2923 29.3332 23.055 29.3332 24.3216 28.3252C25.5883 27.3158 25.991 25.5905 26.799 22.1385L29.355 11.2091C29.8016 9.29848 30.0256 8.34248 29.619 7.64915C28.8843 6.39448 27.0056 6.66648 25.779 6.66648"
            stroke="#252525"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.16602 11.9998C3.16602 7.59984 3.16602 5.39984 4.53268 4.03317C5.89935 2.6665 8.09935 2.6665 12.4993 2.6665H16.4993C20.8993 2.6665 23.0994 2.6665 24.466 4.03317C25.8327 5.39984 25.8327 7.59984 25.8327 11.9998V19.9998C25.8327 24.3998 25.8327 26.5998 24.466 27.9665C23.0994 29.3332 20.8993 29.3332 16.4993 29.3332H12.4993C8.09935 29.3332 5.89935 29.3332 4.53268 27.9665C3.16602 26.5998 3.16602 24.3998 3.16602 19.9998V11.9998Z"
            stroke="#252525"
            stroke-width="2"
          />
          <path
            d="M14.4993 7.99976C15.9138 7.99976 17.2704 8.56166 18.2706 9.56185C19.2708 10.562 19.8327 11.9186 19.8327 13.3331C19.8327 14.7476 19.2708 16.1041 18.2706 17.1043C17.2704 18.1045 15.9138 18.6664 14.4993 18.6664M14.4993 7.99976C13.0849 7.99976 11.7283 8.56166 10.7281 9.56185C9.72792 10.562 9.16602 11.9186 9.16602 13.3331C9.16602 14.7476 9.72792 16.1041 10.7281 17.1043C11.7283 18.1045 13.0849 18.6664 14.4993 18.6664M14.4993 7.99976C13.3953 7.99976 12.4993 10.3864 12.4993 13.3331C12.4993 16.2798 13.3953 18.6664 14.4993 18.6664M14.4993 7.99976C15.6033 7.99976 16.4993 10.3864 16.4993 13.3331C16.4993 16.2798 15.6033 18.6664 14.4993 18.6664"
            stroke="#252525"
            stroke-width="2"
          />
          <path
            d="M9.83203 22.6665H19.1654"
            stroke="#252525"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        صفحه اول شناسنامه خود
      </div>
    </button>
  </div>
</template>

<script setup>
const fileInput = ref(null)

let emit = defineEmits(['selectedFile'])
let reSelectCard = inject('reSelectCard')

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFile = event => {
  const file = event.target.files[0]
  emit('selectedFile', file)
}

onMounted(() => {
  if (reSelectCard.value) triggerFileInput()
})
</script>
