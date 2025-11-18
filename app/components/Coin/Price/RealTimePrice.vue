<template>
  <section class="w-full md:w-2/3">
    <h2 class="text-2xl font-bold">قیمت لحظه ای بیت کوین</h2>
    <p class="my-3 text-justify">
      قیمت امروز بیت کوین، ۱۹ مهر ۱۴۰۴ برابر با ۱۱۲,۴۴۴.۵۸ تتر معادل
      ۱۲,۶۸۱,۰۳۳,۷۰۸ تومان است و نسبت به ۲۴ ساعت گذشته ۷.۸۳ درصد کاهش یافته است.
      شما در این صفحه می‌توانید قیمت بیت کوین را به صورت لحظه‌ای همگام با بازار
      جهانی مشاهده کنید.ارز دیجیتال بیت کوین اولین کوین بازار کریپتوکارنسی است
      که با ارزش بازار ۲,۲۴۱,۳۳۴,۱۴۲,۸۲۹ دلار در جایگاه ۱ جدول رمزارزها بر اساس
      مارکت کپ قرار گرفته است.
    </p>
    <div class="grid md:grid-cols-2 gap-7 bg-white p-4 rounded-10">
      <article class="md:col-span-2">
        <h4 class="flex items-center gap-2 font-bold">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8.5V13.5M12.01 16H12M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#0057FF"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          بیت کوین
        </h4>
        <p class="text-bar my-3 text-xs text-justify">
          قیمت امروز بیت کوین، ۱۹ مهر ۱۴۰۴ برابر با ۱۱۲,۴۴۴.۵۸ تتر معادل
          ۱۲,۶۸۱,۰۳۳,۷۰۸ تومان است و نسبت به ۲۴ ساعت گذشته ۷.۸۳ درصد کاهش یافته
          است. شما در این صفحه می‌توانید قیمت بیت کوین را به صورت لحظه‌ای همگام
          با بازار جهانی مشاهده کنید.ارز دیجیتال بیت کوین اولین کوین بازار
          کریپتوکارنسی است که با ارزش بازار ۲,۲۴۱,۳۳۴,۱۴۲,۸۲۹ دلار در جایگاه ۱
          جدول رمزارزها بر اساس مارکت کپ قرار گرفته است.
        </p>
        <NuxtLink to="/" class="text-primary flex items-center gap-2 text-xs">
          مشاهده بیشتر
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 6L8.5594 11.8586C8.4802 11.9367 8.4802 12.0633 8.5594 12.1414L14.5 18"
              stroke="#0057FF"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </NuxtLink>
      </article>
      <article v-for="item in 6">
        <h4 class="flex items-center gap-2 font-bold">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8.5V13.5M12.01 16H12M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#0057FF"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          بیت کوین
        </h4>
        <p class="text-bar my-3 text-xs text-justify">
          قیمت امروز بیت کوین، ۱۹ مهر ۱۴۰۴ برابر با ۱۱۲,۴۴۴.۵۸ تتر معادل
          ۱۲,۶۸۱,۰۳۳,۷۰۸ تومان است و نسبت به ۲۴ ساعت گذشته ۷.۸۳ درصد کاهش یافته
          است. شما در
        </p>
        <NuxtLink to="/" class="text-primary flex items-center gap-2 text-xs">
          مشاهده بیشتر
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 6L8.5594 11.8586C8.4802 11.9367 8.4802 12.0633 8.5594 12.1414L14.5 18"
              stroke="#0057FF"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </NuxtLink>
      </article>
    </div>
  </section>
</template>
