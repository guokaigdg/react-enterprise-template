import React, {useState} from 'react';
import {useNavigate, Outlet, useLocation} from 'react-router-dom';
import {Button} from '@/components';

import './index.less';

interface LinkItem {
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
        {name: '🧙‍♀️ HomeOne', link: '/home/one'},
        {name: '🚚 HomeTwo', link: '/home/two'},
        {name: '🏂 HomeThree', link: '/home/three'},
        {name: '🎮 HomeFour', link: '/home/four'},
        {name: '🦁 Mobx数据更新', link: '/home/mobx'},
        {name: '📱 icon', link: '/home/icon'}
    ];

    const handleClickLink = (link: string) => {
        setActiveLink(link);
        navigate(link);
    };

    return (
        <div className='home-root'>
            <div className='home-tab'>
                {MenuLink.map((item: LinkItem) => (
                    <div key={item.name} className='btn-wrap'>
                        <Button
                            type='text'
                            className='text-btn'
                            active={activeLink === item.link}
                            onClick={() => handleClickLink(item.link)}
                        >
                            {item.name}
                        </Button>
                    </div>
                ))}
            </div>
            <Outlet />
        </div>
    );
}

export default Home;
