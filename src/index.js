import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainRouter from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import borderless_reducers from './redux/reducers/reducers.js';

export const store = createStore(borderless_reducers);


ReactDOM.render(
    <MainRouter store={store}/>,
    document.getElementById('root')
);
registerServiceWorker();