/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import { LogProps } from "components/Log/Log.type";

const Log: React.FC<LogProps> = ({
  buttonNumber,
  delay,
  displayTimestamp,
  clickTimestamp
}) => {
  return (
    <p>
      <span>{displayTimestamp}: </span>
      Button {buttonNumber} was pressed with {delay}s timeout at{" "}
      {clickTimestamp}
    </p>
  );
};

export default Log;
