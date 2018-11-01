import { connect } from 'react-redux';
import List from '../../components/contacts/List';

function mapStateToProps(state) {
    return (
        contacts: state.contacts;
    );
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(List);