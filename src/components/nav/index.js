import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import styles from './style.scss';

import self_img from '../../asserts/img/data/me.jpg';
import more_img from '../../asserts/img/more.svg'


const Nav = () => {
    const [active, setActive] = useState(window.location.pathname.split("/").pop());

    const icon_tag = {
        chat: active === 'chat' ? "chat-tool-active" : "chat-tool", 
        contact: active === 'contact' ? "contact-tool-active" : "contact-tool",
        collection: active === 'collection' ? "collection-tool-active" : "collection-tool"
    };
    return(
        <div className={styles['container']}>
            <div className={styles['tools']}>
                <div className={styles['self-img']}><img src={self_img}/></div>
                <div>
                    <Link to="/chat" className={styles[icon_tag.chat]} onClick={() => setActive('chat')}></Link>
                </div>
                <div>
                    <Link to="/contact" className={styles[icon_tag.contact]} onClick={() => setActive('contact')}></Link>
                </div>
                <div>
                    <Link to="/collection" className={styles[icon_tag.collection]} onClick={() => setActive('collection')}></Link> 
                </div>
            </div>
            <div className={styles['tool-img']}><img src='../../asserts/img/more.svg'/></div>
        </div>
    );
}

export default Nav;