import React from 'react';
import {useNavigate, Link, Outlet} from 'react-router-dom';
import './index.less';

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
                <div className='btn' onClick={handleClickLink}>
                    使用navigate方式跳转HomeOne navigate('/home/one')
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Home;
