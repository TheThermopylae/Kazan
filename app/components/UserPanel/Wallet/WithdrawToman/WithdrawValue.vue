<template>
  <div class="mb-5">
    <div class="flex text-sm justify-between items-center mb-2.5">
      <label class="font-bold">مقدار برداشت به تومان</label>
      <h4 class="text-primary">موجودی در دسترس: 2.3</h4>
    </div>
    <div class="relative">
      <InputNumber v-model="value" fluid />
      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-sm"
        >تومان</span
      >
    </div>
    <div
      class="flex justify-between items-center mt-1.5 text-xs text-[#252525]"
    >
      <div class="flex gap-1">
        <button
          class="border border-stroke rounded-full py-1.5 px-3 transition"
          :class="{ primary: value == item }"
          v-for="item in btnValues"
          :key="item"
          @click="value = item"
        >
          {{ item.toLocaleString() }}%
        </button>
      </div>
      <p class="text-fail">حداقل میزان برداشت 100تتر</p>
    </div>
  </div>
</template>

<script setup>
let value = ref(10000000)

let btnValues = ref([25, 50, 75, 100])
</script>

<style scoped>
:deep(.p-inputnumber-input) {
  border: 1px solid #efefef !important;
  font-size: 14px !important;
  color: #000 !important;
  padding: 12px;
  border-radius: 10px !important;
  box-shadow: none !important;
  background-color: white !important;
  height: 50px !important;
}

:deep(.p-inputnumber-input:focus) {
  border: 1px solid #efefef;
}

:deep(.p-inputnumber-input:hover) {
  border: 1px solid #efefef;
}
</style>
