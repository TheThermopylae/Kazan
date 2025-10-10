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
          class="flex items-center gap-3 p-3 border-r-4 border-white dark:border-maindark transition"
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
      <li
        class="text-secondary flex items-center gap-3 p-3 rounded-b border-r-4 border-white dark:border-maindark transition"
      >
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2639 18.7055C14.5809 17.7405 14.7389 17.2585 15.0619 16.9265C15.2153 16.7698 15.3933 16.6394 15.5889 16.5405C15.9999 16.3335 16.4999 16.3335 17.4999 16.3335C18.4999 16.3335 18.9999 16.3335 19.4119 16.5405C19.6079 16.6392 19.7836 16.7678 19.9389 16.9265C20.2619 17.2585 20.4189 17.7405 20.7359 18.7055L21.0619 19.7005C21.4559 20.9025 21.6529 21.5025 21.3589 21.9185C21.0639 22.3335 20.4419 22.3335 19.1969 22.3335H15.8039C14.5589 22.3335 13.9359 22.3335 13.6419 21.9185C13.3469 21.5025 13.5439 20.9025 13.9379 19.7005L14.2639 18.7055ZM8.76393 10.7055C9.07993 9.7405 9.23893 9.2585 9.56093 8.9265C9.71626 8.76783 9.89193 8.63916 10.0879 8.5405C10.4999 8.3335 10.9999 8.3335 11.9999 8.3335C12.9999 8.3335 13.4999 8.3335 13.9119 8.5405C14.1079 8.63916 14.2836 8.76783 14.4389 8.9265C14.7609 9.2585 14.9189 9.7405 15.2359 10.7055L15.5619 11.7005C15.9559 12.9025 16.1519 13.5025 15.8589 13.9185C15.5639 14.3335 14.9419 14.3335 13.6959 14.3335H10.3039C9.05793 14.3335 8.43593 14.3335 8.14193 13.9185C7.84693 13.5025 8.04393 12.9025 8.43793 11.7005L8.76393 10.7055ZM3.26393 18.7055C3.58093 17.7405 3.73893 17.2585 4.06193 16.9265C4.21593 16.7678 4.39159 16.6392 4.58893 16.5405C4.99993 16.3335 5.49993 16.3335 6.49993 16.3335C7.49993 16.3335 7.99993 16.3335 8.41193 16.5405C8.60793 16.6392 8.78359 16.7678 8.93893 16.9265C9.26193 17.2585 9.41893 17.7405 9.73593 18.7055L10.0619 19.7005C10.4559 20.9025 10.6529 21.5025 10.3589 21.9185C10.0639 22.3335 9.44193 22.3335 8.19693 22.3335H4.80393C3.55893 22.3335 2.93593 22.3335 2.64193 21.9185C2.34693 21.5025 2.54393 20.9025 2.93793 19.7005L3.26393 18.7055Z"
            stroke="#000006"
            stroke-opacity="0.4"
            stroke-width="1.5"
          />
          <path
            d="M12 2.3335V4.3335M7.5 3.8335L9 5.3335M16.5 3.8335L15 5.3335"
            stroke="#000006"
            stroke-opacity="0.4"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        طلا
      </li>
      <li
        class="text-secondary flex items-center gap-3 p-3 rounded-b border-r-4 border-white dark:border-maindark transition"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 14.5H3.039C3.511 14.5 3.747 14.5 3.953 14.401C4.158 14.303 4.305 14.118 4.6 13.749L6 12L7.5 14.5L9 11L11.5 16L15 9L17 12.5L18.5 11L19.945 13.168C20.197 13.546 20.323 13.735 20.507 13.849C20.5437 13.8717 20.5817 13.892 20.621 13.91C20.819 14 21.046 14 21.5 14"
            stroke="#9E9E9E"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M15 10C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10Z"
            stroke="#9E9E9E"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M2.5 12C2.5 7.522 2.5 5.282 3.891 3.891C5.282 2.5 7.521 2.5 12 2.5C16.478 2.5 18.718 2.5 20.109 3.891C21.5 5.282 21.5 7.521 21.5 12C21.5 16.478 21.5 18.718 20.109 20.109C18.718 21.5 16.479 21.5 12 21.5C7.522 21.5 5.282 21.5 3.891 20.109C2.5 18.718 2.5 16.479 2.5 12Z"
            stroke="#9E9E9E"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M15 2.5V5.5M15 21.5V14.5"
            stroke="#9E9E9E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        اعتبار معاملاتی
      </li>
    </ul>
  </aside>
</template>
