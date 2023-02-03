const HtmlWebpackPlugin = require('html-webpack-plugin');
// const PreloadWebpackPlugin = require('preload-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const paths = require('../paths');
const {isDevelopment, isProduction} = require('../env');
const {imageInlineSizeLimit, imageBase64Path, shouldBase64FromFileEnd} = require('../conf');

const cssLoaders = (importLoaders) => [
    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
        loader: 'css-loader',
        options: {
            // modules: true,
            sourceMap: isDevelopment,
            importLoaders,
        },
    },
    {
        // loader: 'scoped-css-loader',
    },
    {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: [
                    require('postcss-flexbugs-fixes'),
                    isProduction && [
                        'postcss-preset-env',
                        {
                            autoprefixer: {
                                grid: true,
                                flexbox: 'no-2009',
                            },
                            stage: 3,
                        },
                    ],
                ].filter(Boolean),
            },
        },
    },
];

const config = {
    entry: {
        app: paths.appIndex,
    },
    cache: {
        // 缓存,cache.type 设置为 'filesystem' 是会开放更多的可配置项。
        // 收集在反序列化期间分配的未使用的内存，, 仅当 cache.type 设置为 'filesystem' 时生效。这需要将数据复制到更小的缓冲区中，并有性能成本。
        type: 'filesystem',
        buildDependencies: {
            // 是一个针对构建的额外代码依赖的数组对象。webpack 将使用这些项和所有依赖项的哈希值来使文件系统缓存失效。
            config: [__filename],
        },
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
            '@': paths.appSrc,
            mock: paths.appMock,
            Components: paths.appSrcComponents,
            Utils: paths.appSrcUtils,
        },
    },
    module: {
        rules: [
            {
                test: /\.(tsx?|js)$/,
                loader: 'babel-loader', // 使用缓存
                options: {cacheDirectory: true},
                exclude: [/node_modules/, /(.|_)min\.js$/],
            },
            {
                test: /\.css$/,
                use: cssLoaders(1),
            },
            {
                test: /\.less$/,
                use: [
                    ...cssLoaders(2),
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: isDevelopment,
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    ...cssLoaders(2),
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment,
                            additionalData: '@import "@/styles/variables.scss";', // TODO:
                        },
                    },
                ],
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                type: 'asset',
                parser: {
                    // 当提供函数时，返回 true 值时告知 webpack 将模块作为一个 Base64 编码的字符串注入到包中，
                    // 否则模块文件会被生成到输出的目标目录中。将base64的资源都放在一个目录下
                    dataUrlCondition: (source, {filename}) => {
                        // 1. 如果是base64下的目录，将文件打包成base64
                        if (filename.includes(imageBase64Path)) {
                            return true;
                        }
                        // 2. 如果开启了文件尾部扫描，则形如 xxx.base64.xxx会以Base64 编码的字符串注入到包中
                        if (shouldBase64FromFileEnd && filename.includes('.base64')) {
                            return true;
                        }
                        // 3. 对于小于imageInlineSizeLimit的文件，会以Base64 编码的字符串注入到包中
                        if (source.length <= imageInlineSizeLimit) {
                            return true;
                        }
                        return false;
                    },
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2?)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin(paths.appDefineVariable),
        new HtmlWebpackPlugin({
            template: paths.appHtml,
            cache: true,
            env: process.env.ENV || '',
        }),
        new CopyPlugin({
            patterns: [
                {
                    context: paths.appPublic,
                    from: '*',
                    to: paths.appBuild,
                    toType: 'dir',
                    globOptions: {
                        dot: true,
                        gitignore: true,
                        ignore: ['**/index.html'],
                    },
                },
            ],
        }),
        new WebpackBar({
            name: isDevelopment ? 'RUNNING' : 'BUNDLING',
            color: isDevelopment ? '#52c41a' : '#722ed1',
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configFile: paths.appTsConfig,
            },
        }),
        // new PreloadWebpackPlugin({
        //     rel: 'prefetch', // 预加载
        //     include: ['book'],
        // }),
    ],
};

module.exports = config;
