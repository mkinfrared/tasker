import React from "react";

import { ButtonProps } from "ui/Button/Button.type";
import css from "ui/Button/Button.module.scss";

const Button: React.FC<ButtonProps> = ({ children, clickHandler, type }) => {
  return (
    <button className={css.Button} type={type} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
