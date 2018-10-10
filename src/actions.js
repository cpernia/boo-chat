import * as actions from './constants';

export const setUser = (username, history) => ({
    type: actions.TRY_SET_USER,
    payload: {
        username,
        history
    }
});