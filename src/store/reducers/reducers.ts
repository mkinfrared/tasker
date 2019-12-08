import { combineReducers } from "redux";

import events from "store/reducers/events/reducer";

const reducers = combineReducers({ events });

export default reducers;
