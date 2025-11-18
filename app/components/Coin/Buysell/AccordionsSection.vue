<template>
  <Accordion>
    <AccordionPanel value="0">
      <AccordionHeader pt:root="!bg-transparent !text-black !font-medium !text-sm">
        <div class="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 22H2"
              stroke="#252525"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M21 22V14.5C21 14.1022 20.842 13.7206 20.5607 13.4393C20.2794 13.158 19.8978 13 19.5 13H16.5C16.1022 13 15.7206 13.158 15.4393 13.4393C15.158 13.7206 15 14.1022 15 14.5V22V5C15 3.586 15 2.879 14.56 2.44C14.122 2 13.415 2 12 2C10.585 2 9.879 2 9.44 2.44C9 2.878 9 3.585 9 5V22V9.5C9 9.10218 8.84196 8.72064 8.56066 8.43934C8.27936 8.15804 7.89782 8 7.5 8H4.5C4.10218 8 3.72064 8.15804 3.43934 8.43934C3.15804 8.72064 3 9.10218 3 9.5V22"
              stroke="#252525"
              stroke-width="1.5"
            />
          </svg>
          اطلاعات بازار بیت کوین
        </div>
      </AccordionHeader>
      <AccordionContent>
        <p class="m-0">
          {{ lorem }}
        </p>
      </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1">
      <AccordionHeader pt:root="!bg-transparent !text-black !font-medium !text-sm">
        <div class="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.125 16.875C13.125 17.0975 13.059 17.315 12.9354 17.5C12.8118 17.685 12.6361 17.8292 12.4305 17.9144C12.225 17.9995 11.9988 18.0218 11.7805 17.9784C11.5623 17.935 11.3618 17.8278 11.2045 17.6705C11.0472 17.5132 10.94 17.3127 10.8966 17.0945C10.8532 16.8762 10.8755 16.65 10.9606 16.4445C11.0458 16.2389 11.19 16.0632 11.375 15.9396C11.56 15.816 11.7775 15.75 12 15.75C12.2984 15.75 12.5845 15.8685 12.7955 16.0795C13.0065 16.2905 13.125 16.5766 13.125 16.875ZM12 6.75C9.93188 6.75 8.25 8.26406 8.25 10.125V10.5C8.25 10.6989 8.32902 10.8897 8.46967 11.0303C8.61033 11.171 8.80109 11.25 9 11.25C9.19892 11.25 9.38968 11.171 9.53033 11.0303C9.67099 10.8897 9.75 10.6989 9.75 10.5V10.125C9.75 9.09375 10.7597 8.25 12 8.25C13.2403 8.25 14.25 9.09375 14.25 10.125C14.25 11.1562 13.2403 12 12 12C11.8011 12 11.6103 12.079 11.4697 12.2197C11.329 12.3603 11.25 12.5511 11.25 12.75V13.5C11.25 13.6989 11.329 13.8897 11.4697 14.0303C11.6103 14.171 11.8011 14.25 12 14.25C12.1989 14.25 12.3897 14.171 12.5303 14.0303C12.671 13.8897 12.75 13.6989 12.75 13.5V13.4325C14.46 13.1184 15.75 11.7544 15.75 10.125C15.75 8.26406 14.0681 6.75 12 6.75ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96451 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7661 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6497 3.75357 11.9909 3.59019 10.3905 3.90852C8.79017 4.22685 7.32016 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90853 10.3905C3.5902 11.9908 3.75358 13.6496 4.378 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77326 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12Z"
              fill="#252525"
            />
          </svg>
          چرا بايد بيت كوين بخريم؟
        </div>
      </AccordionHeader>
      <AccordionContent>
        <p class="m-0">
          {{ lorem }}
        </p>
      </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="2">
      <AccordionHeader pt:root="!bg-transparent !text-black !font-medium !text-sm">
        <div class="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 12C22 8.229 22 6.343 20.828 5.172C19.656 4.001 17.771 4 14 4H10C6.229 4 4.343 4 3.172 5.172C2.001 6.344 2 8.229 2 12C2 15.771 2 17.657 3.172 18.828C4.344 19.999 6.229 20 10 20H14C17.771 20 19.657 20 20.828 18.828C21.482 18.175 21.771 17.3 21.898 16M10 16H6M14 16H12.5M2 10H7M22 10H11"
              stroke="#252525"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          نحوه خريد بيت كوين
        </div>
      </AccordionHeader>
      <AccordionContent>
        <p class="m-0">
          {{ lorem }}
        </p>
      </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="3">
      <AccordionHeader pt:root="!bg-transparent !text-black !font-medium !text-sm">
        <div class="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 17V10M12 10L15 13M12 10L9 13"
              stroke="#252525"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 7H8M22 12C22 16.714 22 19.071 20.535 20.535C19.072 22 16.714 22 12 22C7.286 22 4.929 22 3.464 20.535C2 19.072 2 16.714 2 12C2 7.286 2 4.929 3.464 3.464C4.93 2 7.286 2 12 2C16.714 2 19.071 2 20.535 3.464C21.509 4.438 21.835 5.807 21.945 8"
              stroke="#252525"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          نحوه فروش بيت كوين
        </div>
      </AccordionHeader>
      <AccordionContent>
        <p class="m-0">
          {{ lorem }}
        </p>
      </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="4">
      <AccordionHeader pt:root="!bg-transparent !text-black !font-medium !text-sm">
        <div class="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.144 2.5C6.487 2.56 4.935 2.815 3.874 3.875C2.813 4.935 2.562 6.487 2.5 9.145M14.856 2.5C17.513 2.56 19.065 2.815 20.126 3.875C21.187 4.935 21.439 6.487 21.5 9.145M14.856 21.5C17.513 21.44 19.065 21.185 20.126 20.125C21.187 19.065 21.439 17.513 21.5 14.855M9.144 21.5C6.487 21.44 4.935 21.185 3.874 20.125C2.813 19.065 2.561 17.513 2.5 14.855"
              stroke="#252525"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 8H8.009M16 16H16.009"
              stroke="#252525"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 16L16 8"
              stroke="#252525"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          كارمزد معامله بيت كوين
        </div>
      </AccordionHeader>
      <AccordionContent>
        <p class="m-0">
          {{ lorem }}
        </p>
      </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="5">
      <AccordionHeader pt:root="!bg-transparent !text-black !font-medium !text-sm">
        <div class="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 15V9"
              stroke="#252525"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.833 9H18.231C16.446 9 15 10.343 15 12C15 13.657 16.447 15 18.23 15H20.833C20.917 15 20.958 15 20.993 14.998C21.533 14.965 21.963 14.566 21.998 14.065C22 14.033 22 13.994 22 13.917V10.083C22 10.006 22 9.967 21.998 9.935C21.962 9.434 21.533 9.035 20.993 9.002C20.959 9 20.917 9 20.833 9Z"
              stroke="#252525"
              stroke-width="1.5"
            />
            <path
              d="M20.965 9C20.887 7.128 20.637 5.98 19.828 5.172C18.657 4 16.771 4 13 4H10C6.229 4 4.343 4 3.172 5.172C2.001 6.344 2 8.229 2 12C2 15.771 2 17.657 3.172 18.828C4.344 19.999 6.229 20 10 20H13C16.771 20 18.657 20 19.828 18.828C20.637 18.02 20.888 16.872 20.965 15"
              stroke="#252525"
              stroke-width="1.5"
            />
            <path
              d="M17.991 12H18.001"
              stroke="#252525"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          كيف بول های ارز ديجیتال بیت كوین
        </div>
      </AccordionHeader>
      <AccordionContent>
        <p class="m-0">
          {{ lorem }}
        </p>
      </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="6">
      <AccordionHeader pt:root="!bg-transparent !text-black !font-medium !text-sm">
        <div class="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.50106 19.501C9.50106 18.787 9.50106 18.431 9.46206 18.194C9.34006 17.431 9.31906 17.382 8.83206 16.782C8.68006 16.595 8.12006 16.094 7.00006 15.09C5.86794 14.0774 5.06995 12.745 4.71166 11.2689C4.35336 9.79292 4.45167 8.2429 4.99356 6.82398C5.53545 5.40505 6.49539 4.18409 7.74636 3.32266C8.99733 2.46122 10.4804 1.99991 11.9993 1.99976C13.5181 1.9996 15.0013 2.46062 16.2524 3.32181C17.5035 4.18299 18.4637 5.40376 19.0059 6.82258C19.5481 8.24139 19.6467 9.79139 19.2887 11.2675C18.9307 12.7436 18.133 14.0762 17.0011 15.089C15.8801 16.093 15.3201 16.595 15.1691 16.781C14.6821 17.381 14.6611 17.43 14.5381 18.193C14.5001 18.43 14.5001 18.787 14.5001 19.5H9.50006C9.50006 20.435 9.50006 20.902 9.70106 21.25C9.83271 21.478 10.0221 21.6673 10.2501 21.799C10.5981 22 11.0651 22 12.0001 22C12.9351 22 13.4021 22 13.7511 21.8C13.9791 21.6683 14.1684 21.479 14.3001 21.251C14.5011 20.903 14.5011 20.436 14.5011 19.501"
              stroke="#252525"
              stroke-width="1.5"
            />
            <path
              d="M12.0001 17V15M12.0001 15C12.3511 15 12.696 14.9075 13 14.732C13.3041 14.5565 13.5565 14.304 13.7321 14M12.0001 15C11.649 15 11.3041 14.9075 11.0001 14.732C10.6961 14.5565 10.4436 14.304 10.2681 14"
              stroke="#252525"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          بيت كوين چيست؟
        </div>
      </AccordionHeader>
      <AccordionContent>
        <p class="m-0">
          {{ lorem }}
        </p>
      </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="7">
      <AccordionHeader pt:root="!bg-transparent !text-black !font-medium !text-sm">
        <div class="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.50106 19.501C9.50106 18.787 9.50106 18.431 9.46206 18.194C9.34006 17.431 9.31906 17.382 8.83206 16.782C8.68006 16.595 8.12006 16.094 7.00006 15.09C5.86794 14.0774 5.06995 12.745 4.71166 11.2689C4.35336 9.79292 4.45167 8.2429 4.99356 6.82398C5.53545 5.40505 6.49539 4.18409 7.74636 3.32266C8.99733 2.46122 10.4804 1.99991 11.9993 1.99976C13.5181 1.9996 15.0013 2.46062 16.2524 3.32181C17.5035 4.18299 18.4637 5.40376 19.0059 6.82258C19.5481 8.24139 19.6467 9.79139 19.2887 11.2675C18.9307 12.7436 18.133 14.0762 17.0011 15.089C15.8801 16.093 15.3201 16.595 15.1691 16.781C14.6821 17.381 14.6611 17.43 14.5381 18.193C14.5001 18.43 14.5001 18.787 14.5001 19.5H9.50006C9.50006 20.435 9.50006 20.902 9.70106 21.25C9.83271 21.478 10.0221 21.6673 10.2501 21.799C10.5981 22 11.0651 22 12.0001 22C12.9351 22 13.4021 22 13.7511 21.8C13.9791 21.6683 14.1684 21.479 14.3001 21.251C14.5011 20.903 14.5011 20.436 14.5011 19.501"
              stroke="#252525"
              stroke-width="1.5"
            />
            <path
              d="M12.0001 17V15M12.0001 15C12.3511 15 12.696 14.9075 13 14.732C13.3041 14.5565 13.5565 14.304 13.7321 14M12.0001 15C11.649 15 11.3041 14.9075 11.0001 14.732C10.6961 14.5565 10.4436 14.304 10.2681 14"
              stroke="#252525"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          آموزش خريد ارزان بيت كوين
        </div>
      </AccordionHeader>
      <AccordionContent>
        <p class="m-0">
          {{ lorem }}
        </p>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>

<script setup>
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`
</script>
