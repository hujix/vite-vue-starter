# vite-vue-starter

前端开发项目基础搭建一直是非常耗时的步骤，至少是我的一大痛点，所以这个项目就是为前端开发建立的一个基础模板，安装的插件包括但不限于以下：

- vite: 项目构建工具
- vue: 基于vue3的框架
- typescript: 强类型脚本语言
- vue-router: 路由管理
- sass: 样式预处理器
- autoprefixer: css自动添加前缀
- tailwindcss: 样式框架
- - prettier-plugin-sort-imports：对import进行排序
- - prettier-plugin-css-order：对css属性进行排序
- - prettier-plugin-tailwindcss：对tailwindcss进行格式化
- pinia: 状态管理
- prettier: 代码格式化
- eslint: 代码规范
- - vite-plugin-eslint： 代码规范检查（配置启动时并已经修复ts升级后的警告）
- editorconfig: 代码格式配置
- husky: git钩子
- lint-staged: 代码提交前格式化

全程已配置完成，无需手动配置。只需要安装依赖即可开始开发。

## 项目基本目录

```text
vite-vue-starter
├── .husky            # git 钩子配置
├── .vscode           # vscode 配置
├── patches           # 补丁
├── public
│   ├── favicon.ico   # favicon图标
├── src
│   ├── api           # 请求接口
│   ├── assets        # 静态资源
│   ├── components    # 通用业务组件
│   ├── config        # 全局配置(包含echarts主题)
│          └── settings.json  # 配置文件
│   ├── hooks         # 全局hooks
│   ├── layout        # 布局
│   ├── locale        # 国际化语言包
│   ├── mock          # 模拟数据
│   ├── views         # 页面模板
│   ├── router        # 路由配置
│   ├── store         # 状态管理中心
│   ├── types         # Typescript 类型
│   ├── utils         # 工具库
│   ├── App.vue       # 视图入口
│   ├── main.ts       # 入口文件
│   ├── style.css     # 全局样式
│   └── vite-env.d.ts # 声明文件
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── index.html
├── LICENSE
├── pnpm-lock.json
├── postcss.config.js
├── prettier.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 设置

### 下载模板

```shell
npx degit hujix/vite-vue-starter#main my-project
cd my-project
```

### 安装 `pnpm`

```shell
npm install -g pnpm
```

> 推荐使用pnpm作为包管理工具，使用npm可能会导致安装失败。

### 安装全部依赖

```
pnpm install
```

### 编译并热部署

```
pnpm run dev
```

## IDE的提示设置

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (禁用 Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## `.vue`TS导入的类型支持

`TypeScript` 默认无法处理 `.vue` 导入的类型信息，因此我们将 `tsc CLI` 替换为 `vue-tsc` 进行类型检查。在编辑器中，我们需要 [TypeScript Vue Plugin（Volar）](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) 来使 `TypeScript` 识别 `.vue` 类型。

如果您觉得独立的 `TypeScript` 插件速度不够快，Volar 还实现了性能更高的 [接管模式](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669)。您可以通过以下步骤启用它：

1. 禁用内置的 `TypeScript` 扩展
   1. 从 VSCode 的命令面板运行“Extensions: Show Built-in Extensions”
   2. 找到 `TypeScript and JavaScript Language Features`，右键单击并选择 `Disable（Workspace）`（只在当前工作空间禁用）。
2. 通过从命令面板运行 `Developer：Reload Window` 或者重新启动或者点击插件 `Reload required` 来重新加载 `VSCode` 窗口。
