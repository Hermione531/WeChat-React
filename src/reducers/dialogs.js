import * as reducerType from '../utils/reducerType';

const defaultValue = {};

const dialogs = (state = defaultValue, action) => {
    switch(action.type) {
        case reducerType.GET_DIALOGS:
            return action.payload;
        case reducerType.UPDATE_DIALOGS:
            
        default: return state;
    }
}

export default dialogs;