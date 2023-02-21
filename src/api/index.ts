/*
 * @file: 所有的接口列表
 * 宝可梦api https://pokeapi.co/about
 */

import http from '../http';
import {pokemonOptions} from '@/interface/http';

/**
 * @function get
 * @description 请求测试
 */

export function fetchPokemon(data: pokemonOptions) {
    return http({
        url: ' https://pokeapi.co/api/v2/pokemon',
        params: data
    });
}
/**
 * @function post
 * @description 请求测试
 */

export function fetchPostTest(data: any) {
    return http({
        url: '/xxx/list',
        method: 'post',
        data
    });
}
