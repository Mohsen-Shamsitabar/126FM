export type Channel = {
  id: string;
  name: string;
  frequency: string;
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
