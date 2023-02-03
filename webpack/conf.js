const path = require('path');

const PROJECT_PATH = path.resolve(__dirname, '../');
const PROJECT_NAME = path.parse(PROJECT_PATH).name;

// Dev server host and port
const SERVER_HOST = '0.0.0.0';
const SERVER_PORT = 9000;

// Whether to enable bundle package analysis
const shouldOpenAnalyzer = false;
const ANALYZER_HOST = 'localhost';
const ANALYZER_PORT = '8888';

// Resource size limit
const imageInlineSizeLimit = 4 * 1024;

// imageBase64Path 路径下的文件都会被打包为base64
const imageBase64Path = 'assets/base64_images';

// 是否从文件的末尾为.base64判别是否开启base64压缩，无论大小
const shouldBase64FromFileEnd = true;

// divider(分割线)
const divider = '-------------------------------------';

module.exports = {
    PROJECT_PATH,
    PROJECT_NAME,
    SERVER_HOST,
    SERVER_PORT,
    shouldOpenAnalyzer,
    ANALYZER_HOST,
    ANALYZER_PORT,
    imageInlineSizeLimit,
    imageBase64Path,
    shouldBase64FromFileEnd,
    divider,
};
