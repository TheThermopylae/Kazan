<template>
  <section class="bg-white dark:bg-maindark rounded pb-0 overflow-hidden mt-5">
    <div class="p-5">
      <h2 class="font-bold">دارایی های شما</h2>
      <button
        class="border border-[#EAEAEA] text-sm rounded-full p-2.5 mt-4 cursor-pointer hover:bg-[#EAEAEA] transition"
      >
        عدم نمایش دارایی خرد
      </button>
    </div>
    <div class="flex-grow overflow-auto">
      <table class="min-w-[800px] w-full">
        <thead class="p-5">
          <tr class="text-[#5F5F5F] dark:text-gray-200 text-sm !font-medium">
            <th class="text-right p-5">نام کوین</th>
            <th class="text-right">موجودی کل</th>
            <th class="text-right">فریز شده</th>
            <th class="text-right">در دسترس</th>
            <th class="text-right">ارزش تخمینی</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="group relative border-b last:border-none border-[#EFEFEF] dark:border-secdark text-[#5F5F5F]"
            v-for="item in 10"
          >
            <td class="py-5">
              <div class="flex items-center gap-3 pr-5">
                <NuxtImg
                  src="/userpanel/wallet/toman.png"
                  alt="toman"
                  class="size-7"
                />
                <div>
                  <h4 class="text-sm mt-1 text-black dark:text-white">
                    تومان
                    <span class="text-secondary dark:text-textdark">(TMN)</span>
                  </h4>
                  <h5 class="text-secondary dark:text-textdark text-2sm mt-1">
                    9999
                  </h5>
                </div>
              </div>
            </td>
            <td class="py-5 dark:text-textdark text-sm">100.00%</td>
            <td class="py-5 dark:text-textdark text-sm">100.00%</td>
            <td class="py-5 dark:text-textdark text-sm">9.999</td>
            <td class="py-5 dark:text-textdark text-sm">9.999</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
