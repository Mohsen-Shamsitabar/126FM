import type { ChannelContent } from "@/types";
import { useEffect, useState } from "react";
import BubbleText from "./BubbleText";

type Props = {
  dialogues: ChannelContent[];
  onComplete?: () => void;
  index?: number;
};

const Conversation = (props: Props) => {
  const { dialogues, onComplete, index = 0 } = props;

  const [shouldRenderNext, setShouldRenderNext] = useState(false);

  const dialogue = dialogues[index];

  useEffect(() => {
    if (onComplete && index === dialogues.length - 1) {
      onComplete();
    }

    return () => setShouldRenderNext(false);
  }, [index]);

  if (!dialogue) return null;

  return (
    <>
      <BubbleText
        key={dialogue.id}
        author={String(dialogue.author)}
        text={dialogue.text}
        interval={5}
        onComplete={() => {
          setShouldRenderNext(true);
        }}
      />

      {shouldRenderNext && index + 1 < dialogues.length && (
        <Conversation
          index={index + 1}
          dialogues={dialogues}
          onComplete={onComplete}
        />
      )}
    </>
  );
};

export default Conversation;
