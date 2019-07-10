import React from 'react';

import Search from '../../containers/contacts/search';
import List from '../../containers/contacts/list';

import style from './style.scss';

const Contacts = () => {
    return(
        <div className={style['container']}>
            <Search />
            <List />
        </div>
    );

}

export default Contacts;