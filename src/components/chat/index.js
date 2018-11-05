import React from 'react';

import Chat from './chat';
import Record from './record';
// import Record from '../../containers/chat/record';

import styles from './style.scss';

class ChatFun extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { name, records } = this.props;

        return (
            <div className={styles['container']} >
                <div className={styles['title']}>
                    <div className={styles['close']}></div>
                    <p>{ name }</p>
                </div>
                <Record records={records} />
                <Chat />
            </div>
        );
    }
}

export default ChatFun;