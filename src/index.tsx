import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {StoresProvider, stores} from '@/store';
import '@/assets/icons/index';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
    <BrowserRouter>
        <StoresProvider value={stores}>
            <App />
        </StoresProvider>
    </BrowserRouter>
);
