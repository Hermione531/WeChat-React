import React from 'react';
import Contacts from '../contacts/index';
import ChatFun from '../../containers/chat/index';

import styles from './style';

const Chat = () => (
    <div className={styles['chat-container']}>
        <Contacts />
        <ChatFun />
    </div>
);

export default Chat;