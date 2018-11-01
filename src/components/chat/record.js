import React from 'react';

import styles from './style.scss'

class Record extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ""
        };
    }

    render() {
        const { name }= this.state;
        return(
            <div className={styles['record']}>
                {name}
            </div>
        );
    }
}

export default Record;