import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux';

import Test from './components/index.js';


render(
    <Test />
    , document.getElementById('root')
    );