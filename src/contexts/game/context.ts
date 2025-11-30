import { createContext } from "react";
import {
  initialDispatch,
  initialState,
  type Dispatch,
  type State,
} from "./initial";

const GameValueContext = createContext<State>(initialState);

const GameDispatchContext = createContext<Dispatch>(initialDispatch);

export { GameDispatchContext, GameValueContext };
