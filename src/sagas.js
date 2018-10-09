import { delay } from 'redux-saga'
import { all } from 'redux-saga/effects'

function* helloSaga() {
    yield delay(1000);
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
    ])
}