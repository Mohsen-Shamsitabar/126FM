import { Howl } from "howler";

const sounds = {
  radioClick: new Howl({
    src: "src/assets/audio/radio-click.mp3",
    format: "mp3",
    volume: 1.0,
  }),
} as const;

export default sounds;
