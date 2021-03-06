import React from 'react';
import { Router, Route, BrowserRouter } from 'react-router-dom';

import Nav from './nav';
import Chat from './main/chat';
import Contacts from './main/contact';
import Collection from './main/collection';

import styles from './styles.scss';

function Test() {
    return (
        <BrowserRouter>
            <div className={styles['container']}>
                <Nav />      
                <Route path="/chat" component={Chat} />
                <Route path="/contact" component={Contacts} />
                <Route path="/collection" component={Collection} />       
            </div>
        </BrowserRouter>
    );
}

export default Test;