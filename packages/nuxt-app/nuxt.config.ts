import { join } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // css: ['~/assets/css/main.css'],
  modules: ["@nuxtjs/tailwindcss"],
  postcss: {
    plugins: {
      tailwindcss: join(__dirname, 'tailwind.config.js'),
      'postcss-pxtorem': {
        rootValue: 75, // 1rem的大小
        propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        exclude: ['node_modules'],
      },
    }
  }
})