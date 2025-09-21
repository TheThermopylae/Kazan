<template>
  <section>
    <div
      class="flex justify-between items-center p-5 rounded bg-white dark:bg-maindark mb-3"
    >
      <h2 class="font-bold">بازارهای معاملاتی</h2>
      <div class="flex items-center gap-5">
        <div class="relative">
          <input
            type="text"
            class="bg-[#EDEDED] dark:bg-secdark rounded-lg w-[280px] p-2 pr-10 text-sm placheholder:text-sm"
            placeholder="جستجو"
          />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <g clip-path="url(#clip0_3390_1021)">
              <path
                d="M18.3334 18.3332L14.7983 14.7981M14.7983 14.7981C16.1904 13.4061 17.0514 11.483 17.0514 9.35881C17.0514 5.11047 13.6074 1.6665 9.35906 1.6665C5.11071 1.6665 1.66675 5.11047 1.66675 9.35881C1.66675 13.6072 5.11071 17.0511 9.35906 17.0511C11.4832 17.0511 13.4063 16.1901 14.7983 14.7981Z"
                stroke="#535353"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_3390_1021">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <NuxtLink to="/" class="text-primary text-sm">همه</NuxtLink>
      </div>
    </div>
    <AppMarketTable />
  </section>
</template>
