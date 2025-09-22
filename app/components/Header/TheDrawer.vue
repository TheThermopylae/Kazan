<template>
  <Drawer
    v-model:visible="visible"
    position="full"
    pt:header="!border-b border-[#F1F1F1] dark:border-secdark !pb-2 ltr-dir"
    pt:content="!px-0"
  >
    <template #header>
      <div class="flex items-center gap-2">
        <NuxtImg src="/logo.svg" class="size-6" />
        <p class="font-bold">صرافی <span class="text-primary">کازان</span></p>
      </div>
    </template>
    <ul class="mt-3 text-black dark:text-white">
      <li class="pb-3 border-b border-[#f1f1f1] dark:border-secdark px-5 mb-3">
        <NuxtLink to="/" class="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m19.633 7.11l-6.474-4.02a2.23 2.23 0 0 0-2.362 0L4.324 7.133A2.23 2.23 0 0 0 3.31 9.362l1.67 10.027a2.23 2.23 0 0 0 2.228 1.86h9.582a2.23 2.23 0 0 0 2.229-1.86l1.67-10.027a2.23 2.23 0 0 0-1.058-2.251M8.636 16.459h6.685"
            />
          </svg>
          خانه
        </NuxtLink>
      </li>
      <li
        class="pb-3 border-b border-[#f1f1f1] dark:border-secdark cursor-pointer mb-3"
      >
        <Accordion>
          <AccordionPanel value="0" pt:root="!border-0">
            <AccordionHeader
              pt:root="!py-0 !px-5 !text-black dark:!text-white !font-medium"
            >
              <div class="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 14 14"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  >
                    <path
                      d="M9.806 4.24a1.02 1.02 0 0 0-.961-.68h-.79a.91.91 0 0 0-.194 1.798l1.202.263a1.02 1.02 0 0 1-.218 2.016h-.68a1.02 1.02 0 0 1-.961-.68M8.505 3.56V2.54m0 6.116v-1.02"
                    />
                    <path
                      d="M3.614 5.598a4.891 4.891 0 1 0 9.782 0a4.891 4.891 0 1 0-9.782 0m-2.411.536a4.89 4.89 0 0 0 6.437 6.73"
                    />
                  </g>
                </svg>
                خرید ارز
              </div>
            </AccordionHeader>
            <AccordionContent pt:root="mt-4">
              <ul class="text-black dark:text-white">
                <li
                  class="flex items-center gap-3 px-5 mb-3 border-b border-[#f1f1f1] dark:border-secdark last:border-0 last:m-0 pb-3 last:pb-0"
                  v-for="item in 10"
                  :key="item"
                >
                  <NuxtImg src="/crypto/RUB.svg" class="size-6" />
                  روبل
                </li>
              </ul>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </li>
      <li class="pb-3 border-b border-[#f1f1f1] dark:border-secdark !px-5 mb-3">
        <NuxtLink to="/" class="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 8.75c-.69 0-1.25.56-1.25 1.25v.107a.75.75 0 1 1-1.5 0V10A2.75 2.75 0 0 1 12 7.25h.116a2.634 2.634 0 0 1 1.714 4.633l-.77.66a.9.9 0 0 0-.31.674v.533a.75.75 0 0 1-1.5 0v-.533c0-.697.304-1.359.833-1.812l.771-.66a1.134 1.134 0 0 0-.738-1.995zM12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
            />
            <path
              fill="currentColor"
              d="M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5"
            />
          </svg>
          راهنمای کامل
        </NuxtLink>
      </li>
      <li
        class="pb-3 border-b border-[#f1f1f1] dark:border-secdark cursor-pointer mb-3"
      >
        <Accordion>
          <AccordionPanel value="0" pt:root="!border-0">
            <AccordionHeader
              pt:root="!py-0 !px-5 !text-black dark:!text-white !font-medium"
            >
              <div class="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
                سایر
              </div>
            </AccordionHeader>
            <AccordionContent pt:root="mt-4">
              <ul class="text-black dark:text-white">
                <li
                  class="flex items-center gap-3 px-5 mb-3 border-b border-[#f1f1f1] dark:border-secdark last:border-0 last:m-0 pb-3 last:pb-0"
                  v-for="item in 10"
                  :key="item"
                >
                  <NuxtImg src="/crypto/RUB.svg" class="size-6" />
                  روبل
                </li>
              </ul>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </li>
      <li class="pb-3 border-b border-[#f1f1f1] dark:border-secdark px-5 mb-3">
        <NuxtLink to="/" class="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12zm7-5h-2V9h2zm-4 0h-2V9h2zm-4 0H7V9h2z"
            />
          </svg>
          چت با پشتیبانی
        </NuxtLink>
      </li>
      <li
        class="pb-3 border-b border-[#f1f1f1] dark:border-secdark !px-5 mb-3 flex justify-between"
      >
        <div to="/" class="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z"
            />
          </svg>
          انتخاب تم
        </div>
        <HeaderSwitchTheme />
      </li>
    </ul>
  </Drawer>
  <Button unstyled @click="visible = true" pt:root="lg:!hidden">
    <template #icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 36 36"
      >
        <path
          fill="currentColor"
          d="M32 29H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2"
          class="clr-i-outline clr-i-outline-path-1"
        />
        <path
          fill="currentColor"
          d="M32 19H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2"
          class="clr-i-outline clr-i-outline-path-2"
        />
        <path
          fill="currentColor"
          d="M32 9H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2"
          class="clr-i-outline clr-i-outline-path-3"
        />
        <path fill="none" d="M0 0h36v36H0z" />
      </svg>
    </template>
  </Button>
</template>

<script setup>
let visible = ref(false)
</script>

<style scoped>
:deep(.p-accordioncontent-content) {
  background: none !important;
  padding: 0 !important;
}
:deep(.p-accordionheader) {
  background: none !important;
  transition: all 0s !important;
}
</style>
