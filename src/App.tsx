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
    name: "GameOff Radio",
    currentProgram: "Game Jam Of 2025",
    frequency: "98.5",
    type: ChannelType.Podcast,
    content: [
      {
        id: "1",
        author: "Host",
        text: "Hello John, Howdy?",
      },
      {
        id: "2",
        author: "Guest",
        text: "Hey man! What games are we expecting to be released this week?",
      },
      {
        id: "3",
        author: "Host",
        text: "Well there is this puzzle game about decoding some radio station riddles called 'Dewave'",
      },
      {
        id: "4",
        author: "Guest",
        text: "Dewave? What a stupid name! Anyway, when is the release date?",
      },
      {
        id: "5",
        author: "Host",
        text: "It's on January 10th.",
      },
      {
        id: "6",
        author: "Guest",
        text: "Oh, that's funny...",
      },
    ],
  },
  {
    id: "2",
    name: "Ferasati FM",
    currentProgram: "All Quite On The Western Front",
    frequency: "99.0",
    type: ChannelType.TalkShow,
    content: [
      {
        id: "1",
        author: "Mr.Ferasati",
        text: "Well, I believe the movie 'All Quiet On The Western Front' should have been released in the toilet! I mean you could have done so much for the humanity with that budget instead of wasting it on this garbage!",
      },
      {
        id: "2",
        author: "Mr.Aslani",
        text: "I think you are being too harsh! This movie is considered a master piece. Did you even watch through the ending? It was so dramatic! I could have never made such a good ending.",
      },
      {
        id: "3",
        author: "Mr.Ferasati",
        text: "You don't get to talk about endings! I criticize movies and I say it was F%*@ing B#!*$%#t!",
      },
    ],
  },
  {
    id: "3",
    name: "MusicToMakeLoveTo",
    currentProgram: "Zombie",
    frequency: "99.2",
    type: ChannelType.Music,
    content: [
      {
        id: "1",
        author: "",
        text: `Another head hangs lowly
Child is slowly taken
And the violence caused such silence
Who are we mistaken?
But you see, it's not me, it's not my family
In your head, in your head, they are fightin'
With their tanks and their bombs
And their bombs and their guns
In your head, in your head, they are cryin'
In your head, in your head
Zombie, zombie, zombie-ie-ie
What's in your head, in your head?
Zombie, zombie, zombie-ie-ie-ie, oh
Doo, doo, doo-doo, doo
Doo, doo, doo-doo, doo
Doo, doo, doo-doo, doo
Doo, doo, doo-doo, doo
Another mother's breakin'
Heart is taking over
When the violence causes silence
We must be mistaken
It's the same old theme, since 1916
In your head, in your head, they're still fightin'
With their tanks and their bombs
And their bombs and their guns
In your head, in your head, they are dyin'
In your head, in your head
Zombie, zombie, zombie-ie-ie
What's in your head, in your head?
Zombie, zombie, zombie-ie-ie-ie
Oh-oh-oh-oh-oh-oh-oh
Eh-eh, oh, ya-ya
`,
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
