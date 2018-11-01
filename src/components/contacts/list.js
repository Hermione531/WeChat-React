import React from 'react';

import Item from './item'
import style from './style'

class List extends React.Component {
    constructor(props) {
        super();

        this.state = {
            contacts: []
        };
    }

    render() {
        const { contacts } = this.state;
        let ListContainer = null;

        if(contacts.length) {
            ListContainer = contacts.map((contact, index) => {
                <Item key={`p_${index}`} contact={contact} />;
            });
        } else {
            //无联系人面板
        }

        return(
            <div className={style['contacts']}>
                {ListContainer}
            </div>
        );
    }
}

export default List;