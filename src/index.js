import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainRouter from "./MainRouter";
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import borderless_reducers from './Redux/reducers/reducers.js';

export const store = createStore(borderless_reducers);


ReactDOM.render(
    <MainRouter store={store}/>,
    document.getElementById('root')
);
registerServiceWorker();