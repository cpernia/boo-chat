import * as actions from './constants';

export const setUser = (username, history) => ({
    type: actions.TRY_SET_USER,
    payload: {
        username,
        history
    }
});

export const sentMsg = (sender, msg) => {
    return {
        type: actions.TRY_SENT_CHAT_MSG,
        payload: {
            sender,
            msg
        }
    }
};

export const activateChannel = () => {
    return {
        type: actions.INITIALIZE_WEB_SOCKETS_CHANNEL
    }
};