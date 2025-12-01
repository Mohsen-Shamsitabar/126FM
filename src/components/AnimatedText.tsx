import classesForBubble from "@/styles/bubble-text.module.css";

import CONFIG from "@/config";
import classes from "@/styles/animated-text.module.css";
import clsx from "clsx";
import { useEffect, useRef, type ComponentProps } from "react";

type UniqueProps = {
  text: string;
  author?: string;
  interval?: number;
  onComplete?: () => void;
};

type Props = ComponentProps<"pre"> & UniqueProps;

const AnimatedText = (props: Props) => {
  const {
    text,
    author,
    interval = CONFIG.TEXT_ANIMATION_INTERVAL,
    className,
    onComplete,
    ...rest
  } = props;

  const isMountedRef = useRef(true);
  const containerRef = useRef<HTMLPreElement | null>(null);
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const { current: container } = containerRef;

    if (!container) return;
    if (!text.length) return;
    if (!interval || interval <= 0) return;

    isMountedRef.current = true;
    container.textContent = "";

    let idx = 0;

    const type = () => {
      if (!isMountedRef.current) return;

      if (idx >= text.length) {
        if (onComplete) onComplete();
        return;
      }

      container.textContent += text[idx];
      idx++;

      timeoutIdRef.current = setTimeout(type, interval);
    };

    type();

    return () => {
      isMountedRef.current = false;

      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [interval, text]);

  if (author) {
    return (
      <div className={classesForBubble.root}>
        <span className={classesForBubble.author}>{author}:</span>

        <pre
          ref={containerRef}
          className={clsx(classes.root, className)}
          {...rest}
        />
      </div>
    );
  }

  return (
    <pre
      ref={containerRef}
      className={clsx(classes.root, className)}
      {...rest}
    />
  );
};

export default AnimatedText;
export { type UniqueProps };
