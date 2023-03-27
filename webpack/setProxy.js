const Cookie = '';
const proxySettings = {
    '/api': {
        target: 'http://172.24.202.122:8080', // 联调地址
        // target: 'https://yapi.xxx-int.com/mock/13187', // mock 地址
        // target: 'http://dev.xxx.xxx.com:8133',  // 测试(QA)环境地址
        // target: 'http://dev.xxx.xxx.com',  // 线上(prod)环境地址
        changeOrigin: true,
        headers: {
            Cookie
        }
    },
    '/msg': {
        target: 'http://xxx.dev.xxx.com:8133',
        changeOrigin: true,
        headers: {
            Cookie
        }
    }
};

module.exports = proxySettings;
