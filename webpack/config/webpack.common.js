const HtmlWebpackPlugin = require('html-webpack-plugin'); // 简化 HTML 文件创建以服务捆绑包的插件, 将js文件自动引进 html 文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css文件, 这个插件将CSS取到单独的文件中。它为每个包含CSS的JS文件创建一个CSS文件。它支持按需加载 CSS 和 SourceMaps。
const WebpackBar = require('webpackbar'); // 优雅的 Webpack 进度条和分析器
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); // 启动本地服务/打包错误提示
const CopyPlugin = require('copy-webpack-plugin'); // 将已存在的单个文件或整个目录复制到生成目录
const webpack = require('webpack');
const paths = require('../paths');
const {isDevelopment} = require('../env');
const {imageInlineSizeLimit, imageBase64Path, shouldBase64FromFileEnd} = require('../conf');

const cssLoaders = (importLoaders) => [
    // 执行顺序从后到前 less-loader -> postcss-loader -> css-loader -> style-loader/MiniCssExtractPlugin.loader
    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, // style-loader的作用就是将结果以style标签的方式插入DOM树中。style-loader将css-loader打包好的 CSS 代码以<style>标签的形式插入到 HTML 文件中
    {
        loader: 'css-loader', // 主要是解析css文件中的@import和url语句，处理css-modules，并将结果作为一个js模块返回
        options: {
            modules: false,
            sourceMap: isDevelopment, // 开发环境开启
            importLoaders // 执行顺序: 需要先被 less-loader postcss-loader (所以这里设置为 2)
        }
    },
    {
        loader: 'postcss-loader', // 进一步处理css文件，比如添加浏览器前缀，压缩 CSS 等
        options: {
            postcssOptions: {
                plugins: [
                    require('postcss-flexbugs-fixes'), // 用于修复一些和 flex 布局相关的 bug
                    [
                        'postcss-preset-env', // 最新的 CSS 语法转换为目标环境的浏览器能够理解的 CSS 语法，目的是使开发者不用考虑浏览器兼容问题。
                        {
                            // 使用 autoprefixer 来自动添加浏览器头
                            autoprefixer: {
                                grid: true,
                                flexbox: 'no-2009'
                            },
                            stage: 3
                        }
                    ],
                    'postcss-normalize'
                ]
            }
        }
    }
];

const config = {
    entry: {
        app: paths.appIndex
    },
    cache: {
        // 缓存 cache.type 设置为 'filesystem' 会开放更多的可配置项.
        type: 'filesystem',
        // 收集在反序列化期间分配的未使用的内存，, 仅当 cache.type 设置为 'filesystem' 时生效。这需要将数据复制到更小的缓冲区中，并有性能成本。
        allowCollectingMemory: true,
        // 是一个针对构建的额外代码依赖的数组对象。webpack 将使用这些项和所有依赖项的哈希值来使文件系统缓存失效。
        buildDependencies: {
            config: [__filename]
        }
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
            '@': paths.appSrc,
            mock: paths.appMock,
            Components: paths.appSrcComponents,
            Utils: paths.appSrcUtils
        }
    },
    module: {
        rules: [
            {
                test: /\.(tsx?|js)$/,
                loader: 'babel-loader', // 使用缓存
                options: {cacheDirectory: true},
                exclude: [/node_modules/, /(.|_)min\.js$/]
            },
            {
                test: /\.css$/,
                use: cssLoaders(1)
            },
            {
                test: /\.less$/,
                use: [
                    ...cssLoaders(2),
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
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
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2?)$/,
                exclude: paths.appSvg, // 不处理 svg类型文件
                type: 'asset/resource'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: paths.appSvg,
                options: {
                    symbolId: 'icon-[name]' // symbolId和use使用的名称对应 <use xlinkHref={"#icon-" + svgName} />
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin(paths.appDefineVariable),
        new HtmlWebpackPlugin({
            template: paths.appHtml,
            cache: true,
            env: process.env.ENV || ''
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
                        ignore: ['**/index.html']
                    }
                }
            ]
        }),
        new WebpackBar({
            name: isDevelopment ? 'RUNNING' : 'BUNDLING',
            color: isDevelopment ? '#52c41a' : '#722ed1'
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configFile: paths.appTsConfig
            }
        }),
        new PreloadWebpackPlugin({
            rel: 'preload',
            include: ['home', 'home-two'] // chunks显示命名: 对应 @/router/index.tsx 中 webpackChunkName 名字
        }),
        new PreloadWebpackPlugin({
            // rel: 'preload',
            rel: 'prefetch',
            /**
             * 预加载的模块:
             * asyncChunks：异步模块对应生成的chunk文件；
             * allChunks：所有的chunk文件(vendor, async, and normal chunks)；
             * initial：entry项对应生成的chunk文件；
             * allAssets：所有chunk文件 + loaders生成的文件；
             * [文件name]：如果chunks是显示命名的，可以使用这种
             */
            // excludeHtmlNames: ['example.html'],
            // include: 'asyncChunks' // chunks显示命名
            include: ['dashboard', 'about'] // chunks显示命名: 对应 @/router/index.tsx 中 webpackChunkName 名字
        })
    ]
};

module.exports = config;
