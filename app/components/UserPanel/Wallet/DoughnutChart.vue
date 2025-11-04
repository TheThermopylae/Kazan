<template>
  <div class="w-2/3 xl:w-1/4 m-auto md:!block">
    <h3 class="mb-3 text-center text-sm">نمودار ترکیب دارایی</h3>
    <div class="relative">
      <canvas ref="myChart"></canvas>
      <span
        class="absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2"
        >0</span
      >
    </div>
    <div class="flex flex-col items-center mt-6 gap-1.5">
      <div class="flex gap-1.5">
        <div
          class="bg-[#D6F5FF] rounded-full p-0.5 pl-1 flex items-center gap-2 text-[#00000691] text-sm"
        >
          <div class="size-4 rounded-full bg-primary"></div>
          TMN
        </div>
        <div
          class="bg-[#FFDED6] rounded-full p-0.5 pl-1 flex items-center gap-2 text-[#FA4D33] text-sm"
        >
          <div class="size-4 rounded-full bg-[#FA4D33]"></div>
          CNY
        </div>
      </div>
      <div class="flex gap-1.5">
        <div
          class="bg-[#D6E5FF] rounded-full p-0.5 pl-1 flex items-center gap-2 text-[#0084F1] text-sm"
        >
          <div class="size-4 rounded-full bg-[#0084F1]"></div>
          EUR
        </div>
        <div
          class="bg-[#EAD6FF] rounded-full p-0.5 pl-1 flex items-center gap-2 text-[#A800F1] text-sm"
        >
          <div class="size-4 rounded-full bg-[#A800F1]"></div>
          GBP
        </div>
        <div
          class="bg-[#D6F5FF] rounded-full p-0.5 pl-1 flex items-center gap-2 text-[#00F1E5] text-sm"
        >
          <div class="size-4 rounded-full bg-[#00F1E5]"></div>
          GBP
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Chart from 'chart.js/auto'

let myChart = ref(null)

onMounted(() => {
  new Chart(myChart.value, {
    type: 'doughnut',
    data: {
      labels: ['پرونده ها', 'مشاوره', 'تعاملات فعال'],
      datasets: [
        {
          data: [1], // همیشه ثابت
          backgroundColor: ['#D9D9D9'],
          borderWidth: 0
        }
      ]
    },
    options: {
      animation: {
        duration: 0
      },
      cutout: '87%', // ضخامت داخلی (هرچی درصد بیشتر → دایره باریک‌تر میشه)
      plugins: {
        tooltip: {
          enabled: false,
          usePointStyle: false, // غیرفعال کردن نمایش رنگ در تولتیپ
          displayColors: false,
          backgroundColor: '#D9D9D9', // رنگ پس‌زمینه تولتیپ
          titleColor: '#000', // رنگ عنوان
          bodyColor: '#000', // رنگ متن اصلی
          borderWidth: 2, // ضخامت حاشیه
          padding: 10, // فاصله داخلی
          titleAlign: 'center',
          bodyAlign: 'center',
          bodyFont: {
            size: 14, // سایز فونت متن
            family: 'YekanBakhFaNum-Regular'
          },
          titleFont: {
            size: 16,
            family: 'YekanBakhFaNum-Regular'
          }
        },
        legend: {
          display: false // لیجن (و لیبل‌های آن) حذف می‌شود
        }
      }
    }
  })
})
</script>

<!-- <style scoped>
div {
    background: #2f32ff95;
}
</style> -->
