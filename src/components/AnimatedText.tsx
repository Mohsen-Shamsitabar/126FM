import CONFIG from "@/config";
import classes from "@/styles/animated-text.module.css";
import clsx from "clsx";
import { memo, useEffect, useRef, type ComponentProps } from "react";

type Props = ComponentProps<"pre"> & {
  text: string;
  interval?: number;
  onComplete: () => void;
};

const AnimatedText = memo((props: Props) => {
  const {
    text,
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
        onComplete();
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

  return (
    <pre
      ref={containerRef}
      className={clsx(classes.root, className)}
      {...rest}
    />
  );
});

export default AnimatedText;
