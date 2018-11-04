import { createAction } from 'redux-actions';

import * as reducerType from '../utils/reducerType';

export const changeDialogId = createAction(reducerType.CHANGE_DIALOG_ID);
export const updateDialogs = createAction(reducerType.UPDATE_DIALOGS);

const searchContact = createAction(reducerType.SEARCH_CONTACT);

const updateChatMessage = createAction(reducerType.UPDATE_CHAT_MESSAGE);
const updateSelfInfo = createAction(reducerType.UPDATE_SELF_INFO);
const getDialogs = createAction(reducerType.GET_DIALOGS);

// const updateContactInfo = createAction(reducerType.UPDATA_CONTACT_INFO);
// const updateChatDialog = createAction(reducerType.UPDATA_CHAT_DIALOG);

