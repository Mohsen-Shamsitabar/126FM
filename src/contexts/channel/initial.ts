import type { Channel } from "@/types";

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
  SHIFT_CHANNEL = "SHIFT_CHANNEL",
}

// type Action =
//   | ContextAction<State, "channels", ActionType.SET_CHANNELS>
//   | ContextAction<State, "currentChannel", ActionType.SET_CURRENT_CHANNEL>
//   | ContextAction<State, "currentChannel", ActionType.SHIFT_CHANNEL>
//   | undefined;

type Action =
  | {
      type: ActionType.SET_CHANNELS;
      payload: { channels: State["channels"] };
    }
  | {
      type: ActionType.SET_CURRENT_CHANNEL;
      payload: { currentChannel: State["currentChannel"] };
    }
  | {
      type: ActionType.SHIFT_CHANNEL;
      payload: { shiftAmount: number };
    }
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
