export interface GetRequestOrderDataType {
    item: string;
    order: string;
    qq: string;
}

export interface GetOrderDataType {
    id: number;
    qq: string;
    phone: string;
    [x: string]: any;
}

// 接口返回统一格式数据
export type GetResponseOrdereData = ApiResponseData<{
    result: string;
    orders: GetOrderDataType[];
}>;
