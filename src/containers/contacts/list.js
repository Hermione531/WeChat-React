import React from 'react';
import { connect } from 'react-redux';

import { cutOffText } from '../../utils/tool';

import { changeDialogId } from '../../actions'

import List from '../../components/contacts/list';

const mapStateToProps = state => {
    const todayTimeValue = new Date(new Date().toISOString().split('T')[0]).valueOf();
    const yesterdayTimeValue = todayTimeValue - 3600 * 24;
    const lastWeekTimeValue = todayTimeValue - 3600 * 24 * 7;
    const weekday = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return {
        dialogs: state.get("dialogs").map(({id, name, data}) => {
            const lastMessage = data[data.length - 1];
            const message = cutOffText(lastMessage[1], 20);
            let time = lastMessage[2];
            if(time > todayTimeValue) {
                let date = new Date(time);
                time = `${date.getHours().padStart(2, 0)}:${date.getMinutes().padStart(2, 0)}`; 
            } else if(time >= yesterdayTimeValue) {
                time = '昨天';
            } else if(time > lastWeekTimeValue) {
                time = weekday[new Date(time).getDay()];
            } else {
                let date = new Date(time);
                time = `${date.getMonth() + 1}/${date.getDate()}`;
            }
            return {
                id, 
                name, 
                message,
                time
            }
        }
    )}
}

const mapDispatchToProps = dispatch => ({
    changeDialog: id => {
        dispatch(changeDialogId(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);