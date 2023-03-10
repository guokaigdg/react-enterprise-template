<h1 align="center">React template</h1>
<br/>

<div align="center">
    <img src='./images/home.png' style='width: 75%'/>
</div>
<br>
<p align="center">
    <a href="../README.md">็ฎไฝไธญๆ</a> |  English
</p>

## ๐จ๐ปโ๐ป Project Description

-   React template, a more rich template than CRA.

-   Development configuration documentation [React18 + webpack5 + TypeScript4 + react-router-dom](https://juejin.cn/post/7197790401495121977)

## ๐ฑ Features

-   ๐ฆ Out of the box, no configuration required.
-   ๐ Comprehensive comment explanations, low learning cost.
-   ๐ Fast startup and compilation.
-   ๐ฑ Highly customizable, easy to expand.

## ๐ Technology Stack

[![react](https://img.shields.io/badge/react-18.2.0-brightgreen.svg)](https://github.com/facebook/react/) [![TypeScript](https://img.shields.io/badge/TypeScript-4.9.4-brightgreen.svg)](https://github.com/microsoft/TypeScript)[![webpack](https://img.shields.io/badge/webpack-5.75.0-brightgreen.svg)](https://github.com/facebook/react/) [![axios](https://img.shields.io/badge/axios-0.18.0-brightgreen.svg)](https://github.com/axios/axios) [![mobx](https://img.shields.io/badge/mobx-6.8.0-brightgreen.svg)](https://github.com/mobx) [![react-router-dom](https://img.shields.io/badge/react--router--dom-6.8.1-brightgreen.svg)](https://github.com/remix-run/react-router) [![MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)]()

-   React v18
-   react-dom v18
-   React Hook
-   TypeScript v4
-   webpack v5
-   axios v1
-   mobx v6
-   mobx-react-lite v3
-   react-router-dom v6

## ๐ Upcoming Features:

-   โ  Styles โ Submitted on 2023/2/6 [config:ย ๐ง Add style file (css/less/sass/postCss) processing](https://github.com/guokaigdg/react-enterprise-template/commit/11fb415bac609dfa7474a1ee2db93ccb4a350a51)
-   โก Code specification โ Submitted on 2023/2/7 [config:ย ๐งย  Add Prettier/ESlint/StyleLint/EditorConfig code specification](https://github.com/guokaigdg/react-enterprise-template/commit/87dd1ca333f81203dd245a6eb40479a0745f096f)
-   โข Routing โ Submitted on 2023/2/8 [config:ย ๐ง Add routing management react-router-dom v6](https://github.com/guokaigdg/react-enterprise-template/commit/239446d0709eb52bad2b48af4983eef91c49f60d)
-   โฃ Network request โ Submitted on 2023/2/21 [feat:ย โจย  Add network request Axios v1](https://github.com/guokaigdg/react-enterprise-template/commit/27cd67f641d5ecf53b89770195f75bd32bccce46)
-   โค Data sharing โ Submitted on 2023/2/13 [feature:ย โจย  Add state management MobX v6](https://github.com/guokaigdg/react-enterprise-template/commit/992e1884943d4f8bda836f48c60df473418397d7)

## โ๏ธ Install project dependencies

```
npm
$ npm install

yarn
$ yarn
```

## ๐ Run the project

```
npm
$ npm run start

yarn
$ yarn dev
```

## ๐ฆ Packaging and compilation

```
npm run build:qa  // Testing environment
npm run build:prod  // Production environment
```

## ๐ก Branch description

| Branch | description        |
| ------ | ------------------ |
| main   | Main branch        |
| dev    | Development branch |

## Code submission specification

```
git <type>: <subject>
git commit -m "feat: Project initialization"
```

### type ๅ่:

```
fix       ๐ Bug fix
feature   โจ Introduce new features
docs      ๐ Document writing changes
prune     ๐ฅ Remove code or files
ui        ๐ Update UI and style files
perf      โก Performance-related optimizations
rocket    ๐ Deployment function
style     ๐จ Style modification
init      ๐ Initial submission
release   ๐ Release version
wip       ๐ง Work in progress, and unstable submissions may occur
config    ๐ง Modify configuration file
refactot  ๐จ Refactoring (code changes that neither add new features nor fix bugs)
merge     ๐ Merge branches
```

## ๐ Directory Structure

```
    โโโ .vscode
    โ   โโโsetting.json                 # Configuration for vscode that takes precedence over global settings.json
    โโโ doc                             # Development documentation
    โโโ webpack                         # Packaging and compilation
    โ   โโโconfig                       # Webpack configuration
    โ       โโโ webpack.common.js       # Base configuration
    โ       โโโ webpack.dev.js          # Development environment configuration
    โ       โโโwebpack.prod.js          # Production environment configuration
    โโโ pubilc
    โ   โโโfavicon.ico                  # HTML icon
    โ   โโโindex.html                   # HTML entry template
    โโโ src
    |   โโโ api                         # Interface configuration
    |   โโโ assets                      # Static resources
    โ   โโโ components                  # Common components of the project
    โ   โโโ http                        # Unified encapsulation of requests
    โ   โโโ httpinterface               # TypeScript type definition
    โ   โโโ constData                   # Constant list within the system
    โ   โโโ router                      # Unified routing entry
    โ   โโโ store                       # Data sharing
    โ   โโโ styles                      # Global style
    โ   โโโ utils                       # Utility library
    โ   โโโ view                        # Pages
    โ   โโโ App.tsx                     # Main interface
    โ   โโโindex.tsx                    # Entry file
    โโโ .babelrc.js                     # Babel configuration
    โโโ .editorconfig                   # Maintaining consistent coding style across editors
    โโโ .env.json                       # Environment variable configuration
    โโโ .eslintignore                   # Files ignored by ESLint
    โโโ .eslintrc.js                    # ESLint configuration
    โโโ .gitignore                      # Files ignored by git submission
    โโโ .npmrc
    โโโ .prettierignore                 # Files ignored by prettierc
    โโโ .prettierrc                     # Prettierc configuration
    โโโ .stylelintrc.js                 # Code style configuration
    โโโ LICENSE                         # Open source license
    โโโ package-lock.json               # npm package lock management
    โโโ package.json                    # Dependency management
    โโโ README.md                       # Project description
    โโโ tsconfig.json                   # TypeScript configuration file
    โโโ yarn.lock                       # Yarn package lock management


```

## ๐ค How to Contribute

-   ๐ฌ If you have any questions, please open an issue or leave a message
-   All contributors are welcome. Before becoming a contributor, please read the contribution guidelines. If you have already done so, make Pull requests and become a contributor.

## Open Source License

The code and documentation of this project are released under the MIT License open source license.
