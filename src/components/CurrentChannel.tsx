import { useChannelValue } from "@/contexts/channel";

const ChannelInfo = () => {
  const { currentChannel } = useChannelValue();

  return (
    <div>
      {currentChannel?.name} {currentChannel?.frequency}
    </div>
  );
};

export default ChannelInfo;
