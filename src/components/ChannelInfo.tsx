import { useChannelDispatch, useChannelValue } from "@/contexts/channel";
import { ActionType } from "@/contexts/channel/initial";
import classes from "@/styles/current-channel.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LoopingText from "./LoopingText";

const ChannelInfo = () => {
  const { currentChannel } = useChannelValue();
  const channelDispatch = useChannelDispatch();

  if (!currentChannel) return <br />;

  const getFreq = (): [string, string] => {
    const { frequency } = currentChannel;

    return frequency.split(".") as [string, string];
  };

  const getLoopingText = (): string => {
    const { currentProgram, name } = currentChannel;

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

  const freq = getFreq();

  const loopingText = getLoopingText();

  return (
    <div className={classes.root}>
      <button
        onClick={handlePreviousBtnClick}
        className={classes.btn}
      >
        <ChevronLeft />
      </button>

      <div className={classes["info-container"]}>
        <h4 className={classes.freq}>
          {freq[0]}
          <span>.</span>
          {freq[1]} FM
        </h4>

        <div>
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
        <ChevronRight />
      </button>
    </div>
  );
};

export default ChannelInfo;
