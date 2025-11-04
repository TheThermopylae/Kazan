<template>
  <section class="">
    <div class="mb-3">
      <h2 class="font-bold text-sm mb-3">در 3 قدم</h2>
      <p class="text-2sm">تبادلات ارزی بین‌المللی را شروع کنید!</p>
    </div>
    <div class="relative">
      <svg
        width="35"
        height="45"
        viewBox="0 0 35 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute left-3 top-0 -translate-y-1/2"
      >
        <rect
          width="35"
          height="45"
          rx="17.5"
          fill="url(#paint0_linear_3289_8483)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3289_8483"
            x1="17.5"
            y1="0"
            x2="17.5"
            y2="45"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF7300" />
            <stop offset="1" stop-color="#F700FF" />
          </linearGradient>
        </defs>
      </svg>
      <div class="blur-section p-3">
        <div class="flex justify-between items-center">
          <div class="flex gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="7.5"
                fill="white"
                stroke="#0057FF"
                stroke-width="5"
              />
            </svg>
            <div>
              <h3 class="text-primary text-sm font-bold">
                تکمیل احراز هویت پایه
              </h3>
              <p class="text-[#00000666] text-2sm mt-1">
                نتیجه احراز هویت شما در کمتر از 10 دقیقه مشخص می شود
              </p>
            </div>
          </div>
          <Button pt:root="!rounded-full !px-4" label="تکمیل" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blur-section {
  backdrop-filter: blur(25px);
  background-color: #e6e6e60d;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
}
</style>
