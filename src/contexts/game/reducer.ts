import { isFunction } from "@/utils";
import { type Action, ActionType, type State } from "./initial";

const reducer = (state: State, action: Action): State => {
  if (!action) return state;

  switch (action.type) {
    case ActionType.SET_ANSWER: {
      const payload = isFunction(action.payload)
        ? action.payload(state)
        : action.payload;

      return { ...state, answer: payload.answer };
    }

    default:
      return state;
  }
};

export { reducer };
