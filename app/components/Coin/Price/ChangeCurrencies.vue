<template>
  <section class="bg-white p-4 rounded-10 hidden md:block mt-5 mb-10 text-sm">
    <h3 class="font-bold text-[16px]">
      نرخ تبدیل ارزها در روسیه | مشاهده نرخ خرید و فروش در بانک‌های مختلف
    </h3>
    <div class="grid grid-cols-6 gap-2 mt-5">
      <div class="relative bg-[#FAFAFA] rounded-10 p-2.5">
        <input
          type="text"
          placeholder="بانک"
          class="placeholder:text-sm placeholder:text-black w-6/8"
        />
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-2.5 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <rect width="28" height="28" rx="5" fill="#EFEFEF" />
          <g clip-path="url(#clip0_5984_7499)">
            <path
              d="M20.6666 20.6666L17.8385 17.8386M17.8385 17.8386C18.9522 16.725 19.6409 15.1865 19.6409 13.4872C19.6409 10.0885 16.8858 7.33331 13.4871 7.33331C10.0884 7.33331 7.33325 10.0885 7.33325 13.4872C7.33325 16.8858 10.0884 19.641 13.4871 19.641C15.1864 19.641 16.7249 18.9522 17.8385 17.8386Z"
              stroke="#282930"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_5984_7499">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(6 6)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="relative bg-[#FAFAFA] rounded-10 p-2.5">
        <input
          type="text"
          placeholder="ارز"
          class="placeholder:text-sm placeholder:text-black w-6/8"
        />
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-2.5 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <rect width="28" height="28" rx="5" fill="#EFEFEF" />
          <g clip-path="url(#clip0_5984_7499)">
            <path
              d="M20.6666 20.6666L17.8385 17.8386M17.8385 17.8386C18.9522 16.725 19.6409 15.1865 19.6409 13.4872C19.6409 10.0885 16.8858 7.33331 13.4871 7.33331C10.0884 7.33331 7.33325 10.0885 7.33325 13.4872C7.33325 16.8858 10.0884 19.641 13.4871 19.641C15.1864 19.641 16.7249 18.9522 17.8385 17.8386Z"
              stroke="#282930"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_5984_7499">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(6 6)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="relative bg-[#FAFAFA] rounded-10 p-2.5 text-center">
        قیمت خرید
      </div>
      <div class="relative bg-[#FAFAFA] rounded-10 p-2. 5text-center">
        قیمت فروش
      </div>
      <div class="relative bg-[#FAFAFA] rounded-10 p-2.5 text-center">ارز</div>
      <div class="relative bg-[#FAFAFA] rounded-10 p-2.5 text-center">
        بروزرسانی
      </div>
    </div>
    <div>
      <div
        class="grid grid-cols-6 text-center py-2 border-b border-stroke last:border-none"
        v-for="item in 6"
      >
        <span>Raiffeisen</span>
        <span>یوان</span>
        <span>93.12</span>
        <span>107.09</span>
        <span>روبل</span>
        <span>1 دقیقه پیش</span>
      </div>
    </div>
  </section>
</template>
