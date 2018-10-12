import { combineReducers } from 'redux';

import * as actions from './constants';

const initialStateUser = {
    username: ''
};

const userReducer = (state=initialStateUser, action={}) => {
    switch (action.type){
        case actions.SET_USER:
            return {
                ...state,
                username: action.payload
            };
        default:
            return state;
    }
};

const initialStateChat = {
    msgs: []
};

const chatReducer = (state=initialStateChat, action={}) => {
    switch (action.type){
        case actions.SENT_CHAT_MSG:
            console.log(action.payload);
            return {
                ...state,
                msgs: [
                    ...state.msgs,
                    action.payload
                ]
            };
        default:
            return state;
    }
};

const reducers = combineReducers({ userReducer, chatReducer });

export default reducers;