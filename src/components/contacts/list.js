import React from 'react';

import Item from './item'
import style from './style'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this);
    }

    select(id) {
        this.props.changeDialog(id);
    }

    render() {
        const { currentDialogId, dialogs } = this.props;

        if(!dialogs) {
           //无联系人面板

        }

        return <div className={style['contacts']}>
                {dialogs.map(dialog => dialog && <Item key={dialog.id} data={dialog} onClick={() => this.select(dialog.id)} selected={currentDialogId == dialog.id ? true : false} />)}
            </div>
    }
}

export default List;