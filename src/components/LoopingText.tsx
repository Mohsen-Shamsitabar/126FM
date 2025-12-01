import classes from "@/styles/looping-text.module.css";
import { clsx } from "clsx";
import type { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"div"> & {
  element: ReactNode;
  duration?: string;
};

const LoopingText = (props: Props) => {
  const { element, className, duration = "7s", ...rest } = props;

  return (
    <div
      className={clsx(classes["root"], className)}
      {...rest}
    >
      <div
        style={{
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          "--animation-duration": duration,
        }}
        className={classes["content-container"]}
      >
        <div className={classes.content}>{element}</div>
      </div>
    </div>
  );
};

export default LoopingText;
