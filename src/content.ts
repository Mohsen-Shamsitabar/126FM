import sounds from "./sounds";
import { ChannelType, type Channel } from "./types";

export const CHANNELS: Channel[] = [
  {
    id: "1",
    name: "GameOff Radio",
    currentProgram: "Game Jam Of 2025",
    frequency: "88.5",
    soundtrack: sounds.radioStatic,
    type: ChannelType.Podcast,
    content: [
      {
        id: "1",
        author: "Host",
        text: "Hello John, Howdy?",
      },
      {
        id: "2",
        author: "John",
        text: "Hey man! What games are we expecting to be released this week?",
      },
      {
        id: "3",
        author: "Host",
        text: "Well there is this puzzle game about decoding some radio station riddles called 'Dewave'",
      },
      {
        id: "4",
        author: "John",
        text: "Dewave? What a stupid name! Anyway, when is the release date?",
      },
      {
        id: "5",
        author: "Host",
        text: "It's on January 10th.",
      },
      {
        id: "6",
        author: "John",
        text: "Oh, that's funny...",
      },
    ],
  },
  {
    id: "2",
    name: "Ferasati FM",
    currentProgram: "All Quite On The Western Front",
    frequency: "92.0",
    soundtrack: sounds.radioStatic,
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
    soundtrack: sounds.radioStatic,
    type: ChannelType.Music,
    content: [
      {
        id: "1",
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
  {
    id: "4",
    name: "Breaking Broadcast",
    currentProgram: "Chemical Confessions",
    frequency: "100.1",
    soundtrack: sounds.radioStatic,
    type: ChannelType.TalkShow,
    content: [
      {
        id: "1",
        author: "Walter",
        text: `I can’t believe I’m sitting here, in this booth, explaining mustard—yellow mustard—like some amateur cooking show host. Do you have any idea how humiliating this is? A man who once commanded chemical perfection, who engineered purity and precision, reduced to crushing seeds and timing acid shocks for a condiment that belongs on a goddamn hot dog. Actually, you know what else involves acetic acid, heat, and precise timing? Methamphetamine. Ninety-nine point one percent pure. Blue. The kind that makes cartels beg and grown men cry. That’s chemistry.
This?
This is what they give you when they’ve taken everything else.
Tell your listeners Walter White doesn’t do mustard.
I am the one who knocks. And I’m done answering the door for condiments.`,
      },
    ],
  },
  {
    id: "5",
    name: "SecretService FM",
    currentProgram: "Treaty of Versailles",
    frequency: "126.0",
    soundtrack: sounds.radioStatic,
    type: ChannelType.News,
    content: [
      {
        id: "1",
        text: "The last acts in concluding peace with Germany were performed on  Saturday afternoon as arranged, by the Allies of Europe and Japan. All  measures for the execution of the treaty are at once set on foot. The  most important, from the point of view of the resumption of friendly  relations, is the repatriation of the large number of German prisoners  still held in France and of the crews of the scuttled ships held by  Great Britain.",
      },
    ],
    encrypted: true,
  },
];
