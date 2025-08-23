<template>
  <Accordion>
    <AccordionPanel :value="item" v-for="item in [0, 1, 2]">
      <AccordionHeader pt:root="!bg-[#F2F8FF] !text-[#535160] !font-medium"
        >Header {{ item + 1 }}</AccordionHeader
      >
      <AccordionContent pt:root="!bg-blue-500 !text-2sm !p-0">
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
  background: #f2f8ff !important;
}
</style>

<template>
  <Accordion>
    <AccordionPanel :value="item" v-for="item in [0, 1, 2]">
      <AccordionHeader pt:root="!bg-[#F2F8FF] !text-[#535160] !font-medium"
        >Header {{ item + 1 }}</AccordionHeader
      >
      <AccordionContent pt:root="!bg-blue-500 !text-2sm !p-0">
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
  background: #f2f8ff !important;
}
</style>
