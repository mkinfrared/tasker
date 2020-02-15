import {
  actionChannel,
  all,
  call,
  delay,
  flush,
  fork,
  put,
  race,
  take,
  takeEvery
} from "redux-saga/effects";
import uuid from "uuid/v4";
import { FlushableChannel } from "redux-saga";

import {
  addEventToPool,
  addEventToStore,
  resetEventsSuccess
} from "store/reducers/events/actions";
import { EventActionTypes } from "store/reducers/events/types";

function* executeEventInPool(action: ReturnType<typeof addEventToPool>) {
  const { payload } = action;
  const id = uuid();
  const displayTimestamp = new Date().toLocaleString();

  const result = yield race({
    continue: delay(payload.delay),
    cancel: take(EventActionTypes.RESET_EVENTS)
  });

  if (result.continue) {
    yield put(addEventToStore({ ...payload, id, displayTimestamp }));
  }
}

function* resetEventsSaga(channel?: FlushableChannel<any>) {
  if (channel) {
    yield flush(channel);
  }
  yield put(resetEventsSuccess());
}

function* watchAddEventToPoolSaga() {
  const channel = yield actionChannel(EventActionTypes.ADD_EVENT_TO_POOL);

  while (true) {
    const action = yield take(channel);
    yield call(executeEventInPool, action);
    // @ts-ignore
    yield takeEvery(EventActionTypes.RESET_EVENTS, resetEventsSaga, channel);
  }
}

function* eventSaga() {
  yield all([fork(watchAddEventToPoolSaga)]);
}

export default eventSaga;
