export type Channel = {
  id: string;
  name: string;
  frequency: number;
  currentProgram: string;
  type: ChannelType;
};

export enum ChannelType {
  Music = "music",
  News = "news",
  TalkShow = "talkShow",
  Podcast = "podcast",
  ScreenPlay = "screenPlay",
}
