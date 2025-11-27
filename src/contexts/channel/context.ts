import { createContext } from "react";
import {
  initialDispatch,
  initialState,
  type Dispatch,
  type State,
} from "./initial";

const ChannelValueContext = createContext<State>(initialState);

const ChannelDispatchContext = createContext<Dispatch>(initialDispatch);

export { ChannelDispatchContext, ChannelValueContext };
