<template>
  <ClientOnly>
    <UserPanelMobileHeader />
    <HeaderTheHeader class="hidden lg:flex" />
    <main class="pt-[48px] lg:!pt-24 lg:container gap-5 px-3 items-start pb-20 lg:pb-5">
      <div>
        <slot />
      </div>
    </main>
    <NavLinks />
  </ClientOnly>
</template>
