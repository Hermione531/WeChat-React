import React, {Component} from 'react';

import Nav from './nav';
import Contacts from './contacts/index';
import ChatFun from '../containers/chat/index';
// import ChatFun from './chat/index';

import styles from './styles.scss';

class Test extends Component {   
    render() {
        return (
            <div className={styles['container']}>
                <Nav />
                <Contacts />
                <ChatFun />
            </div>
        );
    }
}

export default Test;