### pnpm workspace常用命令

* 全局安装依赖包 -w
  `pnpm install lodash -w`

* 局部安装依赖 --filter + 项目名称
  `pnpm add axios --filter hello-world`

* 子工程安装依赖
  `pnpm install --filter '{packages/hello-world}'`

* 启动子工程命令
  `pnpm --filter '{packages/next-framer}' dev`

* 子工程相互依赖: 表示把hello-world放到use-hello-world的依赖里
  `pnpm add hello-world --filter use-hello-world`

