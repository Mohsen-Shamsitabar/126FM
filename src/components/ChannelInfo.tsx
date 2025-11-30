import { useChannelDispatch, useChannelValue } from "@/contexts/channel";
import { ActionType } from "@/contexts/channel/initial";
import { useGameValue } from "@/contexts/game";
import classes from "@/styles/channel-info.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Input from "./Input";
import LoopingText from "./LoopingText";

const ChannelInfo = () => {
  const { answer } = useGameValue();
  const { currentChannel } = useChannelValue();
  const channelDispatch = useChannelDispatch();

  if (!currentChannel) return <br />;

  const isEncrypted = currentChannel.encrypted && !answer;

  const getFreq = (): [string, string] => {
    const { frequency } = currentChannel;

    return frequency.split(".") as [string, string];
  };

  const getLoopingText = (): string => {
    const { currentProgram, name, frequency } = currentChannel;

    if (isEncrypted) return `${frequency} FM - ${name} is ENCRYPTED!`;

    return `${name} - ${currentProgram}`;
  };

  const handlePreviousBtnClick = () => {
    channelDispatch({
      type: ActionType.SHIFT_CHANNEL,
      payload: { shiftAmount: -1 },
    });
  };

  const handleNextBtnClick = () => {
    channelDispatch({
      type: ActionType.SHIFT_CHANNEL,
      payload: { shiftAmount: +1 },
    });
  };

  const renderFreq = () => {
    if (isEncrypted) {
      return <Input />;
    }

    return (
      <h4>
        {freq[0]}
        <span>.</span>
        {freq[1]} FM
      </h4>
    );
  };

  const freq = getFreq();

  const loopingText = getLoopingText();

  return (
    <div className={classes.root}>
      <button
        onClick={handlePreviousBtnClick}
        className={classes.btn}
      >
        <ChevronLeft
          size={32}
          strokeWidth={1}
        />
      </button>

      <div className={classes["info-container"]}>
        <div className={classes["freq-container"]}>{renderFreq()}</div>

        <div className={classes["text-container"]}>
          <LoopingText
            // We could add a key to restart the animation
            // key={loopingText}
            element={loopingText}
          />
        </div>
      </div>

      <button
        onClick={handleNextBtnClick}
        className={classes.btn}
      >
        <ChevronRight
          size={32}
          strokeWidth={1}
        />
      </button>
    </div>
  );
};

export default ChannelInfo;
