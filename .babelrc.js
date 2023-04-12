module.exports = {
    // 预设集合 (presets) 执行顺序: 从后往前。
    presets: [
        [
            '@babel/preset-env', // 根据 browserslist 中浏览器设定，进行 polyfill
            {
                /**
                 * useBuiltIns功能说明: '@babel/preset-env'如何进行 polyfills
                 * useBuiltIns配置说明如下:
                 * false: 只做了语法转换
                 * entry: 引入了所有的es扩展包 (不用的也会打包进来)
                 * usage: 自动检测代码中用到的功能自动引入模块
                 */
                useBuiltIns: 'usage',
                corejs: 3
            }
        ],
        '@babel/preset-react',
        '@babel/preset-typescript'
    ],
    // 插件集合 (plugins) 执行顺序: 从前往后。
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            {
                absoluteRuntime: false,
                /**
                 * corejs配置说明如下:
                 * corejs: false 只对ES语法进行了转换
                 * corejs：2 沙盒环境，不污染全局空间, 无法实例方法
                 * corejs: 3 沙盒环境，不污染全局空间, 可以实例方法
                 */
                corejs: 3,
                helpers: true,
                regenerator: true,
                useESModules: false
            }
        ]
    ]
};
