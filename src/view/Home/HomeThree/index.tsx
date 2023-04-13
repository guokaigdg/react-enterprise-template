import React from 'react';
import ObserverHoc from './components/ObserverComponents';
import ObserverComponents from './components/ObserverHoc';

import './index.less';

const HomeThree = () => {
    return (
        <div className='home-three-root'>
            <ObserverHoc />
            <ObserverComponents />
        </div>
    );
};

export default HomeThree;
