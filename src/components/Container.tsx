import classes from "@/styles/container.module.css";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const Container = (props: Props) => {
  const { children } = props;

  return <main className={classes.container}>{children}</main>;
};

export default Container;
