import React from 'react';
import { Input, Icon, Button } from 'antd';

import style from './style.scss';
import search_img from "../../asserts/img/search.svg";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            context: '',
        }

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onKeyDown(e) {
        if(e.keyCode == "13") {
            e.preventDefault();
            this.props.searchContact(e.target.value);
        }    
    }

    onChange(e) {
        this.setState({
            context: e.target.value
        });

        if(!e.target.value) {
            this.props.searchContact(e.target.value);
        }
    }

    render() {
        const { context } = this.state;
        return(
            <div className={style['search-container']}>
                <div className={style['search-box']}>
                    <img src="../../asserts/img/search.svg" />
                    <input type="text" name="search" placeholder="搜索" onChange={this.onChange} onKeyDown={this.onKeyDown}/>
                </div>

                <div className={style['search-btn']}>
                    <img src="../../asserts/img/plus.svg" />
                </div>
            </div>
        );
    }
}

export default Search;