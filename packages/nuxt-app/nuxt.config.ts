import { join } from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // alias: {
  //   css: fileURLToPath(new URL("./assets/css"), import.meta.url),
  // },
  app: {
    head: {
      titleTemplate: "个人档案",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
        },
        {
          hid: "description",
          name: "description",
          content: "模拟钉钉端的个人档案",
        },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "~/assets/css/_colors.less";`,
        },
      },
    },
  },
  // 样式表将被内联到 Nuxt 渲染的 HTML 中，全局注入并存在于所有页面中。
  css: ["~/assets/css/main.css", "~/assets/css/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@vant/nuxt"],
  // vant: {
  //   importStyle: false
  // },
  postcss: {
    plugins: {
      tailwindcss: join(__dirname, "tailwind.config.js"),
      // 不支持动态设置设计稿宽度，插件好几年没有更新了
      "postcss-px-to-viewport": {
        // options
        unitToConvert: "px", // 需要转换的单位，默认为"px"
        viewportWidth: 750, // 设计稿的视窗宽度
        unitPrecision: 5, // 单位转换后保留的精度
        // propList: ['*', '!font-size'],        // 能转化为 vw 的属性列表
        viewportUnit: "vw", // 希望使用的视窗单位
        fontViewportUnit: "vw", // 字体使用的视窗单位
        selectorBlackList: [], // 需要忽略的 CSS 选择器，不会转为视窗单位，使用原有的 px 等单位
        minPixelValue: 1, // 设置最小的转换数值，如果为 1 的话，只有大于 1 的值会被转换
        mediaQuery: false, // 媒体查询里的单位是否需要转换单位
        replace: true, // 是否直接更换属性值，而不添加备用属性
        exclude: /\/node_modules\//, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
        include: /\/src\//, // 如果设置了include，那将只有匹配到的文件才会被转换
        landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件
        landscapeUnit: "vw", // 横屏时使用的单位
        landscapeWidth: 1125, // 横屏时使用的视窗宽度
      },

      // 'postcss-pxtorem': {
      //   rootValue: 75, // 1rem的大小
      //   propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
      //   exclude: ['node_modules'],
      // },
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://employee-archive-portal.beta1.fn/api",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
