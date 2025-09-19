<template>
  <div class="w-1/3 m-auto">
    <h3 class="mb-3 text-center text-sm">نمودار ترکیب دارایی</h3>
    <div class="relative">
      <canvas ref="myChart"></canvas>
      <span class="absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2">0</span>
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
