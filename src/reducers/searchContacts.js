import * as reducerType from '../utils/reducerType';

const searchContacts = (state = [], action) => {
    switch(action.type) {
        case reducerType.SEARCH_CONTACTS:
            state.map(({id, name, data}) => {
                if(name.indexOf(action.payload.name) !== -1) {
                    return data;
                }
            });
        default: return state;
    }
}

export default searchContacts;

