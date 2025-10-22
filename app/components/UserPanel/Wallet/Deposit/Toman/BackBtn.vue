<template>
  <section class="border-b border-[#D2D2D2] hidden lg:block pb-3 pr-1">
    <button class="flex items-center gap-1" @click="backFunc">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 6L14.9406 11.8586C15.0198 11.9367 15.0198 12.0633 14.9406 12.1414L9 18"
          stroke="#282930"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      واریز تومان
    </button>
  </section>
</template>

<script setup>
function backFunc () {
  history.back()
}
</script>
