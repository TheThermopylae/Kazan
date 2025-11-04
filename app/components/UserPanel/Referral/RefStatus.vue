<template>
  <section
    class="flex-grow text-xs text-[#33323B] flex flex-col justify-between gap-2"
  >
    <div class="bg-stroke p-3 rounded-10">
      <h4 class="mb-3">مجموع پاداش</h4>
      0 تومان
    </div>
    <div class="bg-stroke p-3 rounded-10">
      <div class="border-b border-[#C9C9C966] pb-2 mb-2">
        <h4 class="mb-3 flex justify-between items-center">
          دعوت شده های احراز هویت شده
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99967 5.66634V8.99967M8.00635 10.6663H7.99968M14.6663 7.99967C14.6663 11.6816 11.6816 14.6663 7.99967 14.6663C4.31778 14.6663 1.33301 11.6816 1.33301 7.99967C1.33301 4.31778 4.31778 1.33301 7.99967 1.33301C11.6816 1.33301 14.6663 4.31778 14.6663 7.99967Z"
              stroke="#9E9E9E"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </h4>
        0 نفر
      </div>
      <div>
        <h4 class="mb-3 flex justify-between items-center">
          سطح دریافت پاداش
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99967 5.66634V8.99967M8.00635 10.6663H7.99968M14.6663 7.99967C14.6663 11.6816 11.6816 14.6663 7.99967 14.6663C4.31778 14.6663 1.33301 11.6816 1.33301 7.99967C1.33301 4.31778 4.31778 1.33301 7.99967 1.33301C11.6816 1.33301 14.6663 4.31778 14.6663 7.99967Z"
              stroke="#9E9E9E"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </h4>
      </div>
      <div class="grid grid-cols-4 gap-0.5 mt-10">
        <div class="flex relative">
          <div
            class="size-2.5 rounded-full bg-primary absolute top-1/2 -translate-y-1/2 flex-center tooltip tooltip-primary tooltip-open tooltip-top"
          >
            <p class="tooltip-content text-xs">%30 سطح 2</p>
            <div class="size-1 rounded-full bg-white"></div>
          </div>
          <div class="bg-primary h-1 rounded-full w-full"></div>
        </div>
        <div class="bg-primary h-1 rounded-full"></div>
        <div class="bg-primary h-1 rounded-full"></div>
        <div class="bg-primary h-1 rounded-full"></div>
      </div>
      <div class="mt-2 mb-4 bg-white py-1.5 px-2 rounded text-xs w-fit">
        %30 سطح 2
      </div>
      <p>
        با دعوت و ثبت نام دوستانتان از ۲۵٪ تا ۴۵٪ کارمزد تراکنش‌هایشان را پاداش
        بگیرید.
      </p>
    </div>
  </section>
</template>
