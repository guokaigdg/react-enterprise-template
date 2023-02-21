<h1 align="center">react 模板</h1>
<br/>

<center>
    <img src='./docs/images/home.png' style='width: 75%'/>
</center>

## 👨🏻‍💻 项目说明

-   react 模板, 一个比 CRA 更丰富的模板

-   开发配置文档说明 [React18 + webpack5 + TypeScript4 + react-router-dom](https://juejin.cn/post/7197790401495121977)

## 🚀 技术栈

-   React v18
-   react-dom v18
-   React Hook
-   TypeScript v4
-   webpack v5
-   axios v1
-   mobx v6
-   mobx-react-lite v3
-   react-router-dom v6

## ⌛️ 安装项目依赖

```
if you prefer npm
$ npm install

if you prefer yarn
$ yarn
```

## 🚀 运行项目

```
if you prefer npm
$ npm run start

if you prefer yarn
$ yarn dev
```

## 📦 打包编译

```
npm run build:qa  // 测试环境
npm run build:prod  // 线上环境
```

## 💡 分支说明

| 分支 | 说明     |
| ---- | -------- |
| main | 主分支   |
| dev  | 开发分支 |

## 代码提交规范

```
git <type>: <subject>
git commit -m “feat: 项目初始化”
```

### type 参考:

```
fix       🐛 Bug修复
feature   ✨ 引入新特性
docs      📝 文档书写改动
prune     🔥 移除代码或文件
ui        💄 更新UI和样式文件
perf      ⚡ 性能相关优化
rocket    🚀 部署功能
style     🎨 style修改
init      🎉 初始化提交
release   🔖 发布版本
wip       🚧 正在进行中, 且有可能出现不稳定运行的提交
config    🔧 修改配置文件
refactot  🔨 重构(既不增加新功能, 也不修改bug的代码改动)
merge     🔀 合并分支
```

## 📂 目录结构

```
    ├── .vscode
    │   └──setting.json                 # 先于vscode全局的settings.json配置
    ├── doc                             # 开发文档记录
    ├── webpack                         # 打包编译
    │   └──config                       # webpack配置
    │       ├── webpack.common.js       # 基础配置
    │       ├── webpack.dev.js          # 开发环境配置
    │       └──webpack.prod.js          # 生产环境配置
    ├── pubilc
    │   ├──favicon.ico                  # HTML图标
    │   └──index.html                   # HTML入口模板
    ├── src
    |   ├── api                         # 接口配置
    |   ├── assets                      # 静态资源
    │   ├── components                  # 项目通用通用组件
    │   ├── http                        # 请求统一封装
    │   ├── httpinterface               # ts类型定义
    │   ├── constData                   # 系统内的常量列表
    │   ├── router                      # 统一路由入口
    │   ├── store                       # 数据共享
    │   ├── styles                      # 全局样式
    │   ├── utils                       # 工具库
    │   ├── view                        # 页面
    │   ├── App.tsx                     # 主界面
    │   └──index.tsx                    # 入口文件
    ├── .babelrc.js                     # babel配置
    ├── .editorconfig                   # 跨编辑器维护一致编码风格
    ├── .env.json                       # 环境变量配置
    ├── .eslintignore                   # ESLint忽略检测文件
    ├── .eslintrc.js                    # ESLint配置
    ├── .gitignore                      # git提交忽略文件
    ├── .npmrc
    ├── .prettierignore                 # prettierc忽略文件
    ├── .prettierrc                     # prettierc配置
    ├── .stylelintrc.js                 # 代码风格配置
    ├── LICENSE                         # 开源协议
    ├── package-lock.json               # npm安装包锁定管理
    ├── package.json                    # 依赖包管理
    ├── README.md                       # 项目说明
    ├── tsconfig.json                   # ts配置文件
    └── yarn.lock                       # yarn安装包锁定管理

```

## 🚀 陆续新增内容：

-   ① 样式 ✅ 2023/2/6 日提交 [config: 🔧  新增样式文件(css/less/sass/postCss)处理](https://github.com/guokaigdg/react-enterprise-template/commit/11fb415bac609dfa7474a1ee2db93ccb4a350a51)
-   ② 代码规范 ✅ 2023/2/7 日提交 [config: 🔧  新增 Prettier/ESlint/StyleLint/EditorConfig 代码规范](https://github.com/guokaigdg/react-enterprise-template/commit/87dd1ca333f81203dd245a6eb40479a0745f096f)
-   ③ 路由 ✅ 2023/2/8 日提交 [config: 🔧 新增路由管理 react-router-dom v6](https://github.com/guokaigdg/react-enterprise-template/commit/239446d0709eb52bad2b48af4983eef91c49f60d)
-   ④ 网络请求 ✅ 2023/2/21 日提交
-   ⑤ 数据共享 ✅ [feature: ✨  新增状态管理 Mobx v6](https://github.com/guokaigdg/react-enterprise-template/commit/992e1884943d4f8bda836f48c60df473418397d7)
