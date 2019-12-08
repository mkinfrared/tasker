import { Reducer } from "redux";

import { Events } from "store/reducers/events/types";

const initialState: Events = [];

const reducer: Reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default reducer;
