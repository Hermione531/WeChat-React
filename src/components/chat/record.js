import React from 'react';

import contact_img from '../../asserts/img/data/kate.jpg';
import self_img from '../../asserts/img/data/me.jpg';
import styles from './style.scss'

class Record extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { records } = this.props;
        return(
            <div className={styles['record-container']}>
                {records && records.map((item, index, array) => {
                    if(item[0] === "0") {
                        return (<div className={styles['contact-container']}>
                                    <img src={contact_img}/>
                                    <span>{item[1]}</span>
                                </div>);
                    } else if(item[0] === "1") {
                        return (<div className={styles['self-container']}>
                                    <img src={self_img}/>
                                    <span>{item[1]}</span>
                                </div>);
                    } else {
                        console.log("联系人对话存储格式错误！");
                    }
                })}
            </div>
        );
    }
}

export default Record;