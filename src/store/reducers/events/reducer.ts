import { Reducer } from "redux";

import { EventActionTypes, Events } from "store/reducers/events/types";

const initialState: Events = [];

const reducer: Reducer<Events> = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case EventActionTypes.EVENT_EXECUTED:
      return [...state, payload];
    default:
      return state;
  }
};

export default reducer;
