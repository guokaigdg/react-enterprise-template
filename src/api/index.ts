/*
 * @file: 所有的接口列表
 * 宝可梦api https://pokeapi.co/about
 */

import http from '../http';
import {pokemonOptions, orderData} from '@/interface/http';

/**
 * @function get
 * @description 请求测试
 */

export function fetchPokemon(data: pokemonOptions) {
    return http({
        url: 'https://pokeapi.co/api/v2/pokemon',
        params: data
    });
}

/**
 * @function fetchPostOrder
 * @description  查询订单请求
 */

export function fetchPostOrder(data: orderData) {
    const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const TARGET_API_URL = 'http://api.iatkb.com/order/check';
    return http({
        url: `${CORS_PROXY_URL}${TARGET_API_URL}`,
        method: 'post',
        data
    });
}
