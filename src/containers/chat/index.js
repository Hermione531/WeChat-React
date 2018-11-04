import { connect } from 'react-redux';
import { updateChatDialogs } from '../../actions';

import Chat from '../../components/chat/chat';


function mapDispatchToProps(dispatch) {
    commit: (id, message, time) => {
        dispatch(updateChatDialogs(id, message, time));
    }
}

// export default connect(null, mapDispatchToProps)(Chat);