<template>
  <ClientOnly>
    <UserPanelMobileHeader />
    <HeaderTheHeader class="hidden lg:flex" />
    <main
      class="pt-[57px] lg:!pt-24 lg:container justify-start lg:flex gap-5 items-start pb-5"
    >
      <UserPanelSideBarAccount />
      <div class="lg:w-4/5 xl:w-5/6">
        <slot />
      </div>
    </main>
    <NavLinks />
  </ClientOnly>
</template>
