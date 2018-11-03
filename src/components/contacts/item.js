import React from 'react';
import { cutOffText } from '../../utils';

import temp_url from '../../asserts/img/data/kate.jpg';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, img, name, message, time } = this.props.data;

        return (
            <div>
                <div>
                    <img src={temp_url}/>
                </div>
                <div>
                    <p>
                        <span>{ name }</span>
                        <span>{ time }</span>
                    </p>
                    <span>{ message }</span>
                </div>
            </div>
        );
    }
}

export default Item;
