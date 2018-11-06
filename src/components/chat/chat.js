import React from 'react';

import styles from './style.scss';

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        let text = e.target.value;  
        this.props.onChange(text);
    }

    render()  {
        return(
            <div className={styles['chat-container']}>
                <textarea value={this.props.value} onChange={this.onChange}></textarea>
                <button onClick={this.props.sendMessage}>发送(S)</button>
            </div>
        );
    }
}

export default Chat;