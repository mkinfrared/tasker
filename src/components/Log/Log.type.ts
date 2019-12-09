import { LogEvent } from "store/reducers/events/types";

export interface LogProps extends Omit<LogEvent, "id"> {}
