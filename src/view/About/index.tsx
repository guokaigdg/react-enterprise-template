import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStores} from '@/store';
import SvgIcon from '@/components/SvgIcon';
import imgPng from '@/assets/images/web.png';
import './index.less';

const About = () => {
    const {globalStore} = useStores();
    const {count, name} = globalStore;
    return (
        <div className='about-root'>
            <img className='about-img' src={imgPng} alt='' />
            <SvgIcon svgName='apple' svgClass='icon-apple' />
            <p>Hello About</p>
            <p>{name}</p>
            <p>{count}</p>
        </div>
    );
};

export default observer(About);
