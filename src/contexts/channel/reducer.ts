import { isFunction } from "@/utils";
import { type Action, ActionType, type State } from "./initial";
import { clamp } from "./utils";

const reducer = (state: State, action: Action): State => {
  if (!action) return state;

  switch (action.type) {
    case ActionType.SET_CHANNELS: {
      const payload = isFunction(action.payload)
        ? action.payload(state)
        : action.payload;
      return { ...state, channels: payload.channels };
    }
    case ActionType.SET_CURRENT_CHANNEL: {
      const payload = isFunction(action.payload)
        ? action.payload(state)
        : action.payload;
      return { ...state, currentChannel: payload.currentChannel };
    }
    case ActionType.SHIFT_CHANNEL: {
      const { shiftAmount } = action.payload;

      const { channels, currentChannel } = state;

      if (!currentChannel) {
        return { ...state, currentChannel: channels[0] };
      }

      const currentChannelIdx = channels.findIndex(
        channel => channel.id === currentChannel.id,
      );

      const newIdx = clamp(
        0,
        currentChannelIdx + shiftAmount,
        channels.length - 1,
      );

      return { ...state, currentChannel: channels[newIdx] };
    }
    default:
      return state;
  }
};

export { reducer };
