import React, {ReactNode, useState} from 'react';
import {useNavigate, Outlet, useLocation} from 'react-router';
import CX from 'classnames';
import {observer} from 'mobx-react-lite';
import {
    IconContext,
    GlobeHemisphereEast,
    HardDrives,
    IceCream,
    Keyboard,
    InstagramLogo,
    FileTsx,
    GithubLogo,
    GameController
} from '@phosphor-icons/react';
import {Button} from '@/components';

import './index.less';

interface LinkItem {
    icon: ReactNode;
    name: string;
    link: string;
}

function Home() {
    const navigate = useNavigate();
    const params = useLocation();
    const {pathname} = params;
    console.log('🚀 ~ file: index.tsx:7 ~ Tab ~ navigate:', pathname);

    const [activeLink, setActiveLink] = useState<string>(pathname);

    const MenuLink = [
        {name: 'HomeOne', icon: <GlobeHemisphereEast />, link: '/home/one'},
        {name: 'Pokemon', icon: <GameController />, link: '/home/two'},
        {name: 'HomeThree', icon: <FileTsx />, link: '/home/three'},
        {name: 'Mobx 数据更新', icon: <HardDrives />, link: '/home/mobx'},
        {name: 'Phosphor 图标库', icon: <InstagramLogo />, link: '/home/four'},
        {name: 'Svg 封装', icon: <IceCream />, link: '/home/icon'},
        {name: '订单查询', icon: <Keyboard />, link: '/home/order'}
    ];

    const handleClickLink = (link: string) => {
        setActiveLink(link);
        navigate(link);
    };

    const homeClasses = CX('home-root', {
        'home-root-no-bg': activeLink === '/home/order'
    });

    return (
        <div className={homeClasses}>
            <div className='home-tab'>
                <div className='github-icon'>
                    <a href='https://github.com/guokaigdg/react-enterprise-template'>
                        <GithubLogo size={52} color='#f9f4da' />
                    </a>
                </div>
                {MenuLink.map((item: LinkItem) => (
                    <div key={item.name} className='btn-wrap'>
                        <Button
                            type='text'
                            className='text-btn'
                            active={activeLink === item.link}
                            onClick={() => handleClickLink(item.link)}
                        >
                            <IconContext.Provider
                                value={{
                                    size: 24,
                                    weight: 'duotone',
                                    mirrored: false
                                }}
                            >
                                {item.icon}
                            </IconContext.Provider>
                            <span className='link-text'>{item.name}</span>
                        </Button>
                    </div>
                ))}
            </div>
            <Outlet />
        </div>
    );
}

export default observer(Home);
