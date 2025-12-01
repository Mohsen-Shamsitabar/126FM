import { useGameValue } from "@/contexts/game";
import classes from "@/styles/channel-content.module.css";
import type { Channel } from "@/types";
import { useEffect } from "react";
import AnimatedText from "./AnimatedText";
import Conversation from "./Conversation";
import EncryptedText from "./EncryptedText";

type Props = Channel & { encrypted?: boolean };

const ChannelContent = (props: Props) => {
  const { answer } = useGameValue();
  const { id, soundtrack, content = [], encrypted = false } = props;

  useEffect(() => {
    if (!answer) return;
    if (!soundtrack) return;

    const randomRate = Math.random() * 0.5;

    soundtrack.rate(1 + randomRate);
  }, [answer, soundtrack]);

  useEffect(() => {
    if (!soundtrack) return;

    const randomRate = Math.random() * 0.5;

    soundtrack.rate(1 + randomRate);
    soundtrack.play();

    return () => {
      if (soundtrack) soundtrack.stop();
    };
  }, [id, soundtrack, encrypted]);

  if (!content.length) return null;

  const isConversation = content.length > 1;

  const renderEncrypted = () => {
    return <EncryptedText />;
  };

  const renderConversation = () => {
    return <Conversation dialogues={content} />;
  };

  const renderSingleText = () => {
    return <AnimatedText text={content[0].text} />;
  };

  return (
    <div
      key={id}
      className={classes.root}
    >
      {encrypted && !answer
        ? renderEncrypted()
        : isConversation
          ? renderConversation()
          : renderSingleText()}
    </div>
  );
};

export default ChannelContent;
