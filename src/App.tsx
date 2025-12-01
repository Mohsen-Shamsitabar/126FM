import {
  Container,
  Introduction,
  Pages,
  RadioFooter,
  RadioSpeaker,
  Waveform,
} from "@/components";
import { ChannelProvider } from "@/contexts/channel";
import { ChannelType, type Channel } from "@/types";
import { useCallback, useEffect, useState } from "react";
import { CHANNELS } from "./content";
import { GameProvider } from "./contexts/game";

const App = () => {
  const [isIntro, setIsIntro] = useState(true);

  const handleOnClick = useCallback(() => {
    if (!isIntro) return;
    setIsIntro(false);
  }, [isIntro]);

  const renderIntro = () => {
    if (isIntro) {
      return <Introduction onClick={handleOnClick} />;
    }

    return null;
  };

  useEffect(() => {
    if (isIntro) {
      Howler.mute(true);
      return;
    }

    Howler.mute(false);
  }, [isIntro]);

  return (
    <GameProvider>
      <ChannelProvider channels={CHANNELS}>
        <Container>
          {renderIntro()}
          <RadioSpeaker />
          <Waveform />
          <Pages />
          <RadioFooter />
        </Container>
      </ChannelProvider>
    </GameProvider>
  );
};

export default App;
