import { useContext } from "react";
import { GameDispatchContext, GameValueContext } from "./context";

const useGameValue = () => {
  const context = useContext(GameValueContext);

  if (context === undefined) {
    throw new Error("useGameValue must be used within a GameProvider");
  }

  return context;
};

const useGameDispatch = () => {
  const context = useContext(GameDispatchContext);

  if (context === undefined) {
    throw new Error("useGameDispatch must be used within a GameProvider");
  }

  return context;
};

export { useGameDispatch, useGameValue };
