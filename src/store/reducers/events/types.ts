export interface Event {
  buttonNumber: number;
  delay: number;
  clickTimestamp: string;
}

export interface LogEvent extends Event {
  displayTimestamp: string;
}

export type Events = LogEvent[];

export enum EventActionTypes {
  ADD_EVENT_TO_POOL = "@@events/ADD_EVENT_TO_POOL",
  EVENT_EXECUTED = "@@events/EVENT_EXECUTED"
}
