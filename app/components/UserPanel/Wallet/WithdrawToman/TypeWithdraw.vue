<template>
  <div>
    <div class="border-b border-stroke mb-3 pb-3">
      <h3 class="text-sm mb-3">نوع برداشت</h3>
      <div class="grid grid-cols-3 gap-2">
        <button
          class="flex flex-col items-center rounded-10 border border-stroke pt-3 gap-2 text-xs transition"
          @click="type = 0"
          :class="{ 'bg-primary text-white': type == 0 }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M10.103 3.368A2 2 0 0 1 12 2h9a2 2 0 0 1 1.873 2.702L20.886 10H24a2 2 0 0 1 1.54 3.276L12.473 29.047c-1.706 2.058-5.016.365-4.346-2.222L10.415 18H8a2 2 0 0 1-1.897-2.633zM12 4L8 16h3.708a1 1 0 0 1 .968 1.251l-2.613 10.076c-.134.517.528.856.87.444L24 12h-4.557a1 1 0 0 1-.936-1.351L21 4z"
            />
          </svg>
          <h4 class="font-bold">فوری</h4>
          (تا 30 دقیقه)
          <div
            class="text-2sm rounded-t-10 py-[3px] w-[75px] transition"
            :class="{
              'bg-white text-black': type == 0,
              'bg-primary text-white': type != 0
            }"
          >
            500,000 تومان
          </div>
        </button>
        <button
          class="flex flex-col items-center rounded-10 border border-stroke pt-3 gap-2 text-xs transition"
          @click="type = 1"
          :class="{ 'bg-primary text-white': type == 1 }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 36 36"
          >
            <path
              fill="currentColor"
              d="M15 17h3v2h-3z"
              class="clr-i-outline clr-i-outline-path-1"
            />
            <path
              fill="currentColor"
              d="M26.45 14.17A22.1 22.1 0 0 0 19.38 7a9.64 9.64 0 0 0-9-.7a8.6 8.6 0 0 0-4.82 6.4c-.08.47-.14.92-.2 1.36A4 4 0 0 0 2 18v6.13a2 2 0 0 0 2 2V18a2 2 0 0 1 2-2h18.73A7.28 7.28 0 0 1 32 23.27V24h-2a4.53 4.53 0 1 0 .33 2H32a2 2 0 0 0 2-2v-.73a9.28 9.28 0 0 0-7.55-9.1M11 14H6.93c0-.31.09-.63.15-1A6.52 6.52 0 0 1 11 8Zm2 0V7.58a8.17 8.17 0 0 1 5.36 1.16A19 19 0 0 1 23.9 14Zm12.8 14.38a2.5 2.5 0 1 1 2.5-2.5a2.5 2.5 0 0 1-2.5 2.5"
              class="clr-i-outline clr-i-outline-path-2"
            />
            <path
              fill="currentColor"
              d="M14.17 24a4.53 4.53 0 1 0 .33 2h5.3v-.25A6 6 0 0 1 20 24ZM10 28.38a2.5 2.5 0 1 1 2.5-2.5a2.5 2.5 0 0 1-2.5 2.5"
              class="clr-i-outline clr-i-outline-path-3"
            />
            <path fill="none" d="M0 0h36v36H0z" />
          </svg>
          <h4 class="font-bold">متعادل</h4>
          تا 4 ساعت
          <div
            class="text-2sm rounded-t-10 py-[3px] w-[75px] transition"
            :class="{
              'bg-white text-black': type == 1,
              'bg-primary text-white': type != 1
            }"
          >
            200,000 تومان
          </div>
        </button>
        <button
          class="flex flex-col items-center rounded-10 border border-stroke pt-3 gap-2 text-xs transition"
          @click="type = 2"
          :class="{ 'bg-primary text-white': type == 2 }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M9.104 4.002c-1.476 0-2.5.55-3.216 1.378c-.694.802-1.075 1.838-1.357 2.769L4.273 9H2.5a.5.5 0 0 0-.5.5c0 1.076.497 2.102 1.298 2.63l-.442 1.072a1.31 1.31 0 0 0 1.212 1.81h1.463c.507 0 .97-.294 1.186-.753l.47-1c1.314.182 2.644.182 3.958 0l.47 1c.217.46.679.753 1.186.753h1.449a1.31 1.31 0 0 0 1.211-1.81l-.497-1.206h1.703c.674 0 1.333-.521 1.333-1.257V10c0-1.137-.987-1.996-2.12-1.996h-2.075c-.287-.907-.707-1.876-1.409-2.636c-.757-.819-1.817-1.365-3.292-1.365m5.569 6.995l-.576-1.994h1.782c.658 0 1.121.485 1.121.996v.741c0 .09-.112.257-.333.257zm-.572 1.532l.436 1.055a.31.31 0 0 1-.287.429H12.8a.31.31 0 0 1-.28-.179l-.355-.753q.981-.208 1.935-.552m-7.935.553l-.354.752a.31.31 0 0 1-.281.179H4.068a.31.31 0 0 1-.287-.429l.436-1.059q.961.348 1.949.557m-2.533-1.965A2.06 2.06 0 0 1 3.047 10h.923zM5.488 8.44c.276-.912.61-1.772 1.157-2.405c.524-.607 1.27-1.032 2.459-1.032c1.194 0 1.988.428 2.558 1.044c.586.635.959 1.495 1.23 2.39l.907 3.139a13.48 13.48 0 0 1-9.261.003z"
            />
          </svg>
          <h4 class="font-bold">اقتصادی</h4>
          تا 24 ساعت
          <div
            class="text-2sm rounded-t-10 py-[3px] w-[75px] transition"
            :class="{
              'bg-white text-black': type == 2,
              'bg-primary text-white': type != 2
            }"
          >
            50,000 تومان
          </div>
        </button>
      </div>
    </div>
    <div class="text-xs">
      <div class="flex justify-between">
        <h4>کارمزد برداشت:</h4>
        3.5 تتر
      </div>
      <div class="flex justify-between my-4">
        <h4>مقدار دریافتی شما:</h4>
        118.5 تتر
      </div>
      <Button label="درخواست برداشت" pt:root="!w-full !rounded-lg !p-3" />
    </div>
  </div>
</template>

<script setup>
let type = ref(0)
</script>
