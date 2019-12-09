export interface Event {
  buttonNumber: number;
  delay: number;
  clickTimestamp: string;
}

export interface LogEvent extends Event {
  id: string;
  displayTimestamp: string;
}

export type Events = LogEvent[];

export enum EventActionTypes {
  ADD_EVENT_TO_POOL = "@@events/ADD_EVENT_TO_POOL",
  EVENT_EXECUTED = "@@events/EVENT_EXECUTED",
  RESET_EVENTS = "@@events/RESET_EVENTS",
  RESET_EVENTS_SUCCESS = "@@events/RESET_EVENTS_SUCCESS"
}
