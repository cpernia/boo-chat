import { eventChannel } from 'redux-saga';
import {put, call, take, takeLatest, all, fork} from 'redux-saga/effects';
import io from 'socket.io-client';

import * as actions from './constants';

function connect() {
    const socket = io('http://localhost:5000');
    return new Promise(resolve => {
        socket.on('connect', () => {
            resolve(socket);
        });
    });
}

function subscribe(socket) {
    return eventChannel(emit => {
        socket.on('MSG-FROM-SERVER', (data) => {
            emit(data);
        });
        return () => {};
    });
}

function* read(socket) {
    const channel = yield call(subscribe, socket);
    while (true) {
        let msg = yield take(channel);
        yield put({ type: actions.SENT_CHAT_MSG2, payload: msg });
    }
}

function* write(socket) {
    while(true){
        const { payload } = yield take(actions.SENT_CHAT_MSG);
        console.log(payload);
        socket.emit('MSG-FROM-USER', payload);
    }
}

function* handleIO(socket) {
    yield fork(read, socket);
    yield fork(write, socket);
}

function* initializeWebSocketsChannel() {
    const socket = yield call(connect);
    yield fork(handleIO, socket);
}

function* setUser(action) {
    try {

        yield put({ type: actions.SET_USER, payload: action.payload.username });

        action.payload.history.push('/chat');

    } catch (e) {
        console.log(e);
    }
}

function* sentMsg(action) {
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
        takeLatest('INITIALIZE_WEB_SOCKETS_CHANNEL', initializeWebSocketsChannel),
        takeLatest(actions.TRY_SENT_CHAT_MSG, sentMsg),
    ]
}

export default function* rootSaga() {
    yield all([
        watchUserSagas(),
        watchChatSagas()
    ])
}