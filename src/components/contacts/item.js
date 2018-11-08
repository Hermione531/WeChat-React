import React from 'react';
import { cutOffText } from '../../utils/tool';

import temp_url from '../../asserts/img/data/kate.jpg';

import styles from './style.scss';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, img, name, message, time } = this.props.data;
        const { selected } = this.props;
        return (
            <div className={ selected ? `${styles['contact-item']} ${styles['active']}` : styles['contact-item']} onClick={this.props.onClick}>
                <div className={styles['item-img']}>
                    <img src={temp_url}/>
                </div>
                <div className={styles['item-context']}>
                    <p>
                        <span className={styles['item-name']}>{ name }</span>
                        <span className={styles['item-time']}>{ time }</span>
                    </p>
                    <p className={styles['item-message']}>{ cutOffText(message, 12) }</p>
                </div>
            </div>
        );
    }
}

export default Item;
