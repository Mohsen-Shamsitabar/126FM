import {
  Container,
  Pages,
  RadioFooter,
  RadioSpeaker,
  Waveform,
} from "@/components";
import { ChannelProvider } from "@/contexts/channel";
import { CHANNELS } from "./content";
import { GameProvider } from "./contexts/game";

const App = () => {
  return (
    <GameProvider>
      <ChannelProvider channels={CHANNELS}>
        <Container>
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
