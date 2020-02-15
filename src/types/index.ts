import { PropsWithChildren } from "react";

export type CompareProps<P> = (
  prevProps: Readonly<PropsWithChildren<P>>,
  nextProps: Readonly<PropsWithChildren<P>>
) => boolean;
