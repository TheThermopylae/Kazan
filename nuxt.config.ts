import tailwindcss from "@tailwindcss/vite";
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#e6554f',
      100: '#e6554f',
      200: '#e6554f',
      300: '#e6554f',
      400: '#e6554f',
      500: '#FF6F61',
      600: '#e6554f',
      700: '#e6554f',
      800: '#e6554f',
      900: '#e6554f',
      950: '#e6554f'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{zinc.950}',
          inverseColor: '#f00',
          hoverColor: '{zinc.900}',
          activeColor: '{zinc.800}'
        },
        highlight: {
          background: '{zinc.950}',
          focusBackground: '{zinc.700}',
          color: '#f00',
          focusColor: '#f00'
        }
      },
      dark: {
        primary: {
          color: '{zinc.50}',
          inverseColor: '{zinc.950}',
          hoverColor: '{zinc.100}',
          activeColor: '{zinc.200}'
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  },
})

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css', 'primeicons/primeicons.css'],
  app: {
    head: {
      bodyAttrs: {
        dir: 'rtl'
      },
      // link: [
      //   { rel: 'icon', href: '/logo.png' }
      // ]
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@primevue/nuxt-module', '@nuxt/image'],
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark',
          cssLayer: false,
        },
      }
    }
  },
  image: {
    quality: 80
  }
})