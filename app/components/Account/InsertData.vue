<template>
  <div class="border-b border-[#F0F0F0] dark:border-secdark px-2 pb-3 lg:px-4">
    <p class="text-center font-bold md:text-lg mt-3 mb-5">
      به صرافی کازان خوش آمدید
    </p>
    <div class="text-xs">
      <label for="email-phone" class="text-xs">شماره موبایل یا ایمیل</label>
      <input
        type="text"
        id="email-phone"
        class="bg-[#EFEFEF] dark:bg-secdark block w-full mt-2 rounded-10 p-3"
        placeholder="شماره موبایل یا ایمیل خود را وارد کنید"
      />
    </div>
    <button
      class="text-primary flex gap-2 items-center text-xs mt-3 cursor-pointer"
      @click="showCode = !showCode"
    >
      کد دعوت اختیاری
      <svg
        width="14"
        height="9"
        viewBox="0 0 14 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="transition-all"
        :class="{ 'rotate-180': showCode }"
      >
        <path
          d="M1 1.5L6.85858 7.4406C6.93668 7.5198 7.06332 7.5198 7.14142 7.4406L13 1.5"
          stroke="#0057FF"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </button>
    <div class="mt-3 text-xs" v-if="showCode">
      <label for="email-phone">کد دعوت</label>
      <input
        type="text"
        id="email-phone"
        class="bg-[#EFEFEF] dark:bg-secdark block w-full my-2 rounded-10 p-3"
        placeholder="کد دعوت را وارد کنید (اختیاری)"
        v-model="codeValue"
      />
      <p
        class="flex items-center gap-2 text-[#686868] dark:text-textdark text-2sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="18px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
          />
        </svg>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
      </p>
    </div>
  </div>
  <div class="px-2 py-3 lg:px-4">
    <Button
      label="ثبت و ادامه"
      pt:root="!text-sm !w-full !text-white"
      @click="nextStepFunc"
    />
  </div>
  <Toast />
</template>
<script setup>
let emit = defineEmits(['toStepTwo'])

let showCode = ref(false)
let codeValue = ref('')

let { showToast } = useToastComp()

function nextStepFunc () {
  if (showCode.value && !codeValue.value) {
    showToast('warn', 'اخطار', 'کد دعوت را وارد نکردید!')
  } else {
    emit('toStepTwo')
  }
}
</script>
