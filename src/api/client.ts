import axios from 'axios';
import axiosRetry from 'axios-retry';
import {InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
const whiteRetry = new Set(['ECONNABORTED', undefined, 0]);
// import {baseURL} from '@/utils/variable';

// 创建 axios 请求实例
const serviceAxios = axios.create({
    baseURL: '', // 接口请求地址
    timeout: 15 * 1000, // 请求超时设置
    withCredentials: false, // 跨域请求是否需要携带 cookie
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    validateStatus() {
        // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
        return true;
    }
});

axiosRetry(serviceAxios, {
    retries: 2, // 重复请求次数
    shouldResetTimeout: true, //  重置超时时间
    retryDelay: (retryCount) => {
        return retryCount * 10000; // 重复请求延迟
    },
    retryCondition: (err) => {
        // true为打开自动发送请求，false为关闭自动发送请求
        const {code, message} = err;
        return whiteRetry.has(<string>code) || message.includes('timeout');
    }
});

// 请求拦截器
serviceAxios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (err: AxiosError) => {
        return Promise.reject(err);
    }
);

// 响应拦截器
serviceAxios.interceptors.response.use(
    (res: AxiosResponse) => {
        return res;
    },
    (err: AxiosError) => {
        return Promise.reject(err);
    }
);

// 统一发起请求的函数
async function request<T>(options: AxiosRequestConfig) {
    try {
        const response = await serviceAxios.request<T>(options);
        const {status, data} = response;
        // 处理 HTTP 状态码
        if (status < 200 || status >= 500) {
            return Promise.reject();
        }
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
    }
}

export default request;
