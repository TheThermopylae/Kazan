import tailwindcss from "@tailwindcss/vite";
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#0057FF',
      100: '#0057FF',
      200: '#0057FF',
      300: '#0057FF',
      400: '#0057FF',
      500: '#0057FF',
      600: '#0057FF',
      700: '#0057FF',
      800: '#0057FF',
      900: '#0057FF',
      950: '#0057FF'
    },
  },
})

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css', 'primeicons/primeicons.css'],
  app: {
    head: {
      bodyAttrs: {
        dir: 'rtl'
      },
      link: [
        { rel: 'icon', href: '/logo.svg' }
      ]
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL || 'http://backend.kazanexchange.com',
    public: {
      API_BASE_URL: process.env.API_BASE_URL
    },
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
})