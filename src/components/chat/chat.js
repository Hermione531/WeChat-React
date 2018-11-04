import React from 'react';

import styles from './style.scss';

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chat: {}
        };
    }

    send() {
        this.props.commit()
    }

    render()  {
        const { chats } = this.state;

        return(
            <div className={styles['chat']}>
                <textarea></textarea>
                <button onClick={this.send}>发送(S)</button>
            </div>
        );
    }
}

export default Chat;