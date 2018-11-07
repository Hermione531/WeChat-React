import React from 'react';

import Chat from './chat';
import Record from './record';
// import Record from '../../containers/chat/record';

import styles from './style.scss';

class ChatFun extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ""
        };

        this.sendMessage = this.sendMessage.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    sendMessage(e) {
        this.props.send(this.props.id, this.state.message, new Date());

        this.setState({
            message: ''
        });
    }

    onChange(text) {
        this.setState({
            message: text
        });
    }

    render() {
        const { id, name, records } = this.props;
        const { message } = this.state;
        let hidden = false;
        if(!id)
            hidden = true;
        return (
            <div className={styles['container']} >
                <div className={styles['title']}>
                    <div className={styles['close']}></div>
                    <p>{ name }</p>
                </div>
                <Record records={records} />
                <Chat value={message} hidden={hidden} onChange={this.onChange} sendMessage={this.sendMessage} />
            </div>
        );
    }
}

export default ChatFun;