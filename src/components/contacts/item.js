import React from 'react';
import { cutOffText } from '../../utils';

import temp_url from '../../asserts/img/data/kate.jpg';

import styles from './style.scss';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, img, name, message, time } = this.props.data;

        return (
            <div className={styles['contact-item']}>
                <div className={styles['item-img']}>
                    <img src={temp_url}/>
                </div>
                <div className={styles['item-context']}>
                    <p>
                        <span className={styles['item-name']}>{ name }</span>
                        <span className={styles['item-time']}>{ time }</span>
                    </p>
                    <p className={styles['item-message']}>{ message }</p>
                </div>
            </div>
        );
    }
}

export default Item;
