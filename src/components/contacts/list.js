import React from 'react';

import Item from './item'
import style from './style'

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null
        };
        this.select = this.select.bind(this);
    }

    select(id) {
        this.setState({
            selected: id
        });
        this.props.changeDialog(id);
    }

    render() {
        const { selected } = this.state;
        const { dialogs } = this.props;


        if(!dialogs) {
           //无联系人面板

        }

        return <div className={style['contacts']}>
                {dialogs.map(dialog => <Item key={dialog.id} data={dialog} onClick={console.log(dialog.id)} />)}
            </div>

    }
}

export default List;