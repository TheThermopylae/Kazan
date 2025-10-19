<template>
  <ClientOnly>
    <HeaderTheHeader />
    <main class="!pt-24 lg:container lg:flex gap-5 items-start px-3 pb-5">
      <UserPanelSideBar />
      <div class="lg:w-5/6">
        <slot />
      </div>
    </main>
  </ClientOnly>
</template>
