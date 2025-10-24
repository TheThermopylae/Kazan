<template>
  <section>
    <div class="mb-5">
      <label class="font-bold text-sm block mb-2">انتخاب ارز</label>
      <UserPanelWalletWithdrawFiatSelectCurrency />
    </div>
    <UserPanelWalletWithdrawSelectCard />
    <UserPanelWalletWithdrawValue
      :value="value"
      :validate="validate"
      :label="'مقدار برداشت'"
    />
    <UserPanelWalletWithdrawTypeWithdraw
      :value="value"
      :tax="'rub'"
      @check-validate="updateValidateState"
    />
  </section>
</template>

<script setup>
let data = reactive({ coin: '' })

let value = reactive({
  price: null
})

let validate = ref(null)

function updateValidateState (item) {
  validate.value = item
}
</script>
