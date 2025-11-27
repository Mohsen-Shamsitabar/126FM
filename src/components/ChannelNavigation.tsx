import {
  ChannelAction,
  useChannelDispatch,
  useChannelValue,
} from "@/contexts/channel";
import classes from "@/styles/channel-navigation.module.css";
import { type Channel } from "@/types";
import clsx from "clsx";
import type { PropsWithChildren } from "react";

const Separator = () => {
  return (
    <div className={clsx(classes.separator)}>
      <span />
    </div>
  );
};

const HomeButton = () => {
  const channelDispatch = useChannelDispatch();

  const handleClick = () => {
    channelDispatch({
      type: ChannelAction.SET_CURRENT_CHANNEL,
      payload: { currentChannel: undefined },
    });
  };

  return (
    <button
      className={clsx(classes.button, classes.home)}
      onClick={handleClick}
    >
      <span className={clsx(classes.icon)} />
    </button>
  );
};

const ChannelButton = (props: PropsWithChildren<Channel>) => {
  const { children, ...channel } = props;

  const channelDispatch = useChannelDispatch();

  const handleClick = () => {
    channelDispatch({
      type: ChannelAction.SET_CURRENT_CHANNEL,
      payload: { currentChannel: channel },
    });
  };

  return (
    <button
      className={clsx(classes.button, classes.channel)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

const ChannelNavigation = () => {
  const { channels } = useChannelValue();

  return (
    <nav className={clsx(classes.root)}>
      <HomeButton />
      <Separator />
      <ol className={clsx(classes.container)}>
        {channels.map((channel, index) => (
          <li key={channel.id}>
            <ChannelButton {...channel}>{index + 1}</ChannelButton>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ChannelNavigation;
