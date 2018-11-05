import React from 'react';

import styles from './style.scss';

import self_img from '../../asserts/img/data/me.jpg';

class Nav extends React.Component{

    render() {
        return(
            <div className={styles['container']}>
                <div className={styles['tools']}>
                    <div className={styles['self-img']}><img src={self_img}/></div>
                    <div>聊天</div>
                    <div>通讯录</div>
                    <div>收藏</div>
                </div>
                <div>更多</div>
            </div>
        );
    }
}

export default Nav;