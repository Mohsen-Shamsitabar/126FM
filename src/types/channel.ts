export type Channel = {
  id: string;
  name: string;
  frequency: string;
  currentProgram: string;
  type: ChannelType;
  content: ChannelContent[];
  encrypted?: boolean;
};

export type ChannelContent = {
  id: string;
  author: string | unknown;
  text: string;
};

export enum ChannelType {
  Music = "music",
  News = "news",
  TalkShow = "talkShow",
  Podcast = "podcast",
  ScreenPlay = "screenPlay",
}
