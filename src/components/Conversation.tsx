import type { ChannelContent } from "@/types";
import { useEffect, useState } from "react";
import BubbleText from "./BubbleText";

type Props = {
  index?: number;
  dialogues: ChannelContent[];
};

const Conversation = (props: Props) => {
  const { index = 0, dialogues } = props;

  const [shouldRenderNext, setShouldRenderNext] = useState(false);

  const dialogue = dialogues[index];

  useEffect(() => {
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
        />
      )}
    </>
  );
};

export default Conversation;
