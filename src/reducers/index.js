import { combineReducers } from 'redux-immutable';

import dialogs from './dialogs';
import currentDialogId from './currentDialogId';

const rootReducer = combineReducers({
    dialogs,
    currentDialogId,
});

export default rootReducer;