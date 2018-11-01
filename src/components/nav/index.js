import React from 'react';

import styles from './style.scss';

class Nav extends React.Component{

    render() {
        return(
            <div className={styles['container']}>
                <div className={styles['tools']}>
                    <div>头像</div>
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