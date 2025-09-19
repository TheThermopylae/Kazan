<template>
  <ClientOnly>
    <HeaderTheHeader />
    <main class="!mt-28 lg:container flex gap-5 items-start">
      <UserPanelSideBar />
      <div class="w-5/6 minw-0">
        <slot />
      </div>
    </main>
  </ClientOnly>
</template>
