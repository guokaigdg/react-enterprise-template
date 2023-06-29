const Webpack = require('webpack');
// const ErrorOverlayPlugin = require('error-overlay-webpack-plugin'); // 这个插件将在你的应用程序中定位显示出错信息
const {merge} = require('webpack-merge'); // Webpack合并函数
const commonConfig = require('./webpack.common.js');
const paths = require('../paths');

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    target: 'web',
    output: {
        path: paths.appBuild,
        publicPath: '/',
        filename: 'js/[name].js'
    },
    devServer: {
        host: '0.0.0.0',
        compress: true, // 是否启用 gzip 压缩
        stats: 'errors-only', // 终端仅打印 error
        clientLogLevel: 'silent', // 日志等级
        open: true, // 打开默认浏览器
        hot: true, // 热更新
        noInfo: true,
        proxy: {
            ...require(paths.appProxySetup)
        },
        historyApiFallback: true // 单页面配置appProxySetup
    },
    plugins: [new Webpack.HotModuleReplacementPlugin()],
    optimization: {
        minimize: false, //关闭压缩
        minimizer: [],
        splitChunks: {
            chunks: 'all',
            minSize: 0
        }
    }
};

module.exports = merge(commonConfig, devConfig);
