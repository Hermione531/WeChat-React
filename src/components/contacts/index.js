import React from 'react';

import Search from './search';
import List from './list';

import style from './style.scss';

class Contacts extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className={style['container']}>
                <Search />
                <List />
            </div>
        );
    }
}

export default Contacts;