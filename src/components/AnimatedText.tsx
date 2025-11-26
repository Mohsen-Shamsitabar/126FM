import classes from "@/styles/animated-text.module.css";
import clsx from "clsx";
import { memo, useEffect, useRef, type ComponentProps } from "react";

type Props = ComponentProps<"pre"> & {
  text: string;
  interval: number;
};

const AnimatedText = memo((props: Props) => {
  const { text, interval, className, ...rest } = props;

  const isMountedRef = useRef(true);
  const containerRef = useRef<null | HTMLPreElement>(null);
  const timeoutIdRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const { current: container } = containerRef;
    let { current: isMounted } = isMountedRef;
    let { current: timeoutId } = timeoutIdRef;

    if (!container) return;
    if (!text.length) return;
    if (interval <= 0) return;

    const startTypeAnimation = () => {
      if (!isMounted) return;

      let idx = 0;

      const type = () => {
        if (idx >= text.length) return;
        container.textContent += text.charAt(idx);
        idx++;
        timeoutId = setTimeout(type, interval);
      };

      type();
    };

    startTypeAnimation();

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [interval, text]);

  return (
    <pre
      ref={containerRef}
      className={clsx(classes["root"], className)}
      {...rest}
    />
  );
});

export default AnimatedText;
