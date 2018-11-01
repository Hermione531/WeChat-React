import React from 'react';
import { Input, Icon, Button } from 'antd';

import style from './style.scss'

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            context: '',
        }
    }

    onChange(e) {
        this.setState({context: e.target.value});
    }

    render() {
        const { context } = this.state;
        return(
            <div className={style['search']}>
                <input className={style['searchTxt']} type="text" name="search" placeholder="搜索" onChange={this.onChange}/>

                <input className={style['searchBtn']} type="button" placeholder="hh"/>
            </div>
        );
    }
}

export default Search;