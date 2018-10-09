import { combineReducers } from 'redux';

import * as actions from './constants';

const initialState = {
    hello: 'jejeje'
};

export const testReducer = (state=initialState, action={}) => {
    switch (action.type){
        case actions.CHANGE_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload
            };
        default:
            return state;
    }
};

const reducers = combineReducers({ testReducer });

export default reducers;