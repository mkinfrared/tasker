/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import { LogProps } from "components/Log/Log.type";
import css from "components/Log/Log.module.scss";

const Log: React.FC<LogProps> = ({
  buttonNumber,
  delay,
  displayTimestamp,
  clickTimestamp
}) => {
  const seconds = delay / 1000;

  return (
    <p className={css.Log}>
      <span>{displayTimestamp}: </span>
      Button {buttonNumber} was pressed with {seconds}s timeout at{" "}
      {clickTimestamp}
    </p>
  );
};

export default Log;
