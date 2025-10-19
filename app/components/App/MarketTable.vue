<template>
  <section class="bg-white dark:bg-maindark rounded pb-0 overflow-hidden mbt-5">
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
          <AppTableRow v-for="item in 10" :key="item" />
        </tbody>
      </table>
    </div>
  </section>
</template>
