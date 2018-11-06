import { connect } from 'react-redux';
import Chat from '../../components/chat/chat';

const mapStateToProps = state => {
    const currentDialogId = state.get('currentDialogId');

}

const mapDispatchToProps = dispatch => {
    send: id => (message, time) => {
        dispatch(dispatch => {
            dispatch(sendMessage(id, message, time));
        })
    }
}

// exports default connect(mapStateToProps, mapDispatchToProps)(Chat);