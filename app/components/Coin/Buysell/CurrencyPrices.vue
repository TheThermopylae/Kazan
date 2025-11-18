<template>
  <section class="bg-white rounded-10 p-3 mb-5 text-sm">
    <div class="flex justify-between items-center">
      <h3 class="font-bold text-[16px]">روبل روسیه در یک نگاه</h3>
      <div class="flex items-center gap-2 text-sm text-[#0000069E]">
        15:25:52
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4890_11465)">
            <path
              d="M8.00004 3.92584V7.96924C8.00004 7.98888 7.99224 8.00772 7.97835 8.02161L5.77782 10.2221M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00004 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992Z"
              stroke="#000006"
              stroke-opacity="0.62"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_4890_11465">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div class="flex justify-between bg-[#FAFAFA] mt-4 p-3">
      <h4>خصیصه</h4>
      <h4>مقادیر</h4>
    </div>
    <ul>
      <li class="flex justify-between border-b border-stroke p-3 last:border-none last:pb-0" v-for="item in 6">
        نرخ فعلی
        <span>13.127</span>
      </li>
    </ul>
  </section>
</template>
