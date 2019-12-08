import { createSelector } from "reselect";

import { AppState } from "store/store.type";

const getEvents = (state: AppState) => state.events;

const getEventsSelector = createSelector(getEvents, events => events);

export default getEventsSelector;
