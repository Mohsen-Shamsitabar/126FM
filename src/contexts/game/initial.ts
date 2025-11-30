import type { ContextAction, Game } from "@/types";

type State = Game;

const initialState: State = { answer: undefined };

enum ActionType {
  SET_ANSWER = "SET_ANSWER",
}

type Action = ContextAction<State, "answer", ActionType.SET_ANSWER> | undefined;

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
