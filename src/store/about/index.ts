import {makeAutoObservable} from 'mobx';
import {globalStore} from '../global';

class About {
    constructor() {
        makeAutoObservable(this);
    }
    count = 0;
    aboutAddCount = () => {
        const {count: globalCount} = globalStore;
        this.count += globalCount;
    };
}

const aboutStore = new About();
export {aboutStore};
