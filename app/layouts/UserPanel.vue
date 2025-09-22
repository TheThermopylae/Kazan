<template>
  <ClientOnly>
    <HeaderTheHeader />
    <main class="!mt-28 lg:container flex gap-5 items-start pb-5">
      <UserPanelSideBar />
      <div class="w-5/6">
        <slot />
      </div>
    </main>
  </ClientOnly>
</template>
