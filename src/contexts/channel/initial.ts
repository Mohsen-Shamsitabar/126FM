import type { Channel, ContextAction } from "@/types";

type State = {
  channels: Channel[];
  currentChannel?: Channel;
};

const initialState: State = {
  channels: [],
  currentChannel: undefined,
};

enum ActionType {
  SET_CHANNELS = "SET_CHANNELS",
  SET_CURRENT_CHANNEL = "SET_CURRENT_CHANNEL",
}

type Action =
  | ContextAction<State, "channels", ActionType.SET_CHANNELS>
  | ContextAction<State, "currentChannel", ActionType.SET_CURRENT_CHANNEL>
  | undefined;

const initialAction: Action = undefined;

type Dispatch = React.Dispatch<Action>;

const initialDispatch: Dispatch = () => initialAction;

export {
  ActionType,
  initialAction,
  initialDispatch,
  initialState,
  type Action,
  type Dispatch,
  type State,
};
