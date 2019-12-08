import React from "react";
import { useDispatch } from "react-redux";

import { addEventToPool } from "store/reducers/events/actions";
import Button from "ui/Button";

import css from "./App.module.scss";
import logo from "./logo.svg";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(
      addEventToPool({
        delay: 5000,
        clickTimestamp: Date.now().toString(),
        buttonNumber: 69
      })
    );
  };

  return (
    <div className={css.App}>
      <header className={css.AppHeader}>
        <img src={logo} className={css.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code>
{' '}
and save to reload.
</p>
        <a
          className={css.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button clickHandler={handleButtonClick} type="button">
        Hello
      </Button>
    </div>
  );
};

export default App;
