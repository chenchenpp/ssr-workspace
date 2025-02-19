# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## 总结

### 渲染模式

- 通用渲染

当浏览器请求启用了通用（服务器端+客户端）渲染的 URL 时，服务器将一个完整渲染的 HTML 页面返回给浏览器

- 客户端渲染

传统的 Vue.js 应用程序默认在浏览器（或客户端）中进行渲染。然后，Vue.js 在浏览器下载和解析所有包含创建当前界面指令的 JavaScript 代码后，生成 HTML 元素。

- 混合渲染

混合渲染允许每个路由使用路由规则的不同缓存规则，并决定服务器如何响应给定 URL 的新请求。

### 名词概念

- SFC/single file component 单文件组件
- SSR 服务端渲染
- 水合：在浏览器中使静态页面具有交互性被称为“水合”。

### tailwind 配置###

1. 下载 @nuxtjs/tailwindcss
2. 配置 nuxt.config.ts

```ts
import { join } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // css: ['~/assets/css/main.css'],
  modules: ["@nuxtjs/tailwindcss"],
  postcss: {
    plugins: {
      tailwindcss: join(__dirname, "tailwind.config.js"),
      "postcss-pxtorem": {
        rootValue: 75, // 1rem的大小
        propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
        exclude: ["node_modules"],
      },
    },
  },
});
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

### 资源 assets 与 public 说明

- public/ 目录中的内容会按原样作为服务器根目录下的公共资源提供。

  ```js
  <template>
    <img src="/img/nuxt.png" alt="Discover Nuxt 3" />
  </template>
  ```

- assets/ 目录按约定包含了你希望构建工具（Vite 或 webpack）处理的所有资源。也就是说会编译、压缩、优化、合并、提取等处理。

```js
<template>
  <img src="~/assets/img/nuxt.png" alt="Discover Nuxt 3" />
</template>
```

### 数据获取 $fetch/useFetch/useAsyncData 的区别

- $fetch: 底层方法，相当于 axios
- useFetch: 一般获取数据的方式，对$fetch 的进一步封装。useFetch 提供了缓存功能，既可以在客户端也可以在服务端使用 ‌
- useAsyncData 主要用于在服务器端渲染（SSR）友好的方式下异步解析数据。同时可以接受多个请求完成后，在处理下文。

1. 配置说明

- server: 是否在服务端渲染，默认为 true。如果设置 false，则只在客户端渲染。
- lazy: 是否在页面加载完成之后才发送请求，默认为 false。

### 配置环境变量

1. 在根目录创建 .env.development(开发)/.env.test(测试)/.env.production（生产）文件，并写入环境变量
2. 配置 nuxt.config.ts

   ```js
    runtimeConfig: {
      public: {
        apiBase: process.env.NUXT_PUBLIC_API_BASE,
      },
    },
   ```

3. 配置命令 --dotenv

   ```js
    "dev": "nuxt dev --dotenv .env.development",
    "preview": "nuxt preview --dotenv .env.test",
    "build:beta": "nuxt build --dotenv .env.development",
    "build:preview": "nuxt build --dotenv .env.production",
    "build:online": "nuxt build --dotenv .env.production",
   ```

### 区分服务端环境与客户端环境

- 方式一：import.meta.server
- 方式二：配置 runtimeConfig,useRuntimeConfig()
