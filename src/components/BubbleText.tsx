import classes from "@/styles/bubble-text.module.css";
import clsx from "clsx";
import type { ComponentProps } from "react";
import { AnimatedText, type AnimatedTextProps } from ".";

type Props = ComponentProps<"div"> &
  AnimatedTextProps & {
    author: string;
  };

const BubbleText = (props: Props) => {
  const { author, onComplete, text, className, ...rest } = props;

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <span className={classes.author}>{author}:</span>

      <AnimatedText
        text={text}
        className={classes.text}
        onComplete={onComplete}
      />
    </div>
  );
};

export default BubbleText;
