export interface GetRequestPokemonDataType {
    offset?: number;
    limit: number;
}

export interface GetPokemonDataType {
    name: string;
    url: string;
}

// 接口返回统一格式数据
export type GetResponsePokemonData = ApiResponseData<{
    results: GetPokemonDataType[];
    count: number;
    next: string;
    previous: number | null;
}>;
