import {
  Container,
  Pages,
  RadioFooter,
  RadioSpeaker,
  Waveform,
} from "@/components";
import { ChannelProvider } from "@/contexts/channel";
import { ChannelType, type Channel } from "@/types";
import useAudioUnlock from "./hooks/useAudioUnlock";

const CHANNELS: Channel[] = [
  {
    id: "1",
    name: "Channel 1",
    currentProgram: "",
    frequency: "98.5",
    type: ChannelType.Music,
  },
  {
    id: "2",
    name: "Channel 2",
    currentProgram: "",
    frequency: "99.0",
    type: ChannelType.Music,
  },
  {
    id: "3",
    name: "Channel 3",
    currentProgram: "",
    frequency: "101.3",
    type: ChannelType.Music,
  },
  {
    id: "4",
    name: "Channel 4",
    currentProgram: "",
    frequency: "102.5",
    type: ChannelType.Music,
  },
  {
    id: "5",
    name: "Channel 5",
    currentProgram: "",
    frequency: "103.7",
    type: ChannelType.Music,
  },
];

const App = () => {
  useAudioUnlock();

  return (
    <ChannelProvider channels={CHANNELS}>
      <Container>
        <RadioSpeaker />

        <Waveform />

        {/* ChannelContent */}

        <Pages />

        <RadioFooter />
      </Container>
    </ChannelProvider>
  );
};

export default App;
