import { action } from "typesafe-actions";

import { Event, EventActionTypes, LogEvent } from "store/reducers/events/types";

const addEventToPool = (event: Event) =>
  action(EventActionTypes.ADD_EVENT_TO_POOL, event);

const addEventToStore = (event: LogEvent) =>
  action(EventActionTypes.EVENT_EXECUTED, event);

export { addEventToPool, addEventToStore };
