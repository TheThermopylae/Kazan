import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('DatePickerIr', Vue3PersianDatetimePicker)
})
