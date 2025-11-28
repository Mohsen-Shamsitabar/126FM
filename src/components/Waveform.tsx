import { useChannelValue } from "@/contexts/channel";
import classes from "@/styles/waveform.module.css";
import { useEffect, useRef } from "react";

const WAVE_CHARACTERS_INACTIVE = "12312312312312312312312312312312312312";
const WAVE_CHARACTERS = "ĂăĄąĆćĈċĊĉċčīēģĹĶĲĺķĺĺĳĽĳĶĵĦČģĹĪĞĠĝġđČĐĤĨĳħģĚģĢĞĢİķī";

const ANIMATION_INTERVAL = 150;

const Waveform = () => {
  const { currentChannel } = useChannelValue();
  const waveRef = useRef<HTMLDivElement>(null);

  const active = !!currentChannel;

  useEffect(() => {
    const waveform = waveRef.current;

    if (!waveform) return;

    const getRandomCharacters = () =>
      Array.from({ length: WAVE_CHARACTERS.length })
        .map(
          () =>
            WAVE_CHARACTERS[Math.floor(Math.random() * WAVE_CHARACTERS.length)],
        )
        .join("");

    if (!active) {
      waveform.textContent = WAVE_CHARACTERS_INACTIVE;
      return;
    }

    const interval = setInterval(() => {
      waveform.textContent = getRandomCharacters();
    }, ANIMATION_INTERVAL);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div
      ref={waveRef}
      className={classes.waveform}
    />
  );
};

export default Waveform;
