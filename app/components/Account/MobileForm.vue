<template>
  <Drawer
    v-model:visible="showForm"
    position="bottom"
    style="height: auto"
    @after-hide="step = 1"
    pt:root="!rounded-t-10 !text-black lg:!hidden !bg-white dark:!bg-maindark"
    pt:header="!p-1 !border-b !border-[#F0F0F0]"
    pt:content="!px-0 !pb-0"
  >
    <template #header>
      <h4 class="absolute left-1/2 -translate-x-1/2 top-3 text-sm">
        ورود و ثبت نام
      </h4>
    </template>
    <AccountInsertData v-if="step == 1" @toStepTwo="step = 2" />
    <AccountInsertPass
      v-else-if="step == 2"
      @toStepThree="step = 3"
      @changePassword="step = 'pass'"
    />
    <AccountInsertOtp v-else-if="step == 3" @toStepOne="step = 1" />
    <AccountForgetPassword
      v-else-if="step == 'pass'"
      @passwordChanged="step = 1"
    />
    <p class="text-center text-[#00000666] text-xs mb-4" v-if="step != 3">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
    </p>
  </Drawer>
</template>

<script setup>
let showForm = inject('showForm')

let step = ref(1)
</script>
