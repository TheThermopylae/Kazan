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
      class="cursor-pointer font-peydaB border border-[#EFEFEF] w-full h-[130px] bg-white flex justify-center items-center flex-col p-10 gap-3 rounded text-xs"
    >
      <svg
        width="29"
        height="26"
        viewBox="0 0 29 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.1667 1.66675H11.8334C6.80542 1.66675 4.29075 1.66675 2.72941 3.22941C1.16808 4.79208 1.16675 7.30542 1.16675 12.3334V13.6667C1.16675 18.6947 1.16675 21.2094 2.72941 22.7707C4.29208 24.3321 6.80542 24.3334 11.8334 24.3334H17.1667C22.1947 24.3334 24.7094 24.3334 26.2707 22.7707C27.8321 21.2081 27.8334 18.6947 27.8334 13.6667V12.3334C27.8334 7.30542 27.8334 4.79075 26.2707 3.22941C24.7081 1.66808 22.1947 1.66675 17.1667 1.66675Z"
          stroke="#252525"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M5.16675 18.3334C6.54808 14.8921 11.6947 14.6667 13.1667 18.3334"
          stroke="#252525"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M11.5002 10.0001C11.5002 10.6189 11.2543 11.2124 10.8167 11.65C10.3792 12.0876 9.78567 12.3334 9.16683 12.3334C8.54799 12.3334 7.9545 12.0876 7.51691 11.65C7.07933 11.2124 6.8335 10.6189 6.8335 10.0001C6.8335 9.38124 7.07933 8.78775 7.51691 8.35017C7.9545 7.91258 8.54799 7.66675 9.16683 7.66675C9.78567 7.66675 10.3792 7.91258 10.8167 8.35017C11.2543 8.78775 11.5002 9.38124 11.5002 10.0001Z"
          stroke="#252525"
          stroke-width="2"
        />
        <path
          d="M17.1667 8.3335H23.8334M17.1667 13.0002H23.8334M17.1667 17.6668H20.5001"
          stroke="#252525"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      کارت ملی
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
