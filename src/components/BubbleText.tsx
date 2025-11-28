import classes from "@/styles/bubble-text.module.css";
import clsx from "clsx";
import type { ComponentProps } from "react";
import { AnimatedText, type AnimatedTextProps } from ".";

type Props = ComponentProps<"div"> &
  AnimatedTextProps & {
    author: string;
  };

const BubbleText = (props: Props) => {
  const { author, onComplete, text, interval, className, ...rest } = props;

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <span className={classes.author}>{author}:</span>

      <AnimatedText
        className={classes.text}
        onComplete={onComplete}
        text={text}
        interval={interval}
      />
    </div>
  );
};

export default BubbleText;
