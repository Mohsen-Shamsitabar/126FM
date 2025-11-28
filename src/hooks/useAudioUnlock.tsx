import { useEffect } from "react";

const useAudioUnlock = () => {
  const unlock = () => {
    if (Howler.ctx && Howler.ctx.state === "suspended") {
      Howler.ctx.resume();
    }

    window.removeEventListener("click", unlock);
    window.removeEventListener("touchstart", unlock);
    window.removeEventListener("keydown", unlock);
  };

  useEffect(() => {
    window.addEventListener("click", unlock);
    window.addEventListener("touchstart", unlock);
    window.addEventListener("keydown", unlock);

    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);
};

export default useAudioUnlock;
