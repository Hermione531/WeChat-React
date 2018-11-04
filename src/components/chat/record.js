import React from 'react';

import styles from './style.scss'

class Record extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        return(
            <div className={styles['record']}>
                {name}
            </div>
        );
    }
}

export default Record;