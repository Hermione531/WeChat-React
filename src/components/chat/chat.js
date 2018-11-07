import React from 'react';

import styles from './style.scss';

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };

        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onChange(e) {
        let text = e.target.value;  
        this.props.onChange(text);
    }

    onFocus() {
        this.setState({
            isEditing: true
        });
    }

    onBlur() {
        this.setState({
            isEditing: false
        });
    }

    onKeyDown(e) {
        // e.preventDefault();
        if(e.keyCode == 13) {
            this.props.sendMessage();
        }
    }

    render()  {
        const { isEditing } = this.state;
        const { hidden } = this.props;
        return( hidden ? <div className={styles['chat-placehoder']}></div> :
            <div className={styles['chat-container']} style={{backgroundColor: isEditing ? '#fff': 'transparent'}}>
                <textarea value={this.props.value} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown}></textarea>
                <button onClick={this.props.sendMessage}>发送(S)</button>
            </div>
        );
    }
}

export default Chat;