import type { ContextAction, Game } from "@/types";

type State = Game;

const initialState: State = { answer: undefined, emptySubmissionCount: 0 };

enum ActionType {
  SET_ANSWER = "SET_ANSWER",
  INCREMENT_EMPTY_SUBMISSION = "INCREMENT_EMPTY_SUBMISSION",
  RESET_EMPTY_SUBMISSION = "RESET_EMPTY_SUBMISSION",
}

type Action =
  | ContextAction<State, "answer", ActionType.SET_ANSWER>
  | ContextAction<
      State,
      "emptySubmissionCount",
      ActionType.INCREMENT_EMPTY_SUBMISSION
    >
  | ContextAction<
      State,
      "emptySubmissionCount",
      ActionType.RESET_EMPTY_SUBMISSION
    >
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
