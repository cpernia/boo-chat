import * as actions from './constants';

export const setUser = (username) => ({
    type: actions.TRY_SET_USER,
    payload: username
});