import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Log from "components/Log";
import { addEventToPool, resetEvents } from "store/reducers/events/actions";
import getEventsSelector from "store/reducers/events/selectors";
import Button from "ui/Button";
import generateRandomNumber from "utils/generateRandomNumber";

import css from "./App.module.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const events = useSelector(getEventsSelector);

  const handleResetClick = () => {
    dispatch(resetEvents());
  };

  const handleButtonClick = useCallback(
    (buttonNumber: number) => () => {
      const delay = generateRandomNumber(1000, 2000);
      const clickTimestamp = new Date().toLocaleString();
      const event = { delay, clickTimestamp, buttonNumber };

      dispatch(addEventToPool(event));
    },
    [dispatch]
  );

  const logs = useMemo(
    () =>
      events.map(
        ({ displayTimestamp, buttonNumber, clickTimestamp, delay, id }) => (
          <Log
            key={id}
            displayTimestamp={displayTimestamp}
            buttonNumber={buttonNumber}
            delay={delay}
            clickTimestamp={clickTimestamp}
          />
        )
      ),
    [events]
  );

  // @ts-ignore
  return (
    <div className={css.App}>
      <h1>Click Logger</h1>
      <div className={css.buttonGroup}>
        <Button clickHandler={handleButtonClick(1)}>Button 1</Button>
        <Button clickHandler={handleButtonClick(2)}>Button 2</Button>
        <Button clickHandler={handleButtonClick(3)}>Button 3</Button>
      </div>
      <div className={css.logger}>{logs}</div>
      <div className={css.resetGroup}>
        <Button clickHandler={handleResetClick}>Reset</Button>
      </div>
    </div>
  );
};

export default App;
