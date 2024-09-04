// css-loader 写法更新 https://github.com/webpack-contrib/css-loader/releases/tag/v7.0.0
declare module '*.less' {
    const classes: {[key: string]: string};
    export = classes;
}
declare module '*.module.less' {
    const classes: {[key: string]: string};
    export = classes;
}
