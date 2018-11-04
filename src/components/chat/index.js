import React from 'react';

import Chat from './chat';
// import Record from './record';
import Record from '../../containers/chat/record';

import styles from './style.scss';

class ChatFun extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contactName: "",
        };
    }

    render() {
        const { contactName } = this.state;

        return (
            <div className={styles['container']} >
                <div className={styles['title']}>
                    <div className={styles['close']}></div>
                    <p>{ contactName }张三</p>
                </div>
                <Record />
                <Chat />
            </div>
        );
    }
}

export default ChatFun;