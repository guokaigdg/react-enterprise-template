import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import '@/assets/icons/index';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
