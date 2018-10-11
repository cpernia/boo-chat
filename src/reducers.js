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
    msgs: [
        {
            sender: 'ana',
            msg: 'Hola! como estan?'
        },
        {
            sender: 'leo',
            msg: 'gooooooooood'
        }
    ]
};

const chatReducer = (state=initialStateChat, action={}) => {
    switch (action.type){
        case actions.SENT_CHAT_MSG ||
            actions.SENT_CHAT_MSG2:
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