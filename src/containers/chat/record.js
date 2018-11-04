import { connect } from 'react-redux';
import Record from '../../components/chat/record';

function mapStateToProps(state) {
    const currentDialogId = state.get('currentDialogId');
    let result = [];
    return state.get('dialogs').map(({id, name, data}) => {
        if(id === currentDialogId) {
            // return data;
        }
    })
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(Record);