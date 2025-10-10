<template>
  <table class="min-w-[800px] w-full">
    <thead class="p-5 border-b border-stroke dark:border-darkstroke">
      <tr class="text-[#A5A5A5] text-sm">
        <th class="text-right p-5">زمان</th>
        <th class="text-right">دستگاه</th>
        <th class="text-right">نوع عملیات</th>
        <th class="text-left">IP</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="group relative border-b last:border-none border-stroke dark:border-darkstroke text-sm text-[#5F5F5F] dark:text-textdark"
        v-for="item in 3"
      >
        <td class="py-5 ltr-dir text-right">1404/06/26 13:42:23</td>
        <td class="py-5 text-left">
          <p class="ml-5">
            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,
            like Gecko) Chrome/137.0.0.0 Safari/537.36 OPR/121.0.0.0
          </p>
        </td>
        <td class="py-5">تغییر رمز عبور</td>
        <td class="py-5 text-left">185.209.191.239</td>
      </tr>
    </tbody>
  </table>
</template>
