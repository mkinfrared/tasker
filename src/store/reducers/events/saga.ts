import {
  all,
  cancel,
  delay,
  fork,
  put,
  take,
  takeLatest
} from "redux-saga/effects";
import uuid from "uuid/v4";
import { Task } from "redux-saga";

import { addEventToPool, addEventToStore } from "store/reducers/events/actions";
import { Event, EventActionTypes } from "store/reducers/events/types";

let eventPool: Event[] = [];
let isExecuting = false;

function* cancelSaga(task: Task) {
  yield cancel(task);
  eventPool = [];
  isExecuting = false;
  yield put({ type: EventActionTypes.RESET_EVENTS_SUCCESS });
}

function* executeEventInPool() {
  while (eventPool.length > 0) {
    const event = eventPool.shift();
    const id = uuid();
    const displayTimestamp = new Date().toLocaleString();

    yield delay(event!.delay);
    yield put(addEventToStore({ ...event!, id, displayTimestamp }));
  }

  isExecuting = false;
}

function* addEventToPoolSaga(action: ReturnType<typeof addEventToPool>) {
  const { payload } = action;

  eventPool.push(payload);

  if (isExecuting) return;

  isExecuting = true;

  yield executeEventInPool();
}

function* watchAddEventToPoolSaga() {
  while (true) {
    const action = yield take(EventActionTypes.ADD_EVENT_TO_POOL);
    const task = yield fork(addEventToPoolSaga, action);

    yield takeLatest(EventActionTypes.RESET_EVENTS, cancelSaga, task);
  }
}

function* eventSaga() {
  yield all([fork(watchAddEventToPoolSaga)]);
}

export default eventSaga;
