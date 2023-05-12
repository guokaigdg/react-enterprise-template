import React from 'react';
import {observer} from 'mobx-react-lite';
// import {useStores} from '@/store';
// import SvgIcon from '@/components/SvgIcon';
import {GithubLogo} from '@phosphor-icons/react';
import './index.less';

const About = () => {
    // const {globalStore} = useStores();
    // const {count, name} = globalStore;
    return (
        <div className='about-root'>
            <a href='https://github.com/guokaigdg/react-enterprise-template'>
                <GithubLogo size={68} color='#f9f4da' />
            </a>
            <p>Hello About</p>
            {/* <SvgIcon svgName='apple' svgClass='icon-apple' /> */}
            {/* <p>{name}</p> */}
            {/* <p>{count}</p> */}
        </div>
    );
};

export default observer(About);
