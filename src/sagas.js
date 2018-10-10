import { all, put, takeLatest } from 'redux-saga/effects'

import * as actions from './constants';

function* setUser(action) {
    try {

        yield put({ type: actions.SET_USER, payload: action.payload.username });

        action.payload.history.push('/chat');

    } catch (e) {
        console.log(e);
    }
}

function* sentMsg(action) {
    console.log(action);
    try{
        yield put({  type: actions.SENT_CHAT_MSG, payload: action.payload });
    }
    catch(e)  {
        console.log(e);
    }
}

function* watchUserSagas() {
    yield [
        takeLatest(actions.TRY_SET_USER, setUser),
    ]
}

function* watchChatSagas() {
    yield [
        takeLatest(actions.TRY_SENT_CHAT_MSG, sentMsg),
    ]
}

export default function* rootSaga() {
    yield all([
        watchUserSagas(),
        watchChatSagas()
    ])
}