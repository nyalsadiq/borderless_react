import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainRouter from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import jwt_token from './redux/reducers/reducers.js';

export const store = createStore(jwt_token);


ReactDOM.render(
    <MainRouter store={store}/>,
    document.getElementById('root')
);
registerServiceWorker();