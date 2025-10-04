<template>
  <aside
    class="w-1/6 bg-white dark:bg-maindark rounded text-xs hidden lg:block sticky top-20"
  >
    <ul>
      <li>
        <NuxtLink
          to="/"
          class="flex items-center gap-3 p-3 border-r-4 border-white dark:border-maindark transition rounded-t"
          active-class="bg-[#E5F2FF] !border-primary dark:bg-[#0E2A4A]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" stroke-width="1">
              <path
                stroke-width="1.5"
                d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.992 12h.009m3.995 0h.009m-8.009 0h.009"
              />
            </g>
          </svg>
          نمای کلی
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/app/wallet"
          class="flex items-center gap-3 p-3 rounded-b border-r-4 border-white dark:border-maindark transition"
          active-class="bg-[#E5F2FF] !border-primary dark:bg-[#0E2A4A]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 512 512"
          >
            <rect
              width="416"
              height="288"
              x="48"
              y="144"
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="32"
              rx="48"
              ry="48"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="32"
              d="M411.36 144v-30A50 50 0 0 0 352 64.9L88.64 109.85A50 50 0 0 0 48 159v49"
            />
            <path
              fill="currentColor"
              d="M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
            />
          </svg>
          کیف پول اصلی
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>
