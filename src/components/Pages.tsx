import { useChannelValue } from "@/contexts/channel";
import classes from "@/styles/pages.module.css";
import { ChannelContent, HomePage } from ".";

const Pages = () => {
  const { currentChannel } = useChannelValue();

  const isHomePage = !currentChannel;

  const renderPage = () => {
    if (isHomePage) return <HomePage />;

    return <ChannelContent {...currentChannel} />;
  };

  return <div className={classes.root}>{renderPage()}</div>;
};

export default Pages;
