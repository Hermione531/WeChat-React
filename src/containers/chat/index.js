import { connect } from 'react-redux';
import { updateChatDialogs } from '../../actions';
import { sendMessage } from '../../actions';

import ChatFun from '../../components/chat/index';

const mapStateToProps = state => {
    const currentDialogId = state.get('currentDialogId');
    let result;
    let contactName;
    let contactId;
    state.get('dialogs').forEach(({id, name, data}) => {
        if(id === currentDialogId) {
            contactId = id;
            contactName = name;
            result = data;
        }
    })
    return {id: contactId, name: contactName, records: result};
}

const mapDispatchToProps = dispatch => ({
    send: (id, message, time) => {
        dispatch(sendMessage({id, message, time}));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatFun);