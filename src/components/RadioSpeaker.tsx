import classes from "@/styles/radio-speaker.module.css";
import clsx from "clsx";
import type { ComponentProps } from "react";

type Props = ComponentProps<"div">;

const RadioSpeaker = (props: Props) => {
  const { className, ...rest } = props;

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    />
  );
};

export default RadioSpeaker;
