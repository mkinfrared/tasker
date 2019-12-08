import { all, fork } from "redux-saga/effects";

import eventSaga from "store/reducers/events/saga";

function* rootSaga() {
  yield all([fork(eventSaga)]);
}

export default rootSaga;
