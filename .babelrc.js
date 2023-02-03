module.exports = {
    // presets执行顺序: 从后往前。
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage', // false 只做了语法转换, entry引入了所有的es扩展包(不用的也会打包进来), usage自动检测代码中用到的功能自动引入模块
                corejs: 3,
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    // plugins执行顺序: 从前往后。
    plugins: [
        // ['babel-plugin-react-scoped-css'],
        [
            '@babel/plugin-transform-runtime',
            {
                absoluteRuntime: false,
                corejs: 3, // corejs: false 只对ES语法进行了转换, corejs：2 沙盒环境，不污染全局空间, 无法实例方法, corejs: 3 沙盒环境，不污染全局空间, 可以实例方法
                helpers: true,
                regenerator: true,
                useESModules: false,
            },
        ],
        // ['import', {libraryName: 'antd-mobile', libraryDirectory: 'es/components', style: false}],
    ],
    // "comments": true,
};
