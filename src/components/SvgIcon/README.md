## SvgIcon (Svg 图标)

### 说明

-   svg-sprite-loader 制作 svg-symbol，
-   直接使用 svg-use。
-   使用 svgo-loader 优化 svg。
-   使 Icon 组件化，使用 require.context 一次引入所有文件。

### API

| 属性     | 类型   | 默认值 | 说明                  |
| -------- | ------ | ------ | --------------------- |
| svgName  | string | 无     | svg 名字 (svg 文件名) |
| svgClass | string | 无     | 样式类名              |
| color    | string | 无     | 填充颜色              |
