<template>
  <div class="px-3 lg:px-4">
    <div class="text-xs mb-4">
      <label class="text-xs">کارت بانکی متعلق به چه کسی است</label>
      <Select
        :pt="{
          option: ({ context }) => ({
            class: context.selected ? '!bg-transparent !text-primary' : ''
          }),
          root: '!rounded-10 !border-none !bg-[#EFEFEF] !items-center !shadow-none dark:!bg-darkbg !h-10 !mt-2',
          label: '!py-3 !text-sm'
        }"
        v-model="cardForm.card_identity_type"
        :options="owners"
        optionLabel="fa"
        placeholder="انتخاب کنید."
        class="w-full"
      >
      </Select>
    </div>
    <div class="text-xs">
      <label for="full-name" class="text-xs mb-2 block"
        >نام و نام خانوادگی صاحب کارت</label
      >
      <input
        type="text"
        id="full-name"
        class="bg-[#EFEFEF] dark:bg-secdark block w-full rounded-10 p-3"
        placeholder="علیرضا ......"
        v-model="cardForm.card_name"
      />
      <p
        class="text-2sm text-red-500 mt-2"
        v-if="cardForm.card_name.length > 0 && !isPersianName"
      >
        نام و نام خانوادگی باید تمامی فارسی باشد!
      </p>
    </div>
    <div>
      <div
        class="grid grid-cols-2 gap-3 mt-3"
        v-if="cardForm.card_identity_type?.en == 'family'"
      >
        <div>
          <DataUploadCard @selectedFile="selectedCard" v-if="!showCard" />
          <div v-else class="relative text-sm text-black">
            <NuxtImg
              :src="showCard"
              class="h-[130px] rounded w-full contrast-25"
            />
            <div
              class="flex gap-6 items-center absolute top-1/2 -translate-y-1/2 justify-center w-full"
            >
              <div
                class="flex flex-col items-center cursor-pointer"
                @click="removeCard"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 5.5L18.88 15.525C18.722 18.086 18.643 19.367 18 20.288C17.6826 20.7432 17.2739 21.1273 16.8 21.416C15.843 22 14.56 22 11.994 22C9.424 22 8.139 22 7.18 21.415C6.70589 21.1257 6.29721 20.7409 5.98 20.285C5.338 19.363 5.26 18.08 5.106 15.515L4.5 5.5M3 5.5H21M16.056 5.5L15.373 4.092C14.92 3.156 14.693 2.689 14.302 2.397C14.2151 2.33232 14.1232 2.27479 14.027 2.225C13.594 2 13.074 2 12.035 2C10.969 2 10.436 2 9.995 2.234C9.89752 2.28621 9.80453 2.34642 9.717 2.414C9.322 2.717 9.101 3.202 8.659 4.171L8.053 5.5M9.5 16.5V10.5M14.5 16.5V10.5"
                    stroke="#252525"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                حذف
              </div>
              <div
                class="flex flex-col items-center cursor-pointer"
                @click="reSelectCardFunc"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9768 19.4999C18.734 18.3363 20.0271 16.5929 20.6307 14.5737C21.2343 12.5544 21.1101 10.3874 20.2798 8.45034C19.4495 6.51327 17.9657 4.92902 16.0871 3.97374C14.2085 3.01847 12.0543 2.75276 9.99985 3.22293M16.9768 19.4999V15.9999M16.9768 19.4999H20.4998M6.99985 4.51593C5.24875 5.68384 3.96239 7.42855 3.36445 9.44667C2.76651 11.4648 2.89482 13.6286 3.72707 15.562C4.55932 17.4953 6.04285 19.0757 7.9197 20.0285C9.79655 20.9813 11.948 21.2461 13.9998 20.7769M6.99985 4.51593V7.99993M6.99985 4.51593H3.49985"
                    stroke="#252525"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                انتخاب دوباره
              </div>
            </div>
          </div>
        </div>
        <div>
          <DataUploadPass @selectedFile="selectedPass" v-if="!showPass" />
          <div v-else class="relative text-sm text-black">
            <NuxtImg
              :src="showPass"
              class="h-[130px] rounded w-full contrast-25"
            />
            <div
              class="flex gap-6 items-center absolute top-1/2 -translate-y-1/2 justify-center w-full"
            >
              <div
                class="flex flex-col items-center cursor-pointer"
                @click="removePass"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 5.5L18.88 15.525C18.722 18.086 18.643 19.367 18 20.288C17.6826 20.7432 17.2739 21.1273 16.8 21.416C15.843 22 14.56 22 11.994 22C9.424 22 8.139 22 7.18 21.415C6.70589 21.1257 6.29721 20.7409 5.98 20.285C5.338 19.363 5.26 18.08 5.106 15.515L4.5 5.5M3 5.5H21M16.056 5.5L15.373 4.092C14.92 3.156 14.693 2.689 14.302 2.397C14.2151 2.33232 14.1232 2.27479 14.027 2.225C13.594 2 13.074 2 12.035 2C10.969 2 10.436 2 9.995 2.234C9.89752 2.28621 9.80453 2.34642 9.717 2.414C9.322 2.717 9.101 3.202 8.659 4.171L8.053 5.5M9.5 16.5V10.5M14.5 16.5V10.5"
                    stroke="#252525"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                حذف
              </div>
              <div
                class="flex flex-col items-center cursor-pointer"
                @click="reSelectFunc"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9768 19.4999C18.734 18.3363 20.0271 16.5929 20.6307 14.5737C21.2343 12.5544 21.1101 10.3874 20.2798 8.45034C19.4495 6.51327 17.9657 4.92902 16.0871 3.97374C14.2085 3.01847 12.0543 2.75276 9.99985 3.22293M16.9768 19.4999V15.9999M16.9768 19.4999H20.4998M6.99985 4.51593C5.24875 5.68384 3.96239 7.42855 3.36445 9.44667C2.76651 11.4648 2.89482 13.6286 3.72707 15.562C4.55932 17.4953 6.04285 19.0757 7.9197 20.0285C9.79655 20.9813 11.948 21.2461 13.9998 20.7769M6.99985 4.51593V7.99993M6.99985 4.51593H3.49985"
                    stroke="#252525"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                انتخاب دوباره
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-xs mb-3 mt-3">
        <label for="full-name" class="text-xs mb-2 block"
          >شماره تماس متصل به کارت</label
        >
        <input
          type="text"
          id="full-name"
          class="bg-[#EFEFEF] dark:bg-secdark block w-full rounded-10 p-3"
          placeholder="+7"
          v-model="cardForm.phone"
          style="direction: ltr"
        />
      </div>
      <section
        class="bg-[#F2F8FF] dark:bg-secdark rounded-10 p-3 text-xs"
        v-if="cardForm.card_identity_type?.en == 'family'"
      >
        <div class="flex gap-3 items-center text-primary font-bold">
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
          تصاویر واضح و باکیفیت از اصل مدارک باشند؛ حجم فایل تا ۱۵ مگابایت مجاز
          است.
        </div>
      </section>
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
  </div>
</template>
<script setup>
import { isPersian } from '@persian-tools/persian-tools'

let emit = defineEmits(['toStepComplete', 'warn'])

let { cardForm } = cardFormComp()

const owners = ref([
  { fa: 'خودم', en: 'me' },
  { fa: 'خانواده درجه یک', en: 'family' }
])

let loading = ref(false)

let showCard = ref(null)
let showPass = ref(null)

let reSelectCard = ref(false)
let reSelectPass = ref(false)

let isPersianName = ref('')

function selectedCard (item) {
  if (!item) return
  if (item instanceof File) {
    const reader = new FileReader()
    reader.onload = e => {
      showCard.value = e.target.result
    }
    reader.readAsDataURL(item)
  } else if (typeof item === 'string') {
    showCard.value = item
  }
}

function removeCard () {
  showCard.value = null
  reSelectCard.value = false
}

function reSelectCardFunc () {
  showCard.value = null
  reSelectCard.value = true
}

function selectedPass (item) {
  if (!item) return
  if (item instanceof File) {
    const reader = new FileReader()
    reader.onload = e => {
      showPass.value = e.target.result
    }
    reader.readAsDataURL(item)
  } else if (typeof item === 'string') {
    showPass.value = item
  }
}

function removePass () {
  showPass.value = null
  reSelectPass.value = false
}

function reSelectFunc () {
  showPass.value = null
  reSelectPass.value = true
}

async function submit () {
  if (
    !cardForm.value.card_identity_type ||
    !cardForm.value.phone ||
    (cardForm.value.card_identity_type == 'family' &&
      !cardForm.value.identity_image) ||
    !cardForm.value.card_name
  )
    emit('warn')
  else {
    try {
      loading.value = true
      let formData = new FormData()
      formData.append('card_number', cardForm.value.card_number)
      formData.append('bank_logo_image', cardForm.value.bank_logo_image)
      formData.append('identity_image', cardForm.value.identity_image)
      formData.append('national_code', cardForm.value.national_code)
      formData.append('bank_name', cardForm.value.bank_name)
      formData.append('card_name', cardForm.value.card_name)
      formData.append('sheba_account_n', cardForm.value.sheba_account_n)
      formData.append('phone', cardForm.value.phone)
      formData.append('card_type', cardForm.value.card_type)
      formData.append(
        'card_identity_type',
        cardForm.value.card_identity_type.en
      )

      let data = await $fetch('/api/user/myAccount/cardBanks/create', {
        credentials: 'include',
        method: 'POST',
        body: formData
      })

      emit('toStepComplete')
    } catch (err) {
      emit('warn')
    } finally {
      loading.value = false
    }
  }
}

watch(
  () => cardForm.value.card_name,
  newVal => {
    // اینجا دیگه مطمئنیم که newVal همون تکست جدید هست
    if (newVal) {
      isPersianName.value = isPersian(newVal)
    }
  }
)

provide('reSelectCard', reSelectCard)
provide('reSelectPass', reSelectPass)
</script>
