import { useContext } from "react";
import { ChannelDispatchContext, ChannelValueContext } from "./context";

const useChannelValue = () => {
  const context = useContext(ChannelValueContext);

  if (context === undefined) {
    throw new Error("useChannelValue must be used within a ChannelProvider");
  }

  return context;
};

const useChannelDispatch = () => {
  const context = useContext(ChannelDispatchContext);

  if (context === undefined) {
    throw new Error("useChannelDispatch must be used within a ChannelProvider");
  }

  return context;
};

export { useChannelDispatch, useChannelValue };
