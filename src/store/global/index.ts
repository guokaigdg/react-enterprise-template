import {makeAutoObservable, runInAction} from 'mobx';
import {fetchPokemon} from '@/api';
import {pokemonOptions} from '@/interface/http';

class Global {
    constructor() {
        makeAutoObservable(this);
    }
    count = 0;
    name = 'react';
    data: any = [];
    loading = true;

    addCount = () => {
        this.count++;
    };
    setName = (data: string) => {
        this.name = data;
    };

    getFetchGetTest = async (params: pokemonOptions) => {
        try {
            const result: any = await fetchPokemon(params);
            const {results} = result;
            runInAction(() => {
                this.data = results;
                this.loading = false;
            });
        } catch (err) {
            console.log(err);
            this.loading = false;
        }
    };
}

const globalStore = new Global();
export {globalStore};
