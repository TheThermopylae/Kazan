<template>
  <section
    class="bg-white dark:bg-maindark rounded pb-0 overflow-hidden mb-5"
  >
    <div class="flex-grow overflow-auto">
      <table class="min-w-[800px] w-full">
        <thead class="p-5">
          <tr class="text-[#A5A5A5] text-sm">
            <th class="text-right p-5">بازار</th>
            <th class="text-right">آخرین قیمت</th>
            <th class="text-right">تغییرات (24h)</th>
            <th class="text-right">حجم معاملات (24h)</th>
            <th>تغییرات هفتگی</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="group relative border-b last:border-none border-gray-200 dark:border-secdark"
            v-for="item in 10"
          >
            <td class="py-5">
              <div class="flex items-center gap-4 pr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  class="cursor-pointer"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M10.704 4.325a1.5 1.5 0 0 1 2.592 0l1.818 3.12a1.5 1.5 0 0 0 .978.712l3.53.764a1.5 1.5 0 0 1 .8 2.465l-2.405 2.693a1.5 1.5 0 0 0-.374 1.15l.363 3.593a1.5 1.5 0 0 1-2.097 1.524l-3.304-1.456a1.5 1.5 0 0 0-1.21 0l-3.304 1.456a1.5 1.5 0 0 1-2.097-1.524l.363-3.593a1.5 1.5 0 0 0-.373-1.15l-2.406-2.693a1.5 1.5 0 0 1 .8-2.465l3.53-.764a1.5 1.5 0 0 0 .979-.711z"
                  />
                </svg>
                <div class="flex items-center gap-3">
                  <img src="/crypto/RUB.svg" alt="rub" class="size-7" />
                  <div>
                    <h4 class="text-sm">
                      RUB
                      <span class="text-secondary dark:text-textdark"
                        >/ TMN</span
                      >
                    </h4>
                    <h5 class="text-2sm">
                      RUB
                      <span class="text-secondary dark:text-textdark"
                        >/ TMN</span
                      >
                    </h5>
                  </div>
                </div>
              </div>
            </td>
            <td class="py-5">
              <div class="text-sm">
                23.265.542
                <span class="text-xs text-secondary dark:text-textdark">
                  تومان</span
                >
              </div>
            </td>
            <td class="py-5 text-[#F65555] text-sm">-0.07%</td>
            <td class="py-5 text-sm">125.123.158.254</td>
            <td class="py-5">
              <div class="flex flex-col items-center">
                <Button
                  label="معامله"
                  pt:root="!bg-[#33323B] !text-white !border-none !rounded-lg !hidden group-hover:!block !absolute top-1/2 -translate-y-1/2"
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
