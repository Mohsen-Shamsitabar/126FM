import classes from "@/styles/looping-text.module.css";
import { clsx } from "clsx";
import type { ComponentProps } from "react";

type Props = ComponentProps<"div"> & {
  text: string;
};

const LoopingText = (props: Props) => {
  const { text, className, ...rest } = props;

  return (
    <div
      className={clsx(classes["root"], className)}
      {...rest}
    >
      <div className={classes["text-container"]}>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default LoopingText;
