<template>
  <section class="bg-white dark:bg-maindark rounded pb-0 overflow-hidden mt-5">
    <div class="p-5 flex justify-between items-center">
      <h2 class="font-bold">کدهای دعوت شما</h2>
      <div class="flex items-center gap-2">
        <p class="text-success text-sm">19 از 20 ظرفیت باقی مانده</p>
        <button
          class="bg-[#252525] text-white py-2 px-3 rounded-lg flex-center gap-3 text-sm"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16699 10.0003H15.8337M10.0003 4.16699V15.8337"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          گوش به زنگ جدید
        </button>
      </div>
    </div>
    <div class="flex-grow overflow-auto">
      <table class="min-w-[800px] w-full">
        <thead class="p-5">
          <tr class="text-[#5F5F5F] dark:text-gray-200 text-sm !font-medium">
            <th class="text-right p-5 flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.15162 7.33307H11.8496C12.4243 7.33307 12.7296 6.65307 12.3476 6.22307L8.49896 1.89307C8.43653 1.82261 8.35986 1.76619 8.27401 1.72756C8.18816 1.68892 8.0951 1.66895 8.00096 1.66895C7.90682 1.66895 7.81375 1.68892 7.7279 1.72756C7.64205 1.76619 7.56538 1.82261 7.50295 1.89307L3.65295 6.22307C3.27095 6.65307 3.57629 7.33307 4.15162 7.33307ZM7.50229 14.1057C7.56472 14.1762 7.64139 14.2326 7.72723 14.2712C7.81308 14.3099 7.90615 14.3299 8.00029 14.3299C8.09443 14.3299 8.1875 14.3099 8.27334 14.2712C8.35919 14.2326 8.43586 14.1762 8.49829 14.1057L12.347 9.77574C12.7296 9.3464 12.4243 8.6664 11.849 8.6664H4.15162C3.57696 8.6664 3.27162 9.3464 3.65362 9.7764L7.50229 14.1057Z"
                  fill="#9E9E9E"
                />
              </svg>
              کد دعوت
            </th>
            <th class="text-right">سهم شما</th>
            <th class="text-right">سهم دوستان</th>
            <th class="text-right">دعوت شده ها</th>
            <th class="text-right">پاداش دریافتی</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="group relative border-b last:border-none border-[#EFEFEF] dark:border-secdark text-[#5F5F5F] text-sm"
            v-for="item in 5"
          >
            <td class="p-5 pl-0">
              <div class="flex gap-6">
                {{ item }}
                <p>(کد پیش‌فرض) pcsjcon</p>
              </div>
            </td>
            <td class="py-5 dark:text-textdark">٪100</td>
            <td class="py-5 dark:text-textdark">٪0</td>
            <td class="py-5 dark:text-textdark">
              <div class="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8267 3.11111C17.6162 3.11111 19.0669 4.56204 19.0669 6.35185C19.0669 8.14167 17.6162 9.59259 15.8267 9.59259C15.6582 9.59259 15.4927 9.57973 15.3311 9.55493M16.7774 12.3189C17.0753 12.3304 17.3758 12.3472 17.6813 12.3694C19.896 12.5305 21.597 14.3275 21.9143 16.5257L21.976 16.9533C22.1588 18.2202 21.2788 19.4027 20.0062 19.5392C19.8665 19.5542 19.728 19.5685 19.5908 19.5821M13.2952 5.88889C13.2952 8.03666 11.5544 9.77778 9.40694 9.77778C7.25952 9.77778 5.5187 8.03666 5.5187 5.88889C5.5187 3.74112 7.25952 2 9.40694 2C11.5544 2 13.2952 3.74112 13.2952 5.88889ZM4.39807 21.7108C7.98736 22.0937 10.8384 22.0981 14.4223 21.7137C15.9494 21.55 17.0054 20.1309 16.786 18.6106L16.712 18.0975C16.3313 15.4596 14.2901 13.3033 11.6324 13.11C10.1162 12.9997 8.70312 12.9999 7.18402 13.1106C4.52522 13.3043 2.48253 15.4608 2.1017 18.0998L2.02884 18.6047C1.80911 20.1273 2.86859 21.5476 4.39807 21.7108Z"
                    stroke="#282930"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                0
              </div>
            </td>
            <td class="py-5 dark:text-textdark">0تومان</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
