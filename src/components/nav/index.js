import React from 'react';

import styles from './style.scss';

import self_img from '../../asserts/img/data/me.jpg';
import more_img from '../../asserts/img/more.svg'

class Nav extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={styles['container']}>
                <div className={styles['tools']}>
                    <div className={styles['self-img']}><img src={self_img}/></div>
                    <div className={styles['chat-tool']} ></div>
                    <div className={styles['contact-tool']}></div>
                    <div className={styles['collection-tool']}></div>
                </div>
                <div className={styles['tool-img']}><img src='../../asserts/img/more.svg'/></div>
            </div>
        );
    }
}

export default Nav;