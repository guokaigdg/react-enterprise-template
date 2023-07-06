/*
 * @file: home-order页面接口列表
 *
 */

import request from '../request';
import {orderData} from './types/home-order';

/**
 * @function fetchPostOrder
 * @description  查询订单请求
 */

export function fetchPostOrder(data: orderData) {
    const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const TARGET_API_URL = 'http://api.iatkb.com/order/check';
    return request({
        url: `${CORS_PROXY_URL}${TARGET_API_URL}`,
        method: 'post',
        data
    });
}
