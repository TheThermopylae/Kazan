<template>
  <section
    class="bg-white dark:bg-maindark rounded-10 pb-0 overflow-hidden mt-5 p-5 hidden lg:block"
  >
    <div class="flex justify-between items-center mb-10">
      <h3>{{ props.title }}</h3>
      <NuxtLink to="/" class="text-primary flex items-center gap-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5C4.36704 5 2.07304 11.617 2.05204 11.684L1.94604 12L2.05105 12.316C2.07305 12.383 4.36704 19 12 19C19.633 19 21.927 12.383 21.948 12.316L22.054 12L21.949 11.684C21.927 11.617 19.633 5 12 5ZM12 16C9.79404 16 8.00004 14.206 8.00004 12C8.00004 9.794 9.79404 8 12 8C14.206 8 16 9.794 16 12C16 14.206 14.206 16 12 16Z"
            fill="#0057FF"
          />
          <path
            d="M12 10C10.916 10 10 10.916 10 12C10 13.084 10.916 14 12 14C13.084 14 14 13.084 14 12C14 10.916 13.084 10 12 10Z"
            fill="#0057FF"
          />
        </svg>
        نمایش همه
      </NuxtLink>
    </div>
    <div class="flex-grow overflow-auto">
      <table class="min-w-[800px] w-full">
        <thead class="p5">
          <tr class="text-[#A5A5A5] text-sm">
            <th class="text-right">زمان</th>
            <th class="text-right">مقدار</th>
            <th class="text-center">کارمزد</th>
            <th class="tex-right">مقدار واریز شده</th>
            <th class="text-riht">شماره کارت</th>
            <th class="text-rigt">کد رهگیری</th>
            <th class="text-rght">وضعیت</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="group relative border-b last:border-none border-gray-200 dark:border-secdark text-sm"
            v-for="item in 3"
          >
            <td class="py-5">18:25:26 1404/05/29</td>
            <td class="py-5">5.813.135</td>
            <td class="py-5 text-center">12</td>
            <td class="py-5 text-sm text-center">125.123.158.254</td>
            <td class="py-5 text-center">6219861918387019</td>
            <td class="py-5 text-center">d7b84b4</td>
            <td class="py-5">
              <h5
                class="bg-[#E5F8F3] text-success w-fit py-1 px-1.5 rounded m-auto"
              >
                موفق
              </h5>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
let props = defineProps(['title'])
</script>
