<template>
  <section class="bg-white rounded p-5 pb-0 overflow-hidden">
    <div class="flex-grow overflow-auto">
      <table class="min-w-[800px] w-full">
        <thead>
          <tr class="text-[#A5A5A5] text-sm">
            <th class="text-right">بازار</th>
            <th class="text-right">آخرین قیمت</th>
            <th class="text-right">تغییرات (24h)</th>
            <th class="text-right">حجم معاملات (24h)</th>
            <th>تغییرات هفتگی</th>
          </tr>
        </thead>
        <tbody>
          <tr class="group relative" v-for="item in 10">
            <td class="py-5">
              <div class="flex items-center gap-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.57055 2.3382C9.75665 1.99859 10.2435 1.99859 10.4296 2.3382L12.666 6.41915C12.8074 6.67727 13.0569 6.85816 13.3458 6.912L17.9325 7.76682C18.3149 7.83808 18.466 8.30597 18.1978 8.58829L14.9977 11.9569C14.7937 12.1717 14.6974 12.4673 14.7358 12.7614L15.3355 17.3612C15.3857 17.7463 14.9911 18.0347 14.6406 17.8691L10.418 15.8742C10.1533 15.7492 9.84682 15.7492 9.58218 15.8742L5.35954 17.8691C5.00902 18.0347 4.61446 17.7463 4.66467 17.3612L5.26441 12.7614C5.30275 12.4673 5.20647 12.1717 5.00242 11.9569L1.80233 8.58829C1.53413 8.30597 1.68525 7.83808 2.06765 7.76682L6.65433 6.912C6.94322 6.85816 7.19276 6.67727 7.33421 6.41915L9.57055 2.3382Z"
                    stroke="#282930"
                    stroke-width="1.5"
                  />
                </svg>
                <div class="flex items-center gap-3">
                  <img src="/crypto/RUB.svg" alt="rub" class="size-7" />
                  <div>
                    <h4 class="text-sm">
                      RUB <span class="text-secondary">/ TMN</span>
                    </h4>
                    <h5 class="text-2sm">
                      RUB <span class="text-secondary">/ TMN</span>
                    </h5>
                  </div>
                </div>
              </div>
            </td>
            <td class="py-5">
              <div class="text-sm">
                23.265.542
                <span class="text-xs text-secondary"> تومان</span>
              </div>
            </td>
            <td class="py-5 text-[#F65555] text-sm">-0.07%</td>
            <td class="py-5 text-sm">125.123.158.254</td>
            <td class="py-5">
              <div class="flex flex-col items-center">
                <Button
                  label="معامله"
                  pt:root="!bg-[#33323B] !border-none !rounded-lg !hidden group-hover:!block !absolute top-1/2 -translate-y-1/2"
                />
                <span class="text-[#039874] group-hover:hidden">+6.6%</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
