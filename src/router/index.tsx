/*
 * react-router-dom v6 官方文档
 * https://reactrouter.com/en/v6.3.0/getting-started/installation
 */
import React from 'react';
import Suspenselazy from '@/components/Suspenselazy';
import {Navigate, RouteObject} from 'react-router-dom';

const Home = Suspenselazy(() => import(/* webpackChunkName:"" */ '@/view/Home'));
const HomeOne = Suspenselazy(() => import(/* webpackChunkName:"homeOne" */ '@/view/Home/HomeOne'));
const HomeTwo = Suspenselazy(() => import(/* webpackChunkName:"homeTwo" */ '@/view/Home/HomeTwo'));
const Dashboard = Suspenselazy(() => import(/* webpackChunkName:"dashboard" */ '@/view/Dashboard'));
const About = Suspenselazy(() => import(/* webpackChunkName:"about" */ '@/view/About'));

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to='home' /> // 重定向
    },
    {
        path: 'home',
        element: Home,
        children: [
            // 嵌套路由
            {
                path: 'one',
                element: HomeOne
            },
            {
                path: 'two',
                element: HomeTwo
            }
        ]
    },
    {
        path: 'dashboard',
        element: Dashboard
    },
    {
        path: 'about',
        element: About
    },
    // 未匹配到页面
    {
        path: '*',
        element: About
    }
];

export default routes;
