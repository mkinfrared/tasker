import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { addEventToPool, addEventToStore } from "store/reducers/events/actions";
import { Event, EventActionTypes } from "store/reducers/events/types";

type EventFunc = () => Promise<Event>;

const eventPool: EventFunc[] = [];
let isExecuting = false;

function* executeEventInPool() {
  while (eventPool.length > 0) {
    const eventFunc = eventPool.shift();
    const event: Event = yield eventFunc!();

    console.log(event);

    yield put(
      addEventToStore({ ...event, displayTimestamp: Date.now().toString() })
    );
  }

  isExecuting = false;
}

function* addEventToPoolSaga(action: ReturnType<typeof addEventToPool>) {
  const { payload } = action;
  const eventFunc = () =>
    new Promise<Event>(resolve => {
      setTimeout(() => resolve(payload), payload.delay);
    });

  eventPool.push(eventFunc);

  if (!isExecuting) {
    isExecuting = true;

    yield call(executeEventInPool);
  }
}

function* watchAddEventToPoolSaga() {
  yield takeEvery(EventActionTypes.ADD_EVENT_TO_POOL, addEventToPoolSaga);
}

function* eventSaga() {
  yield all([fork(watchAddEventToPoolSaga)]);
}

export default eventSaga;
