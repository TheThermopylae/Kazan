<template>
  <section class="bg-white dark:bg-maindark rounded pb-0 overflow-hidden mt-5 hidden lg:block">
    <div class="p-5 flex justify-between items-center">
      <h2 class="font-bold text-xl">دارایی های شما</h2>
      <button
        class="primary py-2 px-3 rounded-lg flex-center gap-3 text-sm"
        @click="visible = true"
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
    <div class="flex-grow overflow-auto">
      <table class="min-w-[800px] w-full">
        <thead class="p-5">
          <tr class="text-[#5F5F5F] dark:text-gray-200 text-sm !font-medium">
            <th class="text-right p-5">نام بازار</th>
            <th class="text-right">قیمت مورد نظر شما</th>
            <th class="text-right">تاریخ ساخت</th>
            <th class="text-right">با خبر شدگی</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="group relative border-b last:border-none border-[#EFEFEF] dark:border-secdark text-[#5F5F5F]"
            v-for="item in alerts"
          >
            <td class="py-5">
              <div class="flex items-center gap-3 pr-5">
                <NuxtImg src="/crypto/BTC.svg" alt="toman" class="size-7" />

                <h4 class="text-sm mt-1 text-black dark:text-white">
                  BTC
                  <span class="text-secondary dark:text-textdark">/ TMN</span>
                </h4>
              </div>
            </td>
            <td class="py-5 dark:text-textdark text-sm">
              {{ item.price.toLocaleString() }}
              <span class="text-[#c9c9c9]">TMN</span>
            </td>
            <td class="py-5 dark:text-textdark text-sm ltr-dir text-right">
              1404/06/26 13:42:23
            </td>
            <td
              class="py-5 dark:text-textdark text-sm"
              v-if="item.alertTimes == 0"
            >
              فقط یکبار اطلاع بده
            </td>
            <td class="py-5 dark:text-textdark text-sm" v-else>
              همیشه اطلاع بده
            </td>
            <td class="py-5 dark:text-textdark text-sm">
              <div class="flex items-center gap-3">
                <input
                  type="checkbox"
                  class="toggle text-white border-none bg-hover checked:bg-primary"
                />
                <div class="dropdown dropdown-end">
                  <div tabindex="0" role="button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="cursor-pointer"
                    >
                      <path
                        d="M5.5 12H5.51M12 12H12.01M18.49 12H18.5"
                        stroke="#282930"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <ul
                    tabindex="0"
                    class="dropdown-content bg-base-100 rounded-box z-1 w-[160px] p-1 shadow-sm"
                  >
                    <li class="mb-2">
                      <a
                        class="cursor-pointer hover:bg-stroke block p-2 rounded-md transition"
                        >ویرایش
                      </a>
                    </li>
                    <li>
                      <a
                        class="cursor-pointer text-red-500 hover:bg-stroke block p-2 rounded-md transition"
                        >حذف
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
const visible = inject('visible')
const alerts = inject('alerts')
</script>
