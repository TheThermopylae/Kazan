<template>
  <section class="lg:hidden">
    <ul>
      <UserPanelPriceAlertMobileCard
        v-for="(item, index) in alerts"
        :alert="item"
        :index="index"
        @acceptRemoveAlert="removeAlertFunc"
      />
    </ul>
  </section>
</template>

<script setup>
let alerts = inject('alerts')

function removeAlertFunc (index) {
  alerts.value.splice(index, 1)
}
</script>
