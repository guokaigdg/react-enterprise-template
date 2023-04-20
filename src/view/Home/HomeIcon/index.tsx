import React from 'react';
import {observer} from 'mobx-react-lite';
import SvgIcon from '@/components/SvgIcon';
import './index.less';

const HomeIcon = () => {
    return (
        <div className='home-icon-root'>
            <SvgIcon svgName='my' color='pink' svgClass='icon-my' />
            <SvgIcon svgName='loop' color='#1db02e' />
            <SvgIcon svgName='loading' color='#1db02e' />
        </div>
    );
};

export default observer(HomeIcon);
