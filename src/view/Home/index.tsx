import React from 'react';
import {useNavigate, Link, Outlet} from 'react-router-dom';
import {useStores} from '@/store';
import './index.less';

function Home() {
    const {globalStore, aboutStore} = useStores();
    const {addCount, setName} = globalStore;
    const {aboutAddCount} = aboutStore;
    const navigate = useNavigate();

    const handleClickLink = () => {
        navigate('/home/one'); // 跳转路由
    };
    const handleClickAddCount = () => {
        addCount();
        aboutAddCount();
    };
    const handleClickSetName = () => {
        setName(`Hello${Math.random() * 10}`);
    };

    return (
        <div className='home-root'>
            <div className='home-tab'>
                <Link to='/home/one'>HomeOne</Link>
                <Link to='/home/two'>HomeTwo</Link>
                <div className='btn' onClick={handleClickLink}>
                    使用navigate方式跳转HomeOne navigate('/home/one')
                </div>
                <div className='btn' onClick={handleClickAddCount}>
                    Mobx数据更新-addCount
                </div>
                <div className='btn' onClick={handleClickSetName}>
                    Mobx数据更新-setName
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Home;
