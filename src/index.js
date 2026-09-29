import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { GlobalState } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalState>
        <App />
    </GlobalState>
    
);
