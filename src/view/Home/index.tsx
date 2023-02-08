import React from 'react';
import {useNavigate, Link, Outlet} from 'react-router-dom';
import './index.scss';

function Home() {
    const navigate = useNavigate();

    const handleClickLink = () => {
        navigate('/home/one'); // 跳转路由
    };

    return (
        <div className='home-root'>
            <div className='home-tab'>
                <Link to='/home/one'>HomeOne</Link>
                <Link to='/home/two'>HomeTwo</Link>
                <button onClick={handleClickLink}>使用navigate方式跳转HomeOne</button>
            </div>
            <Outlet />
        </div>
    );
}

export default Home;
