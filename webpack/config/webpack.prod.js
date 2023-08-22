const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css文件, 这个插件将CSS取到单独的文件中。它为每个包含CSS的JS文件创建一个CSS文件。它支持按需加载 CSS 和 SourceMaps。
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // 这个插件优化和压缩css
const TerserPlugin = require('terser-webpack-plugin'); // 这个插件使用 terser 压缩 JavaScript
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer'); // 使用交互式可缩放树形地图可视化 webpack 输出文件的大小
const CompressionPlugin = require('compression-webpack-plugin'); // 静态资源压缩, 使用Content-Encoding为它们提供服务
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const paths = require('../paths');
const {shouldOpenAnalyzer, ANALYZER_HOST, ANALYZER_PORT} = require('../conf');

const prodConfig = {
    mode: 'production',
    target: 'browserslist',
    output: {
        path: paths.appBuild,
        filename: 'js/[name].[contenthash:8].js',
        assetModuleFilename: 'images/[name].[contenthash:8].[ext]',
        publicPath: process.env.PUBLIC_PATH,
        clean: true // 在生成文件之前清空 output 目录
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].chunk.css',
            ignoreOrder: true
        }),
        new CompressionPlugin({
            test: /\.js$|\.html$|.\css/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false // 不删除源文件
        })
    ],
    optimization: {
        // 允许你通过提供一个或多个定制过的 TerserPlugin 实例， 覆盖默认压缩工具(minimizer)
        minimizer: [
            new TerserPlugin({
                extractComments: false, // 删除注释
                terserOptions: {
                    compress: {pure_funcs: ['console.log', 'console.warn']}
                }
            }),
            new CssMinimizerPlugin()
        ],
        // 对于动态导入模块，请在 SplitChunksPlugin 页面中查看配置其行为的可用选项。
        splitChunks: {
            automaticNameDelimiter: '-', // 生成名称的分隔符
            chunks: 'all', // all-所有模块生效，async-抽取异步模块，initial:同步模块生效
            // minSize: 100000, //  todo, 后续还有性能问题再拆, 生成 chunk 的最小体积（以 bytes 为单位）。
            // maxSize: 244000, // todo, 后续还有性能问题再拆, 生成 chunk 的最大体积（以 bytes 为单位）。
            cacheGroups: {
                commons: {
                    // test: /[/\\]node_modules[/\\]/, // 只筛选从node_modules文件夹下引入的模块
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'commons',
                    chunks: 'all',
                    minSize: 0, // 分离前最小模块大小，默认为0，最小为30000
                    maxInitialRequests: 3, //最大初始化加载次数，一个入口文件可以并行加载的最大文件数量，默认3
                    priority: -10 // 优先级, 先vendors引用包, 再找本地包,  因为default 权重小于vendors
                },
                // 抽离自定义工具库
                utilCommon: {
                    name: 'util-common',
                    minSize: 0, // 将引用模块分离成新代码文件的最小体积
                    minChunks: 2, // 表示将引用模块如不同文件引用了多少次，才能分离生成新chunk
                    priority: -20 // 优先级
                }
            }
        }
    }
};

if (shouldOpenAnalyzer) {
    prodConfig.plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: ANALYZER_HOST,
            analyzerPort: ANALYZER_PORT
        })
    );
}

module.exports = merge(commonConfig, prodConfig);
