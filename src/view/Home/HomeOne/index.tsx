import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStores} from '@/store';
import SvgIcon from '@/components/SvgIcon';
import './index.less';

const HomeOne = () => {
    const {globalStore, aboutStore} = useStores();
    const {count, name} = globalStore;
    const {count: aboutCount} = aboutStore;

    return (
        <div className='home-one-root'>
            <SvgIcon svgName='my' color='pink' svgClass='icon-my' />
            <SvgIcon svgName='loop' color='#1db02e' />
            <SvgIcon svgName='loading' color='#1db02e' />
            HomeOne
            <p>{name}</p>
            <p> globalStore: {count}</p>
            <p> aboutStore: {aboutCount}</p>
        </div>
    );
};

export default observer(HomeOne);
