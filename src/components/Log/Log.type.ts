import { ReactNode } from "react";
import { LogEvent } from "store/reducers/events/types";

export interface LogProps extends Omit<LogEvent, "id"> {
  children?: ReactNode;
}
