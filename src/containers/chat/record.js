import { connect } from 'react-redux';
import Record from '../../components/chat/index';

function mapStateToProps(state) {
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

// export default connect(mapStateToProps, null)(Record);