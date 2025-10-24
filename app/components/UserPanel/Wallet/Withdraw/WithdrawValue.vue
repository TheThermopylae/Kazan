<template>
  <div class="mb-5">
    <div class="flex text-sm justify-between items-center mb-2.5">
      <label class="font-bold">{{ props.label }}</label>
      <h4 class="text-primary cursor-pointer" @click="props.value.price = 379">
        حداکثر قابل برداشت
      </h4>
    </div>
    <div class="relative">
      <InputNumber v-model="props.value.price" fluid />
      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-sm"
        >تومان</span
      >
    </div>
    <p class="text-gray-700 text-xs mt-2" v-if="!props.validate">
      کل موجودی شما: 379 تومان
    </p>
    <p class="text-fail text-xs mt-2" v-else>{{ props.validate }}</p>
  </div>
</template>

<script setup>
let props = defineProps(['label', 'value', 'validate'])
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
