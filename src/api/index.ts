/*
 * @file: 所有的接口列表
 * 宝可梦api https://pokeapi.co/about
 */

import client from './client';
import {pokemonOptions} from './type';

/**
 * @function get
 * @description 请求测试
 */

export function fetchPokemon(data: pokemonOptions) {
    return client({
        url: ' https://pokeapi.co/api/v2/pokemon',
        params: data
    });
}

/**
 * @function fetchPostOrder
 * @description  查询订单请求
 */

export function fetchPostTest(data: any) {
    return client({
        url: '/xxx/list',
        method: 'post',
        data
    });
}
