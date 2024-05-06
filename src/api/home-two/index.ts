/*
 * @file: home-two页面接口列表
 * 宝可梦api https://pokeapi.co/about
 */

import request from '../request';
import {GetRequestPokemonDataType, GetResponsePokemonData} from './types/home-two';

/**
 * @function get
 * @description 请求测试
 */

export function fetchPokemon(data: GetRequestPokemonDataType) {
    return request<GetResponsePokemonData>({
        url: ' https://pokeapi.co/api/v2/pokemon',
        params: data
    });
}

/**
 * @function getJsonTest
 * @description 请求测试 application/json
 * @description 使用说明 https://juejin.cn/post/7365414174217404466
 */

export function getJsonTest(params: GetRequestPokemonDataType) {
    return request({
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
        url: '/api/data/xxx',
        params
    });
}
