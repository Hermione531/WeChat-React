import { createAction } from 'redux-actions';

import * as reducerType from '../utils/reducerType';

export const changeDialogId = createAction(reducerType.CHANGE_DIALOG_ID);
export const updateDialogs = createAction(reducerType.UPDATE_DIALOGS);
export const getDialogs = createAction(reducerType.GET_DIALOGS);

export const searchContacts = createAction(reducerType.SEARCH_CONTACTS);


