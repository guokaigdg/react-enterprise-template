import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStores} from '@/store';
import './index.less';

const About = () => {
    const {globalStore} = useStores();
    const {count, name} = globalStore;
    return (
        <div className='about-root'>
            <p>Hello About</p>
            <p>{name}</p>
            <p>{count}</p>
        </div>
    );
};

export default observer(About);
