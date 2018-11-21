import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

import dialogs from './dialogs';
import currentDialogId from './currentDialogId';

const rootReducer = combineReducers({
    dialogs,
    currentDialogId,
    routing: routerReducer
});

export default rootReducer;