import {makeAutoObservable, runInAction} from 'mobx';
import {fetchPokemon} from '@/api/home-two';
import {fetchPostOrder} from '@/api/home-order';
import {GetRequestPokemonDataType, GetPokemonDataType, GetResponsePokemonData} from '@/api/home-two/types/home-two';
import {GetRequestOrderDataType, GetOrderDataType, GetResponseOrdereData} from '@/api/home-order/types/home-order';

class Global {
    constructor() {
        // makeAutoObservable: 自动将所有属性和方法转换为可观察对象。
        makeAutoObservable(this);
    }
    count = 0;
    name = 'react';
    data: GetPokemonDataType[] = [];
    orderData: GetOrderDataType[] = [];
    loading = true;

    addCount = () => {
        this.count++;
    };
    setName = (data: string) => {
        this.name = data;
    };

    getFetchGetTest = async (params: GetRequestPokemonDataType) => {
        try {
            const res: GetResponsePokemonData = await fetchPokemon(params);
            const {results} = res.data;
            // 在 MobX 中，不管是同步还是异步操作，都可以放到 action 中，
            // 只是异步操作在修改属性时，需要将赋值操作放到 runInAction 中。
            runInAction(() => {
                this.data = results;
                this.loading = false;
            });
        } catch (err) {
            console.log(err);
            runInAction(() => {
                this.loading = false;
            });
        }
    };
    getPostOrder = async (params: GetRequestOrderDataType) => {
        this.loading = true;
        try {
            const res: GetResponseOrdereData = await fetchPostOrder(params);
            // const result = {
            //     orders: [
            //         {
            //             id: 1,
            //             qq: '2333333',
            //             ver: [
            //                 // '\u9633\u6781\u94f6 \u5927\u95e8\u7259',
            //                 // '\n\u9ea6\u65cb\u98ce \u5c0f\u95e8\u7259',
            //                 // '\n\u9ea6\u65cb\u98ce \u5c0f\u95e8\u7259',
            //                 '阳极银',
            //                 '麦旋风',
            //                 '陨石灰',
            //                 '葵花黄',
            //                 '亚麻',
            //                 '闪白',
            //                 '闪红',
            //                 '浅蓝',
            //                 '浅粉',
            //                 '浅绿'
            //             ],
            //             phone: '111****233'
            //         }
            //     ],
            //     result: 'OK'
            // };
            const {orders, result} = res.data;
            if (result === 'Fail') {
                console.log('请求结果出错');
            }
            runInAction(() => {
                this.orderData = orders;
                this.loading = false;
            });
        } catch (err) {
            console.log(err);
            runInAction(() => {
                this.loading = false;
            });
        }
    };
}

const globalStore = new Global();
export {globalStore};
