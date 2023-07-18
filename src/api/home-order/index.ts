/*
 * @file: home-order页面接口列表
 */

import request from '../request';
import {GetRequestOrderDataType, GetResponseOrdereData} from './types/home-order';

/**
 * @function fetchPostOrder
 * @description  查询订单请求
 */

export function fetchPostOrder(data: GetRequestOrderDataType) {
    const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const TARGET_API_URL = 'http://api.iatkb.com/order/check';
    return request<GetResponseOrdereData>({
        url: `${CORS_PROXY_URL}${TARGET_API_URL}`,
        method: 'post',
        data
    });
}
