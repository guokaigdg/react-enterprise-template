import React from 'react';
import {observer} from 'mobx-react-lite';
import imgPng from '@/assets/images/web.png';
import SvgIcon from '@/components/SvgIcon';
import './index.less';

const HomeIcon = () => {
    return (
        <div className='home-icon-root'>
            <SvgIcon svgName='apple' svgClass='icon-top' />
            <img className='about-img' src={imgPng} alt='' />
            <SvgIcon svgName='my' color='pink' svgClass='icon-my' />
            <SvgIcon svgName='loop' color='#1db02e' />
            <SvgIcon svgName='loading' color='#1db02e' />
        </div>
    );
};

export default observer(HomeIcon);
