import React from 'react';
import { cutOffText } from '../../utils';
/*
数据结构：id, img, name, time, content

 */
class Item extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { id, img, name, time, content } = this.props.contact;

        return (
            <div className={style['contact-item']}>
                <div>头像</div>
                <div>
                    <p>
                        <span>{ name }</span>
                        <span>{ time }</span>
                    </p>
                    <span>{ cutOffText(content, 30) }</span>
                </div>
            </div>
        );
    }
}

export default Item;
