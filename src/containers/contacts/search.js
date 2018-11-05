import React from 'react';
import { connect } from 'react-redux';
import Search from '../../components/contacts/search';
import { searchContacts } from '../../actions';

const mapDispatchToProps = dispatch => ({
    searchContact: name => {
        dispatch(searchContacts(name));
    }
});

export default connect(null, mapDispatchToProps)(Search);