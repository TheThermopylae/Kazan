<template>
  <li
    class="px-3 py-4 bg-white border-b border-stroke flex justify-between items-center"
    @click="visible = true"
  >
    <div class="flex items-center gap-2.5">
      <img src="/crypto/RUB.svg" alt="btc" class="size-6" />
      <div class="text-[#0000069E] text-xs">
        <h4 class="text-sm text-black">
          BTC <span class="text-textdark">/ TMN</span>
        </h4>
        {{ props.alert.price }} تومان
      </div>
    </div>
    <div class="text-[#0000069E] text-xs flex items-center gap-3">
      <p v-if="props.alert.alertTimes == 0">فقط یکبار اطلاع بده</p>
      <p v-else>همیشه اطلاع بده</p>
      <input
        type="checkbox"
        class="toggle text-white border-none bg-hover checked:bg-primary z-[1000]"
        @click.stop
      />
    </div>
    <Drawer
      v-model:visible="visible"
      position="bottom"
      style="height: auto"
      pt:header="!hidden"
      pt:content="!p-4"
      pt:root="!rounded-t-10"
    >
      <button class="pb-3 border-b border-stroke block w-full text-right">
        ویرایش
      </button>
      <button
        class="pt-3 text-fail block w-full text-right"
        @click="showRemoveAlertMdoal"
      >
        حذف
      </button>
    </Drawer>
    <Dialog
      v-model:visible="visibleModal"
      modal
      header="حذف گوش به زنگ"
      style="width: 95%; max-width: 450px"
      pt:headerActions="!hidden"
      pt:header="!pb-0"
    >
      <p class="my-3 text-sm">دیگر نمیخواهید گوش به زنگ باشید؟</p>
      <div class="grid grid-cols-2 gap-2">
        <Button
          type="button"
          label="انصراف"
          pt:root="!bg-transparent !border-none !rounded-lg !text-primary"
          @click="visibleModal = false"
        ></Button>
        <Button
          type="button"
          label="حذف"
          pt:root="!bg-fail !border-none !rounded-lg !p-2.5"
          @click="removeFunc"
        ></Button>
      </div>
    </Dialog>
  </li>
</template>
<script setup>
let props = defineProps(['alert'])
let emit = defineEmits(['acceptRemoveAlert'])

let visible = ref(false)
let visibleModal = ref(false)

function showRemoveAlertMdoal () {
  visible.value = false
  visibleModal.value = true
}

function removeFunc () {
  emit('acceptRemoveAlert')
  visibleModal.value = false
}

provide('visible', visible)
</script>
