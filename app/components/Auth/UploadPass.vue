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
        height="30"
        viewBox="0 0 29 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7668 28.3334C19.2935 28.3334 21.0562 28.3334 22.3228 27.3254C23.5895 26.3161 23.9922 24.5907 24.8002 21.1387L27.3562 10.2094C27.8028 8.29873 28.0268 7.34273 27.6202 6.64939C26.8855 5.39473 25.0068 5.66673 23.7802 5.66673"
          stroke="#252525"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.16675 11.0001C1.16675 6.60008 1.16675 4.40008 2.53341 3.03341C3.90008 1.66675 6.10008 1.66675 10.5001 1.66675H14.5001C18.9001 1.66675 21.1001 1.66675 22.4667 3.03341C23.8334 4.40008 23.8334 6.60008 23.8334 11.0001V19.0001C23.8334 23.4001 23.8334 25.6001 22.4667 26.9667C21.1001 28.3334 18.9001 28.3334 14.5001 28.3334H10.5001C6.10008 28.3334 3.90008 28.3334 2.53341 26.9667C1.16675 25.6001 1.16675 23.4001 1.16675 19.0001V11.0001Z"
          stroke="#252525"
          stroke-width="2"
        />
        <path
          d="M12.5001 7C13.9146 7 15.2711 7.5619 16.2713 8.5621C17.2715 9.56229 17.8334 10.9188 17.8334 12.3333C17.8334 13.7478 17.2715 15.1044 16.2713 16.1046C15.2711 17.1048 13.9146 17.6667 12.5001 17.6667M12.5001 7C11.0856 7 9.72904 7.5619 8.72885 8.5621C7.72865 9.56229 7.16675 10.9188 7.16675 12.3333C7.16675 13.7478 7.72865 15.1044 8.72885 16.1046C9.72904 17.1048 11.0856 17.6667 12.5001 17.6667M12.5001 7C11.3961 7 10.5001 9.38667 10.5001 12.3333C10.5001 15.28 11.3961 17.6667 12.5001 17.6667M12.5001 7C13.6041 7 14.5001 9.38667 14.5001 12.3333C14.5001 15.28 13.6041 17.6667 12.5001 17.6667"
          stroke="#252525"
          stroke-width="2"
        />
        <path
          d="M7.8335 21.6667H17.1668"
          stroke="#252525"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      شناسنامه | پاسپورت
    </button>
  </div>
</template>

<script setup>
const fileInput = ref(null)
let emit = defineEmits(['selectedFile'])
let reSelectPass = inject('reSelectPass')

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFile = event => {
  const file = event.target.files[0]
  emit('selectedFile', file)
}

onMounted(() => {
  if (reSelectPass.value) triggerFileInput()
})
</script>
