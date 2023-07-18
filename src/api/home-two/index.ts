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
