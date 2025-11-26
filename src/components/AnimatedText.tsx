import classes from "@/styles/animated-text.module.css";
import clsx from "clsx";
import { memo, useEffect, useRef, type ComponentProps } from "react";

type Props = ComponentProps<"div"> & {
  text: string;
  interval: number;
};

const AnimatedText = memo((props: Props) => {
  const { text, interval, className } = props;

  const isMountedRef = useRef(true);
  const containerRef = useRef<null | HTMLDivElement>(null);
  const timeoutIdRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const { current: container } = containerRef;
    let { current: isMounted } = isMountedRef;
    let { current: timeoutId } = timeoutIdRef;

    if (!container) return;
    if (!text.length) return;
    if (interval <= 0) return;

    let idx = 0;
    let message = "";

    const type = () => {
      if (!isMounted) return;

      if (idx >= text.length) return;

      message += text.charAt(idx);
      container.textContent = message;

      idx++;
      timeoutId = setTimeout(type, interval);
    };

    requestAnimationFrame(type);

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [interval, text]);

  return (
    <div
      ref={containerRef}
      className={clsx(classes["root"], className)}
    />
  );
});

export default AnimatedText;
