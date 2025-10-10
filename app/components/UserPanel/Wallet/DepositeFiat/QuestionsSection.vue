<template>
  <section>
    <h2 class="flex items-center gap-2 font-bold !text-[16px]">
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 9.25C11.31 9.25 10.75 9.81 10.75 10.5V10.607C10.75 10.8059 10.671 10.9967 10.5303 11.1373C10.3897 11.278 10.1989 11.357 10 11.357C9.80109 11.357 9.61032 11.278 9.46967 11.1373C9.32902 10.9967 9.25 10.8059 9.25 10.607V10.5C9.25 9.77065 9.53973 9.07118 10.0555 8.55546C10.5712 8.03973 11.2707 7.75 12 7.75H12.116C12.654 7.75025 13.179 7.91522 13.6204 8.22272C14.0618 8.53023 14.3985 8.96553 14.5852 9.47008C14.7718 9.97463 14.7995 10.5242 14.6645 11.045C14.5295 11.5657 14.2383 12.0327 13.83 12.383L13.06 13.043C12.9634 13.1269 12.8858 13.2304 12.8323 13.3466C12.7789 13.4628 12.7508 13.5891 12.75 13.717V14.25C12.75 14.4489 12.671 14.6397 12.5303 14.7803C12.3897 14.921 12.1989 15 12 15C11.8011 15 11.6103 14.921 11.4697 14.7803C11.329 14.6397 11.25 14.4489 11.25 14.25V13.717C11.25 13.02 11.554 12.358 12.083 11.905L12.854 11.245C13.0299 11.0942 13.1554 10.8931 13.2136 10.6689C13.2718 10.4446 13.26 10.2079 13.1796 9.99056C13.0992 9.77325 12.9541 9.58578 12.764 9.45338C12.5738 9.32098 12.3477 9.25 12.116 9.25H12ZM12 17.5C12.2652 17.5 12.5196 17.3946 12.7071 17.2071C12.8946 17.0196 13 16.7652 13 16.5C13 16.2348 12.8946 15.9804 12.7071 15.7929C12.5196 15.6054 12.2652 15.5 12 15.5C11.7348 15.5 11.4804 15.6054 11.2929 15.7929C11.1054 15.9804 11 16.2348 11 16.5C11 16.7652 11.1054 17.0196 11.2929 17.2071C11.4804 17.3946 11.7348 17.5 12 17.5Z"
          fill="black"
        />
        <path
          d="M3.25 12.5C3.25 10.1794 4.17187 7.95376 5.81282 6.31282C7.45376 4.67187 9.67936 3.75 12 3.75C14.3206 3.75 16.5462 4.67187 18.1872 6.31282C19.8281 7.95376 20.75 10.1794 20.75 12.5C20.75 14.8206 19.8281 17.0462 18.1872 18.6872C16.5462 20.3281 14.3206 21.25 12 21.25C9.67936 21.25 7.45376 20.3281 5.81282 18.6872C4.17187 17.0462 3.25 14.8206 3.25 12.5ZM12 5.25C11.0479 5.25 10.1052 5.43753 9.22554 5.80187C8.34593 6.16622 7.5467 6.70025 6.87348 7.37348C6.20025 8.0467 5.66622 8.84593 5.30187 9.72554C4.93753 10.6052 4.75 11.5479 4.75 12.5C4.75 13.4521 4.93753 14.3948 5.30187 15.2745C5.66622 16.1541 6.20025 16.9533 6.87348 17.6265C7.5467 18.2997 8.34593 18.8338 9.22554 19.1981C10.1052 19.5625 11.0479 19.75 12 19.75C13.9228 19.75 15.7669 18.9862 17.1265 17.6265C18.4862 16.2669 19.25 14.4228 19.25 12.5C19.25 10.5772 18.4862 8.73311 17.1265 7.37348C15.7669 6.01384 13.9228 5.25 12 5.25Z"
          fill="black"
        />
      </svg>
      سوالات متداول
    </h2>
    <div class="mt-3">
      <Accordion>
        <AccordionPanel value="1">
          <AccordionHeader
            pt:root="!bg-transparent !text-[#535160] dark:!text-white !font-medium"
            >از چه کارت‌های بانکی می‌توانم برای واریز استفاده
            کنم؟</AccordionHeader
          >
          <AccordionContent>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <Accordion>
        <AccordionPanel value="1">
          <AccordionHeader
            pt:root="!bg-transparent !text-[#535160] dark:!text-white !font-medium"
          >
            آیا شماره حساب‌های کازان همیشه ثابت است؟
          </AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <Accordion>
        <AccordionPanel value="1">
          <AccordionHeader
            pt:root="!bg-transparent !text-[#535160] dark:!text-white !font-medium"
          >
            آیا معاملات (خرید و فروش) در واتساپ انجام می‌شود؟
          </AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <Accordion>
        <AccordionPanel value="1">
          <AccordionHeader
            pt:root="!bg-transparent !text-[#535160] dark:!text-white !font-medium"
          >
            مهم‌ترین نکته امنیتی چیست؟
          </AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              تنها کانال رسمی پشتیبانی کازان در واتساپ، شماره زیر است و هیچ راه
              ارتباطی دیگری وجود ندارد: <br />
              +7 (919) 777-4661
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </section>
</template>

<style scoped>
:deep(*) {
  font-size: 14px !important;
}
</style>
