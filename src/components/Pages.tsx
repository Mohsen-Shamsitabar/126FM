import { useChannelValue } from "@/contexts/channel";
import { ChannelContent, HomePage } from ".";

const Pages = () => {
  const { currentChannel } = useChannelValue();

  const isHomePage = !currentChannel;

  if (isHomePage) return <HomePage />;

  return <ChannelContent />;
};

export default Pages;
