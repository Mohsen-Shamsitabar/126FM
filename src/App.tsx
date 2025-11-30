import {
  Container,
  Pages,
  RadioFooter,
  RadioSpeaker,
  Waveform,
} from "@/components";
import { ChannelProvider } from "@/contexts/channel";
import { ChannelType, type Channel } from "@/types";
import { GameProvider } from "./contexts/game";
import useAudioUnlock from "./hooks/useAudioUnlock";

const CHANNELS: Channel[] = [
  {
    id: "1",
    name: "Channel 1",
    currentProgram: "",
    frequency: "98.5",
    type: ChannelType.Music,
    content: [
      {
        id: "1",
        author: "person",
        text: "Lorem ipsum  inventore eaque necessitatibus pariatur iusto, animi molestiae eius labore omnis quasi nulla! Cum animi fugiat, dolores fuga id nemo porro obcaecati consectetur quidem assumenda deserunt eius quo blanditiis accusantium!",
      },
      {
        id: "2",
        author: "another person",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ullam ratione ducimus veritatis neque, quae quo, cum perferendis temporibus dolore! Accusantium perferendis ipsa repellat debitis ad itaque dotibus pariatur iusto, animi molestiae eius labore omnis quasi nulla! Cum animi fugiat, dolores fuga id nemo porro obcaecati consectetur quidem assumenda deserunt eius quo blanditiis accusantium!",
      },
      {
        id: "3",
        author: "third person",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ullam ratione ducimus veritatis neque, accusantium!",
      },
    ],
  },
  {
    id: "2",
    name: "Channel 2",
    currentProgram: "",
    frequency: "99.0",
    type: ChannelType.Music,
    encrypted: true,
    content: [
      {
        id: "1",
        author: "person",
        text: "Lorem ipsum dolor sit temporibus dolore! Accusantium perferendis ipsa repellat debitis ad itaque dolorem inventore eaque necessitatibus pariatur iusto, animi molestiae eius labore omnis quasi nulla! Cum animi fugiat, dolores fuga id nemo porro obcaecati consectetur quidem assumenda deserunt eius quo blanditiis accusantium!",
      },
      {
        id: "2",
        author: "another person",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ullam ratione ducimus veritatis neque, quae eos dolorem e eaque necessitatibus pariatur iusto, animi molestiae eius labore omnis quasi nulla! Cum animi fugiat, dolores fuga id nemo porro obcaecati consectetur quidem assumenda deserunt eius quo blanditiis accusantium!",
      },
    ],
  },
];

const App = () => {
  useAudioUnlock();

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
