import {makeAutoObservable} from 'mobx';

class Global {
    constructor() {
        makeAutoObservable(this);
    }
    count = 0;
    name = 'react';
    addCount = () => {
        this.count++;
    };
    setName = (data: string) => {
        this.name = data;
    };
}

const globalStore = new Global();
export {globalStore};
