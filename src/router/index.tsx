/*
 * react-router-dom v6 官方文档
 * https://reactrouter.com/en/v6.3.0/getting-started/installation
 */
import React from 'react';
import SuspenseLazy from '@/components/SuspenseLazy';
import {Navigate, RouteObject} from 'react-router-dom';

const Home = SuspenseLazy(() => import(/* webpackChunkName:"" */ '@/view/Home'));
const HomeOne = SuspenseLazy(() => import(/* webpackChunkName:"homeOne" */ '@/view/Home/HomeOne'));
const HomeTwo = SuspenseLazy(() => import(/* webpackChunkName:"homeTwo" */ '@/view/Home/HomeTwo'));
const HomeThree = SuspenseLazy(() => import(/* webpackChunkName:"HomeThree" */ '@/view/Home/HomeThree'));
const Dashboard = SuspenseLazy(() => import(/* webpackChunkName:"dashboard" */ '@/view/Dashboard'));
const About = SuspenseLazy(() => import(/* webpackChunkName:"about" */ '@/view/About'));

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to='home/two' /> // 重定向
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
            },
            {
                path: 'three',
                element: HomeThree
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
