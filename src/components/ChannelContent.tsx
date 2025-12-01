import { useGameValue } from "@/contexts/game";
import classes from "@/styles/channel-content.module.css";
import type { Channel } from "@/types";
import { useEffect } from "react";
import AnimatedText from "./AnimatedText";
import Conversation from "./Conversation";
import EncryptedText from "./EncryptedText";

type UseChannelSoundtrackOptions = {
  channelId: string;
  soundtrack?: Howl;
  encrypted?: boolean;
};

const useChannelSoundtrack = (options: UseChannelSoundtrackOptions) => {
  const { channelId, encrypted, soundtrack } = options;
  const { answer } = useGameValue();

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
  }, [channelId, soundtrack, encrypted]);
};

type Props = Channel & { encrypted?: boolean };

const ChannelContent = (props: Props) => {
  const { answer } = useGameValue();
  const { id, soundtrack, content = [], encrypted = false } = props;

  useChannelSoundtrack({
    channelId: id,
    encrypted,
    soundtrack,
  });

  if (!content.length) return null;

  const isConversation = content.length > 1;

  const renderEncrypted = () => {
    return <EncryptedText />;
  };

  const renderConversation = () => {
    return <Conversation dialogues={content} />;
  };

  const renderSingleText = () => {
    return (
      <AnimatedText
        text={content[0].text}
        author={content[0].author}
      />
    );
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
