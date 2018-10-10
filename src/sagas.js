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

function* watchUserSagas() {
    yield [
        takeLatest(actions.TRY_SET_USER, setUser),
    ]
}

export default function* rootSaga() {
    yield all([
        watchUserSagas(),
    ])
}