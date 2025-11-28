import {
  AnimatedText,
  Container,
  RadioFooter,
  RadioSpeaker,
} from "@/components";
import { ChannelProvider } from "@/contexts/channel";
import { ChannelType, type Channel } from "@/types";
import { useState } from "react";

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
  const [counter, setCounter] = useState(0);

  return (
    <ChannelProvider channels={CHANNELS}>
      <Container>
        <RadioSpeaker />

        {/* <Waveform /> */}

        {/* ChannelContent */}

        <AnimatedText
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quaerat perspiciatis aut sapiente fuga. Sapiente sit dolor error ipsa nemo earum eos blanditiis dolorem tempore explicabo pariatur, velit assumenda? Repellendus labore quasi assumenda magni, rem repellat. Totam, distinctio quaerat rem eaque impedit recusandae! Exercitationem asperiores magnam sed blanditiis, incidunt qui velit a iste sint eos? Cupiditate dolores similique fuga? Unde dolorum sed tempore laudantium at error minus cupiditate voluptas quod eius quis temporibus adipisci minima ad ratione rem, atque sit? Voluptatum, odit quam. Soluta molestiae earum temporibus deleniti, nobis accusamus, error illo in vero suscipit nihil unde numquam voluptatem nisi."
          onComplete={() => setCounter(counter + 1)}
        />

        <RadioFooter />
      </Container>
    </ChannelProvider>
  );
};

export default App;
