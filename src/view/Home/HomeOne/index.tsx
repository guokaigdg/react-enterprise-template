import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStores} from '@/store';
import './index.less';

const HomeOne = () => {
    const {globalStore, aboutStore} = useStores();
    const {count, name} = globalStore;
    const {count: aboutCount} = aboutStore;

    return (
        <div className='home-one-root'>
            HomeOne
            <p>{name}</p>
            <p> globalStore: {count}</p>
            <p> aboutStore: {aboutCount}</p>
        </div>
    );
};

export default observer(HomeOne);
