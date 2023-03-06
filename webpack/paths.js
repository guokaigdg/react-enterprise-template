/* eslint-disable guard-for-in */
const path = require('path');
const fs = require('fs');

// Get the working directory of the file executed by node
const appDirectory = fs.realpathSync(process.cwd());

/**
 * Resolve absolute path from relative path
 * @param {string} relativePath relative path
 */
function resolveApp(relativePath) {
    return path.resolve(appDirectory, relativePath);
}

// Default module extension
const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx'];

/**
 * Resolve module path
 * @param {function} resolveFn resolve function
 * @param {string} filePath file path
 */
function resolveModule(resolveFn, filePath) {
    // Check if the file exists
    const extension = moduleFileExtensions.find((ex) => fs.existsSync(resolveFn(`${filePath}.${ex}`)));

    if (extension) {
        return resolveFn(`${filePath}.${extension}`);
    }
    return resolveFn(`${filePath}.ts`); // default is .ts
}

function resolveDefineVariable() {
    const config = {};
    for (const key in process.env) {
        if (key.startsWith('USER_')) {
            config[`process.env.${key}`] = JSON.stringify(process.env[`${key}`]);
        }
    }
    return config;
}

module.exports = {
    appDefineVariable: resolveDefineVariable(), // 到页面中可以用到的变量
    appBuild: resolveApp('build'), // 打包构建目录
    appPublic: resolveApp('public'),
    appIndex: resolveModule(resolveApp, 'src/index'),
    appHtml: resolveApp('public/index.html'),
    appNodeModules: resolveApp('node_modules'), // node_modules path
    appMock: resolveApp('mock'),
    appSrc: resolveApp('src'),
    appSrcComponents: resolveApp('src/components'),
    appSrcUtils: resolveApp('src/utils'),
    appProxySetup: resolveModule(resolveApp, 'webpack/setProxy'),
    appPackageJson: resolveApp('package.json'),
    appTsConfig: resolveApp('tsconfig.json'),
    appSvg: resolveApp('src/assets/icons'),
    moduleFileExtensions
};
