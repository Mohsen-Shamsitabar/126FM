import classes from "@/styles/animated-text.module.css";
import mergeCss from "@/utils/merge-css";
import * as React from "react";

type Props = {
  text: string;
  interval: number;
  className?: string;
};

const AnimatedText = (props: Props) => {
  const { text, interval, className } = props;

  const containerRef = React.useRef<null | HTMLDivElement>(null);

  React.useEffect(() => {
    const { current: container } = containerRef;
    if (!container) return;
    if (text.length === 0) return;
    if (interval <= 0) return;

    let idx = 0;
    let message = "";
    let isMounted = true;
    let timeoutId: number | null = null;

    const type = () => {
      if (!isMounted) return;

      if (idx >= text.length) return;

      message += text.charAt(idx);
      container.textContent = message;

      idx++;
      timeoutId = setTimeout(type, interval);
    };

    type();

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [interval, text]);

  return (
    <div
      className={mergeCss(classes["root"], className)}
      ref={containerRef}
    ></div>
  );
};

export default AnimatedText;
