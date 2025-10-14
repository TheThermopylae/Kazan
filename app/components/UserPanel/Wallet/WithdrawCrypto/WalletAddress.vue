<template>
  <div class="mb-5">
    <label class="block text-sm mb-2.5">آدرس کیف پول</label>
    <InputNumber v-model="value" fluid />
  </div>
</template>

<script setup>
let value = ref()
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
