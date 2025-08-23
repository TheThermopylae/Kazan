<template>
  <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 xl:w-4/5 m-auto">
    <article class="p-5 rounded-[22px] bg-white dark:bg-secdark" v-for="item in 3">
      <NuxtImg
        :src="`/main/img${item}.svg`"
        class="w-full rounded-[20px] mb-20"
      ></NuxtImg>
      <p class="mb-10 text-sm">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد
      </p>
      <NuxtLink
        to="/"
        class="flex items-center gap-3 justify-center text-white bg-[#33323B] rounded-xl p-3 hover:bg-primary transition"
      >
        بیشتر
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.9375 4.5L6.22462 8.16161C6.17513 8.21043 6.17513 8.28957 6.22462 8.33839L9.9375 12"
            stroke="white"
            stroke-width="1.125"
            stroke-linecap="round"
          />
        </svg>
      </NuxtLink>
    </article>
  </section>
</template>
