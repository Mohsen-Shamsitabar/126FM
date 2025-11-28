import classes from "@/styles/looping-text.module.css";
import { clsx } from "clsx";
import type { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"div"> & {
  element: ReactNode;
};

const LoopingText = (props: Props) => {
  const { element, className, ...rest } = props;

  return (
    <div
      className={clsx(classes["root"], className)}
      {...rest}
    >
      <div className={classes["content-container"]}>
        <div className={classes.content}>{element}</div>
      </div>
    </div>
  );
};

export default LoopingText;
