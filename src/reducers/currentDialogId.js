import * as reducerType from "../utils/reducerType";

const currentDialogId = (state = null, action) => {
    switch(action.type) {
        case reducerType.UPDATE_DIALOG_ID:
            return action.payload;
        default:
            return state;
    }
}

export default currentDialogId;