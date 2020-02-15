import { ReactNode } from "react";

export interface ButtonProps {
  clickHandler: () => any;
  children?: ReactNode;
}
