import React, { useRef } from "react";
import { CompareProps } from "types";

import { ButtonProps } from "ui/Button/Button.type";
import css from "ui/Button/Button.module.scss";

const compareProps: CompareProps<ButtonProps> = (prevProps, nextProps) => {
  return prevProps.clickHandler === nextProps.clickHandler;
};

const Button: React.FC<ButtonProps> = ({ children, clickHandler }) => {
  const ref = useRef(0);
  console.log(ref.current++);

  return (
    <button className={css.Button} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default React.memo<ButtonProps>(Button, compareProps);
