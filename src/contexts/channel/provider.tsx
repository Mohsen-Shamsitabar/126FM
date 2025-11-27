import { type PropsWithChildren, useReducer } from "react";
import { ChannelDispatchContext, ChannelValueContext } from "./context";
import { type State, initialState } from "./initial";
import { reducer } from "./reducer";

type Props = PropsWithChildren<State>;

const ChannelProvider = ({ children, ...contextProps }: Props) => {
  const initialValue = { ...initialState, ...contextProps };

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <ChannelDispatchContext.Provider value={dispatch}>
      <ChannelValueContext.Provider value={state}>
        {children}
      </ChannelValueContext.Provider>
    </ChannelDispatchContext.Provider>
  );
};

export { ChannelProvider };
