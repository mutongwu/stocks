/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from './commons/fastclick';
import './index.css';
import './asserts/normalize.css';
import './asserts/iconfont/iconfont.css';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}