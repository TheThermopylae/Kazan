<template>
  <Accordion>
    <AccordionPanel :value="item" v-for="item in [0, 1, 2]">
      <AccordionHeader pt:root="!bg-transparent !text-[#535160] dark:!text-white !font-medium"
        >Header {{ item + 1 }}</AccordionHeader
      >
      <AccordionContent>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>

<style>
.p-accordioncontent-content {
  background: transparent !important;
}
</style>
