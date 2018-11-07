import React, {Component} from 'react';

import Nav from './nav';
import Contacts from './contacts/index';
import ChatFun from '../containers/chat/index';
// import ChatFun from './chat/index';

import styles from './styles.scss';

class Test extends Component {   
    constructor() {
        super();

        this.state = {
            tooId: ''
        };

        // this.onChangeToolId = this.onChangeToolId.bind(this);
    }

    // onChangeToolId(id) {
    //     this.setState({
    //         tooId: id
    //     });
    // }

    render() {
        // const { toolId } = this.state;
        // let mainContainer;
        // if(toolId == 1) {
        //     mainContainer = "<Contacts /><ChatFun />";
        // } else if(toolId = 2) {
        //     mainContainer = "<div>contact</div>";
        // } else if(toolId == 3) {
        //     mainContainer = "<div>box</div>";
        // }
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