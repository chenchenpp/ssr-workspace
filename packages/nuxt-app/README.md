# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## 总结
### tailwind配置
1. 下载 @nuxtjs/tailwindcss
2. 配置nuxt.config.ts
```ts
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
```
3. 配置初始化
   ```css
    <!-- assets/css/tailwind.css 文件路径 -->
    @tailwind base;

    @tailwind components;

    @tailwind utilities;

    body {
    @apply bg-gray-200;
    }
    /* @layer可以修改默认配置样式 */
    @layer utilities {
    .bg-blue-500{
        @apply bg-red-500 text-white px-4 py-2 rounded;
    }
    }
   ```