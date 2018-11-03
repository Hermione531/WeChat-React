import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux';

import store from './store';
import Test from './components/index.js';


render(
    <Provider store={store}>
        <Test />
    </Provider>
    , document.getElementById('root')
    );