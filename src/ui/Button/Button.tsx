import React from "react";

import { ButtonProps } from "ui/Button/Button.type";
import css from "ui/Button/Button.module.scss";

const Button: React.FC<ButtonProps> = ({ children, clickHandler }) => {
  return (
    <button className={css.Button} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
