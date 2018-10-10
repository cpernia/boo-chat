import { combineReducers } from 'redux';

import * as actions from './constants';

const initialStateUser = {
    username: ''
};

export const userReducer = (state=initialStateUser, action={}) => {
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

const reducers = combineReducers({ userReducer });

export default reducers;