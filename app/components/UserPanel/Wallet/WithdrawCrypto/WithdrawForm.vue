<template>
  <section>
    <div class="mb-5">
      <label class="text-sm block mb-2">انتخاب کوین</label>
      <UserPanelWalletWithdrawCryptoSelectCoin :data="data" />
    </div>
    <div class="mb-5">
      <label class="text-sm block mb-2">انتخاب شبکه</label>
      <UserPanelWalletWithdrawCryptoNetworkType :data="data" />
    </div>
    <UserPanelWalletWithdrawCryptoWalletAddress />
    <UserPanelWalletWithdrawValue
      :value="value"
      :validate="validate"
      :label="'مقدار برداشت'"
    />
    <UserPanelWalletWithdrawTypeWithdraw
      :value="value"
      :tax="'tet'"
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
