<template>
  <section class="mt-20">
    <div class="grid grid-cols-3">
      <section class="md:col-span-2">
        <div class="flex justify-between items-center mb-5">
          <div>
            <h3 class="font-bold">دیدگاه ها</h3>
            <p class="text-secondary mt-1.5 text-sm">
              دیدگاه خود را درباره بیت کوین به اشتراک بگذارید
            </p>
          </div>
          <Select
            v-model="sorted"
            :options="sorts"
            :pt="{
              option: ({ context }) => ({
                class: context.selected
                  ? '!bg-primary !text-white !roundd-xl'
                  : ''
              }),
              root: '!border-stroke !rounded-10 !py-1 !shadow-none ',
              label: '!text-xs',
              dropdownIcon: '!text-black !text-4xl',
              overlay: '!bg[#F8F8F8] !text-xs !rounded-10 !brder-none'
            }"
          >
            <template #dropdownicon>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.91663L9.88215 12.8671C9.94724 12.9331 10.0528 12.9331 10.1179 12.8671L15 7.91663"
                  stroke="#252525"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </template>
          </Select>
        </div>
        <div class="bg-white p-4 rounded-10">
          <div class="flex items-center gap-2 border-b border-stroke mb-3 pb-3">
            <div
              class="size-12 rounded-full flex-center text-primary bg-[#EEF4FF] font-bold shrink-0"
            >
              ا
            </div>
            <div class="text-xs w-full">
              <label for="my-comment">نظر خود را بنویسید</label>
              <div class="flex items-center mt-2 gap-2">
                <input
                  type="text"
                  id="my-comment"
                  class="block bg-stroke p-2 rounded-10 w-full"
                  placeholder="نظر خود را بنویسید"
                  v-model="textValue"
                />
                <Button
                  pt:root="!text-xs !p-2 !rounded-10 !shrink-0"
                  label="افزودن نظر"
                  @click="addComment"
                />
              </div>
            </div>
          </div>
          <PriceCommentCard
            v-for="item in comments"
            :key="item.name"
            :data="item"
          />
        </div>
      </section>
    </div>
    <Toast />
  </section>
</template>

<script setup>
let { showToast } = useToastComp()

let sorted = ref('جدید ترین')

let sorts = ref(['جدید ترین', 'قدیمی ترین'])

let textValue = ref('')

let comments = ref([
  { name: 'احسان محبی', text: 'رو تایم پلی دو ساعته' },
  { name: 'حمید مجیدی', text: 'بهترین زمان برای خرید' },
  { name: 'داریوش اکبری', text: 'بهتر از این نمیشه!' }
])

function addComment () {
  if (!textValue.value)
    showToast('warn', 'اخطار', 'اول متن نظر خود را وارد کنید')
  else {
    comments.value.unshift({ name: 'امیر برزگر', text: textValue.value })
    showToast('نظر شما با موفقیت اضافه شد')
    textValue.value = ''
  }
}
</script>
