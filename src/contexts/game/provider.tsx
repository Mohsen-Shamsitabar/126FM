import { type PropsWithChildren, useReducer } from "react";
import { GameDispatchContext, GameValueContext } from "./context";
import { type State, initialState } from "./initial";
import { reducer } from "./reducer";

type Props = PropsWithChildren<State>;

const GameProvider = ({ children, ...contextProps }: Props) => {
  const initialValue = { ...initialState, ...contextProps };

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <GameDispatchContext.Provider value={dispatch}>
      <GameValueContext.Provider value={state}>
        {children}
      </GameValueContext.Provider>
    </GameDispatchContext.Provider>
  );
};

export { GameProvider };
