<template>
  <tr
    class="group relative border-b last:border-none border-gray-200 dark:border-secdark select-none"
  >
    <td class="py-5">
      <div class="flex items-center gap-4 pr-5">
        <svg
          v-if="!favorite"
          @click="favorite = true"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          class="cursor-pointer"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"
          />
        </svg>
        <svg
          v-else
          @click="favorite = false"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          class="cursor-pointer text-yellow-500"
        >
          <path
            fill="currentColor"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m8.587 8.236l2.598-5.232a.911.911 0 0 1 1.63 0l2.598 5.232l5.808.844a.902.902 0 0 1 .503 1.542l-4.202 4.07l.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75l-4.202-4.07a.902.902 0 0 1 .503-1.54z"
          />
        </svg>
        <div class="flex items-center gap-3">
          <img src="/crypto/RUB.svg" alt="rub" class="size-7" />
          <div>
            <h4 class="text-sm">
              RUB
              <span class="text-secondary dark:text-textdark">/ TMN</span>
            </h4>
            <h5 class="text-2sm">
              RUB
              <span class="text-secondary dark:text-textdark">/ TMN</span>
            </h5>
          </div>
        </div>
      </div>
    </td>
    <td class="py-5">
      <div class="text-sm">
        23.265.542
        <span class="text-xs text-secondary dark:text-textdark"> تومان</span>
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
</template>

<script setup>
let favorite = ref(false)
</script>
