import { createAction } from 'redux-actions';

import * as reducerType from '../utils/reducerType';

const changeDialogId = createAction(reducerType.CHANGE_DIALOG_ID);
const searchContact = createAction(reducerType.SEARCH_CONTACT);

const sendChatMessage = createAction(reducerType.SEND_CHAT_MESSAGE);
const updateSelfInfo = createAction(reducerType.UPDATE_SELF_INFO);
// const updateContactInfo = createAction(reducerType.UPDATA_CONTACT_INFO);
// const updateChatDialog = createAction(reducerType.UPDATA_CHAT_DIALOG);

export default {
    changeDialogId,
    searchContact,
    sendChatMessage,
    updateSelfInfo
    // updateChatDialog,
    // updateContactInfo,
};